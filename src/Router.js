import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {

  return(
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main">
        <Scene
          key="todayPage"
          component={TodayPage}
          title="Today"
          initial
        />

        <Scene
          key="browsePage"
          component={BrowsePage}
          title="Browse"
        />

        <Scene
          key="searchPage"
          component={SearchPage}
          title="Search"
        />

        <Scene
          key="inputPage"
          compontent={InputPage}
          title="Input"
        />

        <Scene
          onRight={() => Actions.loginForm()}
          //if logged in, show User's detail
          rightButtonImage={require('path/to/your/icon')}
          key="userPage"
          component={UserPage}
          title="User"
        />

        <Scene
          key="loginForm"
          component={LoginForm}
          title="Login"
        />
      </Scene>
    </Router>
  ); // paddingTop 60 on Android
};
// title will be shown at the navbar on the top of the screen

export default RouterComponent;
