import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Image source={require('../assets/practical_test_logo.png')} style={{ width: 200, height: 200 }} />
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ fontSize: 18, color: '#93A3AF', paddingLeft: 20 }}>Username</Text>
                </View>
                <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <TextInput
                        value={email}
                        onChangeText={text => setEmail(text)}
                        mode='flat'
                        selectionColor='#FBBCO5'
                        style={{ paddingRight: 50, paddingLeft: 10, height: 50, backgroundColor: '#3A3C3F' }}
                        theme={{ colors: { text: '#ffffff' } }}
                    />
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ fontSize: 18, color: '#93A3AF' }}>Password</Text>
                    </View>
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        mode='flat'
                        style={{ paddingRight: 50, paddingLeft: 10, height: 50, backgroundColor: '#3A3C3F' }}
                        theme={{ colors: { text: '#ffffff' } }}
                    />
                    <Text style={{ fontSize: 14, color: '#93A3AF', paddingTop: 10 }}>Forgot your password</Text>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <View style={styles.btnView}>
                        <Button style={styles.funcBtn} mode="contained" onPress={() => navigation.navigate('List')}>
                            LOGIN
                        </Button>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 14, color: '#93A3AF', paddingTop: 10, textAlign: 'center' }}>or continue with</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ paddingLeft: 150 }}>
                        <TouchableOpacity style={styles.Socialbutton}>
                            <Image style={{ width: 20, height: 20 }} source={require("../assets/facebook.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <TouchableOpacity style={styles.Socialbutton2}>
                            <Image style={{ width: 20, height: 20 }} source={require("../assets/google.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 14, color: '#93A3AF', textAlign: 'center', paddingTop: 10, }}>By continuing, you agree to our Terms of Service, privacy policy</Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#ffffff',
                        marginTop:20,
                        marginLeft:50,
                        flex:1,
                        height:1,
                        width:300
                    }}
                />
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, justifyContent: 'center'  }}>
                    <Text style={{ fontSize: 14, color: '#ffffff', textAlign: 'center', paddingTop: 10,}}>Not Have an account yet?</Text>
                    <Text style={{ fontSize: 14, color: '#fbbc05', textAlign: 'center', paddingTop: 10, }}>Join Us</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
    input: {
        width: 250,
        height: 35,
        margin: 10,
        //padding: 8,
        borderRadius: 8,
        fontSize: 18,
        fontWeight: '500',
    },
    header: {
        // height:80,
        // paddingTop: 38,
        backgroundColor: '#185d9e'
    },
    title: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnView: {
        paddingLeft: 20,
        paddingRight: 20
    },
    funcBtn: {
        backgroundColor: '#fbbc05',
        height: 60,
        paddingTop: 13,
        borderRadius: 30,
    },
    Socialbutton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#4267b2',
        paddingLeft: 17,
        borderRadius: 100,
    },
    Socialbutton2: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: 17,
        borderRadius: 100,
    }

})
