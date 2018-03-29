import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from '../Card/index.js';
import CardSection from '../CardSection/index.js';
import Button from '../Button/index.js';

export default class AlbumDetail extends Component {
    render() {

        const { headerContentStyle,
                thumbnailStyle,
                thumbnailContainerStyle,
                headerTextStyle,
                imageStyle,
              } = styles;

        return (
            <Card>
                <CardSection>
                    <View style = {thumbnailContainerStyle}>
                        <Image style = {thumbnailStyle}
                               source = {{ uri:this.props.album.thumbnail_image }}
                        />
                    </View>
                    <View style = {headerContentStyle}>
                        <Text style = {headerTextStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style = {imageStyle} source = {{ uri:this.props.album.image}}/>
                </CardSection>

                <CardSection>
                    <Button onPress = {() => console.log(this.props.album.title)}/>
                </CardSection>
            </Card>
        )
    }
}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
}