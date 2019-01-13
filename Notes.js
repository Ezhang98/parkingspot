import React from 'React';
import { MapView } from 'expo';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from './Home';
import storage from 'react-native-modest-storage';


export default class Notes extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			storageLabel: "default",
			regionLong: null,
			regionLat: null,
			textInput: "N/A",
		}
	}

	onSave  = () => {
		storage.update(this.state.storageLabel, {
			long: this.state.regionLong,
			lat: this.state.regionLat,
			noteText: this.state.textInput,
		});

		console.log("key: " + this.state.storageLabel + " " + this.state.regionLong + " " + this.state.regionLat + " | " + this.state.textInput);
	}

  render() {
	  return(
	  	<View style={styles.container}>
			<MapView
				style={{ flex: 1 }}
				onRegionChange = {(region) => {
					this.setState({
						regionLong: region.longitude,
						regionLat: region.latitude,
					});
				}}
				showsMyLocationButton={true}
				showsUserLocation={true}
				followsUserLocation={true}
			>
			</MapView>
			<View style={styles.notes}>
				<TextInput 
					style = {{flex: 1}}
					onChangeText= {(text) =>{
						this.setState({
							storageLabel: text
						});
					}}
					placeholder="NAME">
				</TextInput>

				<TextInput 
					onChangeText= {(text) => {
						this.setState({
							textInput: text
						});
					}}
					placeholder="NOTES">
				</TextInput>
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
							this.props.navigation.navigate('Saved');
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
		paddingTop: '40%',
		alignItems: 'center',
	},
});
