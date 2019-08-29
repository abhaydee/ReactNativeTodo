import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import EditScreen from "./EditScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './Main';

export default class Note extends Component {
  render() {
    // const AppNavigator = createStackNavigator({
    //   Notes: Note,
    //   Edit: EditScreen,
    //   Main: Main,
    // });
    
    // createAppContainer(AppNavigator);
    console.log("this.props.arrays", this.props.arrays);
    return this.props.arrays.map((val, index) => {
      return (
        <React.Fragment>
          <View key={index} style={styles.note}>
            <Text style={styles.noteText}>{val}</Text>

            <TouchableOpacity
              style={styles.noteEdit}
              onPress={() => {
                // debugger;
                this.props.navigation.navigate('Edit',{val:val,id:index});
              }}
            >
              <Text style={styles.noteEditText}>E</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.deleteMethod(index)}
              style={styles.noteDelete}
            >
              <Text style={styles.noteDeleteText}>X</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      );
    });
  }
}

// export default Note
const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteEdit: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 40
  },
  noteDeleteText: {
    color: "white"
  },
  noteEditText: {
    color: "white"
  }
});
