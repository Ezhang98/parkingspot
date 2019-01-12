import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Saved extends React.Component{


    render() {
        const data = [1, 2, 3, 4, 5];
        return (
            <View style={styles.container}>
                <View style={styles.table}>
                    
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
	table: {
		flex: 1,
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