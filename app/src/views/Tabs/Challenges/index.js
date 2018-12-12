import React, { Component } from "react";
import { graphql } from "react-apollo";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Emoji from "react-native-emoji";
import Styles from "./styles";

import getChallengeQuery from "../../../apollo/Query/Challenge";

class Challenges extends Component {
  _renderItem = ({ item }) => (
    <View style={Styles.sectionsContainer}>
      <View style={Styles.itemsContainer}>
        <Emoji name="dog" style={{ fontSize: 25 }} />
        <Text style={Styles.items}>{item.animal}</Text>
        <View style={Styles.spacer} />
        <TouchableOpacity onPress={() => this.handleClick(item.key)}>
          <Text style={Styles.button}>Draw me!</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.hr} />
    </View>
  );

  handleClick = itemKey => {
    this.props.navigation.navigate("OnChallenge", { itemKey: itemKey });
  };

  render() {
    const { data } = this.props;

    if (data.loading) {
      return (
        <View style={Styles.container}>
          <ActivityIndicator size="large" />;
        </View>
      );
    }
    return (
      <View style={Styles.container}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Challenges for me</Text>
          <View style={Styles.spacer} />
          <Emoji name="writing_hand" style={{ fontSize: 25 }} />
        </View>
        <View>
          <FlatList
            data={data.getChallenges}
            keyExtractor={item => item._id}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}

export default graphql(getChallengeQuery)(Challenges);
