import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './Note';
import {connect} from 'react-redux'
import { addNewTask, deleteTask } from '../actions/index'

 class Main extends Component{
     state = {
         noteText:''
     }
     static navigationOptions={
         header:null
     }

    //  deleteMethod(e,index){
    //      e.preventDefault();
    //      this.props.deleteMethod(index);
    //  }

  render() {
    //   console.log(this.props.noteArray, "aayush agrawal");
      let notes = <Note navigation={this.props.navigation} deleteMethod={(index)=>this.props.onDeleteTodo(index)} arrays={this.props.noteArray}/>

    return(
        // <Text>Jay aayush bunty sunil</Text>
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.headerText}>NOTER</Text>        
         </View>
         <ScrollView style={styles.scrollContainer}>
             {notes}
         </ScrollView>
             <View style={styles.footer}>
               
                <TextInput
                 style={styles.textInput}
                 onChangeText={(bunty)=>this.setState({noteText:bunty})}
                 value={this.state.noteText}
                 placeholder='type' 
                 placeholderTextColor='white'
                 underlineColorAndroid='transparent'>
                </TextInput>

             </View>
             <TouchableOpacity onPress={()=>{this.props.onAddTodo(this.state.noteText)}} style={styles.addButton}>
                 <Text style={styles.addButtonText}>+</Text>
             </TouchableOpacity>
        
      </View>
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
    // console.log(this.props.noteArray, "ppppppp");
    return {
        onAddTodo: (notetext) => dispatch(addNewTask(notetext)),
        onDeleteTodo: (index) => dispatch(deleteTask(index)),
    }
}


const styles = StyleSheet.create({
    container:{
    flex:1,
    },
    header:{
        backgroundColor:'#3299a8',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:10,
        borderBottomColor:'#ddd',
    },
    headerText:{
        color:'white',
        fontSize:18,
        padding:26,
    },
    scrollContainer:{
        flex:1,
        marginBottom:100,
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
    },
    textInput: {
        alignSelf:'stretch',
        color: '#f2f2f2',
        padding:20,
        backgroundColor:'#252525',
        borderTopWidth:2,
        borderTopColor:'#ededed',
    },
    addButton:{
        position:'absolute',
        zIndex:11,
        right:20,
        bottom:90,
        backgroundColor:'#3299a8',
        width:70,
        height:70,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
    },
    addButtonText:{
        color:'#fff',
        fontSize:24,
    },
});

export default connect (
    mapStateToProps,mapDispatchToProps
) (Main);