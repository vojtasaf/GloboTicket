import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Home =(props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.globologo}
                source={require('./images/_Export_globoticket-bug-black.png')}
            />
            <Text style={styles.title}>Welcome TO GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    );
}

const introText = 'Quid ad utilitatem tantae pecuniae? Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur?';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    globologo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: "Ubuntu-Regular"
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Regular'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    }
});

export default Home;