import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, View, Button } from 'react-native';

export default class Home extends React.Component {
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
						onPress={() => 
								this.props.navigation.navigate('Notes')}
						title="Pin Location"
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
		position: 'relative',
		bottom: '1%',
	},
});
