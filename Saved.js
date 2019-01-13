import React from 'React';
import { FlatList, StyleSheet, View, Button, Text } from 'react-native';
import PropTypes from 'prop-types';
import storage from 'react-native-modest-storage';

const Row = ({label, lat, long, notes}) => {
	return(
		<View style={styles.row}>
			<Text style={styles.text}>{label}</Text>
			<Text style={styles.text}>{lat.toFixed(4)}</Text>
			<Text style={styles.text}>{long.toFixed(4)}</Text>
			<Text style={styles.text}>{notes}</Text>
		</View>
	);
}

const TableHeader = () => {
	console.log("yeet");
	return (
		<View style={[styles.row, styles.headerRow]}>
			<Text style={[styles.header, styles.thItem]}>Label</Text>
			<Text style={[styles.header, styles.thItem]}>Longitude</Text>
			<Text style={[styles.header, styles.thItem]}>Latitude</Text>
			<Text style={[styles.header, styles.thItem]}>Notes</Text>
		</View>
	);
}

export default class Notes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
			loading: false,
			tableList: []
        }
    }

	componentWillMount() {
		let count = 0;
		let arr = [];
		storage.keys().then( (keys) => {
			const ARRAY_LENGTH = keys.length;
			for(let i = 0; i < ARRAY_LENGTH; i++){
				let data = keys[i];
				storage.get(data).then( (res) => {
					count++;
					console.log("\n" + data + " " + (count)); 
					console.log(res.long);
						
					arr.push({
						label: data,
						lat: res.lat,
						long: res.long,
						notes: res.noteText
					});
					
					if(count ==  ARRAY_LENGTH){
						console.log("REALLY DONE");
						this.setState({
							loading: true,
							tableList: arr
						});
					}
				});
			}
		});

	}

    render() {/*
        const state = this.state;
        const element = (data, index) => (

            <View style={styles.btn}>
              <Text style={styles.btnText}>button</Text>
            </View>

        );*/
		
		if(!this.state.loading){
			return <Text> LOADING... </Text> ;	
		} 
		if(this.state.loading){
			for(let i = 0; i < this.state.tableList.length; i++){
				let data = this.state.tableList[i];
				console.log(JSON.stringify(data));
			}
		return (
			<View style={styles.container}>		
				<View style={styles.tableTEMP}> 
					<FlatList
						data={this.state.tableList}
						renderItem={
							({item}) =>
								<Row label={item.label} lat={item.lat} long={item.long} notes={item.notes}/>
						}
						keyExtractor={(label, lat, long, notes) => label}
						ListEmptyComponent={() => 
								<Text style={{ textAlign: 'center' }}>
									Empty!
								</Text>
						}
						ListHeaderComponent={() => this.state.tableList.length > 0 && <TableHeader />}
					/>
				</View>
				<View style={styles.buttons}>
					<Button
						onPress={() =>
							this.props.navigation.navigate('Home')}
						title="Home"
						color='black'
					/>
					<Button
						onPress={() => storage.clear() }
						title="CLEAR"
						color='red'
						/>
				</View>
			</View>
			)
		}
	}
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
	buttons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	tableTEMP: {
		position: 'absolute',
		alignContent: 'center',
		left: '10%',
		top: '15%',
	},
	row: {
		justifyContent: 'space-evenly',
		flexWrap: 'nowrap',
		flexDirection: 'row',
	},
	headerRow: {
		marginBottom:5,
	},
	header: {
		textAlign: 'center',
		fontWeight: 'bold',
		padding: 10,
	},
});
