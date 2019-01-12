import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MapView} from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
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

