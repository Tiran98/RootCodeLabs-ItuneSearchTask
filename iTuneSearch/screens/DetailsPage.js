import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

export const DetailsPage = ({ navigation, route }) => {

    const {item} = route.params;

    return (
        <ScrollView style={[styles.container, { flexDirection: 'column' }]}>
            <View style={{ flex: 1, backgroundColor: '#fbbc05', height: 300 }}>
                <Button mode="contained" style={styles.backButton} onPress={() => navigation.navigate('List')}>
                    Back
                </Button>
                <Text style={{ fontSize: 25, color: '#ffffff', paddingTop: 20, paddingLeft: 30 }}>
                    {item.trackName}
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                    <Image source={{ uri: item.artworkUrl100 }} style={{ width: 150, height: 150, paddingLeft: 20, paddingRight:20 }} />
                    <View>
                        <Text style={{ fontStyle: 'normal', marginTop: 60 }}>Genre :</Text>
                        <Text style={{ fontStyle: 'normal', marginTop: 10, color: '#ffffff' }}>{item.primaryGenreName} </Text>
                    </View>
                    <View>
                        <Text style={{ fontStyle: 'normal', marginTop: 60, paddingLeft: 40 }}>Country :</Text>
                        <Text style={{ fontStyle: 'normal', marginTop: 10, paddingLeft: 40, color: '#ffffff' }}>{item.country} </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#111111', height: 400 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item}>
                        Artist Name :
                    </Text>
                    <Text style={styles.item}> {item.artistName}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item}>
                        Collection Name :
                    </Text>
                    <Text style={styles.item}> {item.collectionCensoredName}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item}>
                        Track Price :
                    </Text>
                    <Text style={styles.item}> {item.trackPrice}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item}>
                        Release Date :
                    </Text>
                    <Text style={styles.item}> {item.releaseDate}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item}>
                        Description :
                    </Text>
                    <Text style={styles.item}> {item.shortDescription}</Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backButton: {
        width: 80,
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: '#111111'
    },
    item: {
        paddingTop: 10,
        fontSize: 14,
        color: '#ffffff'
    }
})
