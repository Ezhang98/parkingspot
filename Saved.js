import React from 'React';
import { MapView } from 'expo';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import PropTypes from 'prop-types';
import storage from 'react-native-modest-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class Notes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Name', 'Latitude', 'Longitude', 'Notes'],
          tableData: []
        }
    }

    getSome  = () => {
      storage.keys().then(function(value) {
        
        tableData = value;
        console.log(tableData);
        // expected output: "foo"
      });



      
    }

    render() {/*
        const state = this.state;
        const element = (data, index) => (

            <View style={styles.btn}>
              <Text style={styles.btnText}>button</Text>
            </View>

        );*/
        return (
          
          <View style={styles.buttons}>
					<Button
						onPress={() =>
							this.props.navigation.navigate('Home')}
						title="Home"
						color='red'
					/>
					<Button
						onPress={() => {
							this.getSome();
							this.props.navigation.navigate('Saved');
						}}
						title="Save"
					/>
				</View>/*
        <View style={styles.container}>
        <Text style={styles.header}>Locations</Text>
        <FlatList
          data={tableData}
          renderItem={
            ({ item, index }) =>
              <Row highScore={item} index={index} key={index} />
          }
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() =>
            <Text style={{ textAlign: 'center' }}>
              There are no Locations yet!
            </Text>
          }
          ListHeaderComponent={() => tableData.length > 0 && <TableHeader />}
        />
      </View>
          /*
            <View style={styles.container}>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              {
                state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {
                      rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>
			<View style={styles.clearAllButton}>
				<Button
					onPress = {() => {
						storage.clear();
					}}
					title="Clear All"
				/>
			</View>
          </View>*/
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});
