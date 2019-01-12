import React from 'react';
import { StyleSheet, Text, View, Button, NavigatorIOS, TextInput } from 'react-native';
import {MapView} from 'expo';
import PropTypes from 'prop-types';
import { GestureHandler } from 'expo';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AsyncStorage } from "react-native"

export default class App extends React.Component {
  render() {
    return (
		<View style={styles.container}>  
            <NavigatorIOS
                initialRoute={{
                    component: MyScene,
                    title: 'My Location',
                    passProps: {index: 1},
                }}
                style={{flex: 1}}
            />
        </View>
    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this.state = {
        myKey: null
    }
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('1');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async saveKey(value) {
    try {
      await AsyncStorage.setItem('1', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }


  onRegionChange(region) {
    console.log("Region is ", region);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: AnotherScene,
      title: 'Another Scene ',
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (
	  <View style={styles.container}>
		<MapView
			style={{ flex: 1 }}
			onRegionChange={this.onRegionChange}
			showsMyLocationButton={true}
			showsUserLocation={true}
			followsUserLocation={true}
            value={this.onRegionChange}
		> 
		</MapView>
		<View style={styles.pinButton}>
			<Button
                onPress={(value) => this.saveKey(value)}
				title="Pin Location"
				color="#ffffff"
			/> 
		</View>
        <View style={styles.pinButton}>
			<Button
                onPress={console.log("Region is ", this.getKey.bind(this))}
				title="print"
				color="#ffffff"
			/> 
		</View>
       
	  </View>

    );
  }
}

class AnotherScene extends React.Component{
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
	let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Main Scene ',
      passProps: {index: nextIndex},
    });
  }

  render() {
	  return(
		<View style={styles.container}>
			<MapView
				style={{ flex: 1 }}
				onRegionChange={this.onRegionChange}
				showsMyLocationButton={true}
				showsUserLocation={true}
				followsUserLocation={true}
			> 
			</MapView>
			<View style={styles.notes}>
				<TextInput 
					placeholder="NAME">
				</TextInput>
				<TextInput placeholder="NOTES"></TextInput>
			<View style={styles.buttons}>
				<Button
					onPress={this._onForward}
					title="Cancel"
					color='red'
				/>
				<Button
					onPress={this._onForward}
					title="Save"
				/>
			</View>
		</View>
		</View>
	  );
  }
}

const styles = StyleSheet.create({
  	container: {
   		flex: 1,
    	backgroundColor: '#fff',
		justifyContent: 'center',
  	},
	pinButton: {
		backgroundColor: '#FF0000',
		position: 'relative',
		bottom: '1%'
	},
	notes: {
		flex: 1,
		paddingTop: '2%',
		left: '2%',
	},
	buttons: {
		position: 'relative',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: '60%',
		alignItems: 'center',
	},
});

