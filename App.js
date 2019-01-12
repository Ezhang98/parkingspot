import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
	pinButton: {
		backgroundColor: '#FF0000',
		position: 'absolute',
		bottom: 10,
	}
	
});
