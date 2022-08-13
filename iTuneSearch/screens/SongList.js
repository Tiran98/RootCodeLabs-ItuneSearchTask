import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import { TextInput, Searchbar, Card, Button, IconButton } from 'react-native-paper';
import filter from 'lodash.filter';

export const SongList = ({ navigation }) => {
    const API_ENDPOINT = `https://itunes.apple.com/search?term=all`;
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(results => {
                setData(results.results);
                setFullData(results.results);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            });
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>
                    Error fetching data... Check your network connection!
                </Text>
            </View>
        );
    }

    function renderHeader() {
        return (
            <View
                style={{
                    backgroundColor: '#111111',
                    padding: 10,
                    marginVertical: 10,
                    borderRadius: 20,
                    flex: 1,
                    flexDirection: 'row',

                }}
            >
                <TextInput
                    mode='flat'
                    left={<TextInput.Icon name="eye" color="#fbbc05" />}
                    underlineColor='#fbbc05'
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={queryText => handleSearch(queryText)}
                    placeholder="Search"
                    style={{ backgroundColor: '#111111', width: 270 }}
                />
                <View>
                    <Button style={styles.searchCancel} mode="contained">
                        Cancel
                    </Button>
                </View>
            </View>
        );
    }

    const handleSearch = text => {
        const formattedQuery = text;
        const filteredData = filter(fullData, user => {
            return contains(user, formattedQuery);
        });
        setData(filteredData);
        setQuery(text);
    };

    const contains = ({ artistName }, query) => {

        if (artistName.includes(query)) {
            return true;
        }

        return false;
    };

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={renderHeader}
                data={data}
                keyExtractor={(item, index) => item.trackId}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ marginTop: 10 }}>
                            <Image source={{ uri: item.artworkUrl60 }} style={{ width: 60, height: 60 }} />
                        </View>
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.trackName}</Text>
                            <Text style={styles.listItemText2}>{item.artistName} . {item.collectionName}</Text>
                        </View>
                        <View>
                            <Button style={styles.btnMore} mode="contained" size={10} onPress={() => navigation.navigate('Details', {item})}>...</Button>
                        </View>
                    </View>
                )}
            />


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#111111',
        paddingLeft: 10
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        padding: 10,
        alignItems: 'flex-start',
        backgroundColor: '#111111',
        width: 260
    },
    listItemText: {
        fontSize: 14,
        color: '#ffffff'
    },
    listItemText2: {
        fontSize: 10,
        color: '#ffffff'
    },
    searchCancel: {
        backgroundColor: '#111111',
        marginLeft: 10,
        marginTop: 15
    },
    btnMore:{
        backgroundColor: '#111111',
        marginLeft: 10,
        marginright: 10,
        marginTop: 15
    }
})