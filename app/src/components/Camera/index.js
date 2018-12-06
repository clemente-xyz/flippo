import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Camera, Permissions } from "expo";
import Styles from "./styles";
import Button from "../Button";

export default class extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    identifedAs: "",
    loading: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  takePicture = async function() {
    if (this.camera) {
      this.camera.pausePreview();

      this.setState({
        loading: true
      });

      const options = {
        base64: true
      };

      const data = await this.camera.takePictureAsync(options);

      this.identifyImage(data.base64);
    }
  };

  identifyImage(imageData) {
    process.nextTick = setImmediate;

    const Clarifai = require("clarifai");

    const app = new Clarifai.App({
      apiKey: "6478f7a69ee34052985a4a9857c963ea"
    });

    app.models
      .predict(Clarifai.GENERAL_MODEL, { base64: imageData })
      .then(response => {
        this.displayAnswer(response.outputs[0].data.concepts[0].name).catch(
          err => alert(err)
        );
      });
  }

  displayAnswer(identifiedImage) {
    this.setState({
      identifedAs: identifiedImage,
      loading: false
    });

    alert(this.state.identifedAs);

    this.camera.resumePreview();
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Hey! You don't have access to camera</Text>;
    } else {
      return (
        <View style={Styles.mainContainer}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={Styles.mainContainer}
            type={this.state.type}
          >
            <ActivityIndicator
              size="large"
              style={Styles.loadingIndicator}
              color="#fff"
              animating={this.state.loading}
            />
            <View style={Styles.cameraContainer}>
              <View style={Styles.buttonContainer}>
                <Button
                  title="Flipp it!"
                  textColor="white"
                  backgroundColor="#4286f4"
                  touched={this.takePicture.bind(this)}
                />
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
