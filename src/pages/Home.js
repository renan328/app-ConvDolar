import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
        
            let [cotacao, setCotacao] = useState();
            let [qtd, setQtd] = useState();
            let [total, setTotal] = useState();

            function Calc(){
                let resultado = parseFloat(qtd) / parseFloat(cotacao)
                setTotal(resultado);
            
                alert("O resultado é " + total);
            }   

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Projeto Converção de real para dolar</Text>
            <TextInput onChangeText={setCotacao} style={styles.campo} placeholder="Digite a cotação do dolar hoje"></TextInput>
            <TextInput onChangeText={setQtd} style={styles.campo} placeholder="Digite a quantidade de reais"></TextInput>
            <TouchableOpacity style={styles.botao} onPress={Calc}>
                <Text style={styles.botaoTexto}> Coverter </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 40
    },

    campo:{
        backgroundColor: '#003',
        color: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        borderRadius: 10
    },

    botao:{
        backgroundColor: '#003',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },

    botaoTexto:{
        color: 'red',
        fontSize: 17,
        fontWeight: 700,
    }
});
