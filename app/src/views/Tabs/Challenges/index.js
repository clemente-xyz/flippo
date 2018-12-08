import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Emoji from "react-native-emoji";
import Styles from "./styles";

export default class extends Component {
  handleClick = itemKey => {
    alert(itemKey);
    this.props.navigation.navigate("OnChallenge", { itemKey: itemKey });
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Challenges for me</Text>
          <View style={Styles.spacer} />
          <Emoji name="writing_hand" style={{ fontSize: 25 }} />
        </View>
        <View>
          <FlatList
            data={[
              { key: "penguin", name: "Penguin" },
              { key: "rabbit", name: "Rabbit" },
              { key: "dog", name: "Dog" },
              { key: "chicken", name: "Chicken" },
              { key: "turtle", name: "Turtle" },
              { key: "camel", name: "Camel" },
              { key: "whale", name: "Whale" },
              { key: "snake", name: "Snake" },
              { key: "elephant", name: "Elephant" },
              { key: "monkey", name: "Monkey" },
              { key: "fish", name: "Fish" },
              { key: "frog", name: "Frog" },
              { key: "pig", name: "Pig" },
              { key: "bear", name: "Bear" },
              { key: "octopus", name: "Octopus" }
            ]}
            renderItem={({ item }) => (
              <View style={Styles.sectionsContainer}>
                <View style={Styles.itemsContainer}>
                  <Emoji name={item.key} style={{ fontSize: 25 }} />
                  <Text style={Styles.items}>{item.name}</Text>
                  <View style={Styles.spacer} />
                  <TouchableOpacity onPress={() => this.handleClick(item.key)}>
                    <Text style={Styles.button}>Draw me!</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.hr} />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
