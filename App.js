import React from 'react';
import { StyleSheet, Text, View, Button, NavigatorIOS } from 'react-native';
import {MapView} from 'expo';
import PropTypes from 'prop-types';
//import { Marker } from 'react-native-maps';

//const Marker = MapView.Marker

export default class App extends React.Component {
  render() {
    //const { region } = this.props
    return (
      <View style={styles.container}>
        <MapView
            style={{ flex: 1 }}
            //region={region}
            onRegionChange={this.onRegionChange}
            showsMyLocationButton={true}
            showsUserLocation={true}
            followsUserLocation={true}
        > 
        </MapView>
        
        <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
        />
        
		<View style={styles.pinButton}>
			<Button
				onPress = {() => {
					Alert.alert("Button has been pressed")
				}}
				title="Pin"
				color="#ffffff"
			/> 
		</View>
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
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
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
		position: 'absolute',
		bottom: 10,
		left: '45%',
	},
});

