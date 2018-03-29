import React, { Component } from "react"
import { Text, View } from "react-native"

export default class Header extends Component{
    render(){

        const {textStyle, viewStyle} = styles;

        return(
            <View style = {viewStyle}>
                <Text style = {textStyle}>{this.props.Albums}</Text>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },

    textStyle: {
        fontSize: 20
    }
}