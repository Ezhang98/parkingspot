import React from 'React';
import { MapView } from 'expo';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import storage from 'react-native-modest-storage';


export default class Notes extends React.Component{
    render() {
        return(
            <View style={styles.container}>
            </View>
        )
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
