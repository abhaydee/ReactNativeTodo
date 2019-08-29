/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import Main from './app/components/Main';
import store from './app/store'
import { Provider } from 'react-redux'
import Note from './app/components/Note'
import EditScreen from "./app/components/EditScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";




 class App extends Component{
  render() {
  
    return(
      <Provider store={store}>
        <Containers></Containers>
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator({
 
  Main: Main,
   Notes: Note,
  Edit: EditScreen,
});

  const Containers=createAppContainer(AppNavigator);

export default App