import React, { Component } from "react";
// import { Text, View } from 'react-native'
import Main from "./Main";
import Note from "./Note";
import { updateTask } from '../actions/index';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";

class EditScreen extends Component {

    state={
        noteText:'',
        index:null
    }
  render() {
    // debugger;
    const Data = this.props.navigation.getParam("val");
    return (
      <React.Fragment>
        <View style={styles.note}>
          <TextInput style={styles.noteText} onChangeText={(text)=>this.setState({noteText:text,index:this.props.navigation.getParam('id')})}>{Data}</TextInput>
        </View>
        <TouchableOpacity  
            onPress={()=>{this.props.onUpdateTodo(this.state.noteText,this.state.index)}}
        >
          <Text style={styles.buttonUpdate}>Update</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
    console.log(state.todo.noteArray, "state.todo.noteArray");
     return {
       noteArray: state.todo.noteArray,
       noteText: state.todo.noteText
     }
}
const mapDispatchToProps = dispatch => {
    return {
        onUpdateTodo: (notetext,index) => dispatch(updateTask(notetext,index))
    }
}

export default connect (
    mapStateToProps,mapDispatchToProps
) (EditScreen);

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "rgb(100, 255, 218)",
    backgroundColor:'rgb(10, 25, 47)',
    color:'rgb(100, 255, 218)'
 },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "rgb(100, 255, 218)",
    color:'rgb(100, 255, 218)'
  },
  buttonUpdate:{
    backgroundColor: "rgb(10, 25, 47)",
    textAlign:"center",
    marginTop:10,
    marginRight:70,
    marginLeft:70,
    height:40,
    paddingTop:10,
    borderRadius:50,
    color:'rgb(100, 255, 218)',
    fontSize:14
  }
});
