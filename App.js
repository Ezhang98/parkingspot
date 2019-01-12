import React from 'react';
import { StyleSheet, Text, View, Button, NavigatorIOS, TextInput } from 'react-native';
import {MapView} from 'expo';
import PropTypes from 'prop-types';
import { GestureHandler } from 'expo';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
		> 
		</MapView>
		<View style={styles.pinButton}>
			<Button
                onPress={this._onForward}
				title="Pin Location"
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

