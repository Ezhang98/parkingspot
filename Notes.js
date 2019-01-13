import React from 'React';
import { MapView } from 'expo';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from './Home';
import store from 'react-native-simple-store';


export default class Notes extends React.Component{

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

	onSave(){

		store.update('testKey', { testAttribute: this.state.changes});

		store.get('testKey')
			.then((res) =>
				console.log(res.testAttribute));

		this.setState({
			changes: "yea",
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
						onPress={() =>
							this.props.navigation.navigate('Home')}
						title="Cancel"
						color='red'
					/>
					<Button
						onPress={() => {
							this.onSave();
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
