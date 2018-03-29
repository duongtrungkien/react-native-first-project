import React, { Component } from "react"
import { View } from "react-native"
import Header from "./components/Header/index.js"
import AlbumList from "./components/AlbumList/index.js"

export default class App extends Component{
    render(){
        return(
            <View style = {{ flex: 1 }}>
                <Header Albums="Albums!"/>
                <AlbumList/>
            </View>
        )
    }
}

