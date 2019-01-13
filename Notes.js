import React from 'React';
import { MapView } from 'expo';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from './Home';
import Table from './Saved';
import { AsyncStorage } from "react-native"


export default class Notes extends React.Component{
    
  _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('0');
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
  }
  
  _storeData = async () => {
    try {
        await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
        // Error saving data
    }
  }
  
  saveItem(){
      this.props.navigation.navigate('Saved');
      
  }

	constructor(props){
		super(props);

		this.state = {
			changes: 'naw',
		};
	}

	onRegionChange(region) {
		//this.setState({
		//	changes: "yea",
		//});
	}

	onSave = () => {
		
		this.setState({
			changes: "yea",
		}, () => {
			storage.update('testKey', { testAttribute: this.state.changes});
		});
		console.log('update key');

		storage.get('testKey').then( (res) => console.log(res.testAttribute));
	}

	testPrint = () => {
		console.log('print key');
		storage.clear();
		console.log('keys cleared');

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
				<TextInput placeholder="NAME"></TextInput>
				<TextInput placeholder="NOTES"></TextInput>
				<View style={styles.buttons}>
					<Button
						onPress={() =>
							this.props.navigation.navigate('Home')}
						title="Cancel"
						color='red'
					/>
					<Button
						onPress={() => {
							this.onSave();
							this.testPrint();
							this.props.navigation.navigate('Home');
						}}
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
	notes: {
		flex: 1,
		paddingTop: '2%',
		left: '2%',
	},
	buttons: {
		position: 'relative',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingTop: '50%',
		alignItems: 'center',
	},
});
