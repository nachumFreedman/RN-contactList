import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image'


export default UserList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <FastImage
                    style={{ width: 150, height: 150 }}
                    source={{
                        uri: props.user.picture.large,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <Text>{props.user.name.first + " " + props.user.name.last}</Text>
            <Text>{props.user.cell}</Text>
            <Text>{props.user.email}</Text>
            <Text>{props.user.location.street.number + " " + props.user.location.street.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        marginBottom: 30
    }
});