import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking } from 'react-native';

const colorGit = '#010409';
const img = 'https://avatars.githubusercontent.com/u/22839113?v=4';
const urlImg = 'https://i.pinimg.com/originals/08/c4/e8/08c4e8f6abb4413079428ac3fb67ef32.gif';

const App = () => {

    const handlePress = async () => {
        const res = await Linking.canOpenURL(urlImg);
        if (res) {
            await Linking.openURL(urlImg);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGit} barStyle="light-content" />
            <View style={style.content}>
                <Text accessibilityLabel='Eu te AMO gata!!!' style={style.text}>Eu te AMO gata!!!</Text>
                <Image accessibilityLabel='Prof Tio Victor' style={style.avatar} source={{ uri: img }} />

                <Pressable onPress={handlePress}>
                    <View style={style.button}>
                        <Text style={style.textButton}>Open</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGit,
        flex: 1,
        justifyContent: 'center',
    },

    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'blue',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderColor: 'yellow',
        borderWidth: 5,
    },

    button: {
        marginTop: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 33,
    }
});