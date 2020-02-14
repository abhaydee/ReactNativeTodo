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
    borderBottomColor: "#ededed",
    backgroundColor:'rgb(10, 25, 47)'
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
    color:'rgb(100, 255, 218)'
  },

  bg:{
    
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(10, 25, 47)",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteEdit: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(10, 25, 47)",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 40
  },
  noteDeleteText: {
    color: "rgb(100, 255, 218)"
  },
  noteEditText: {
    color: "rgb(100, 255, 218)"
  }
});
