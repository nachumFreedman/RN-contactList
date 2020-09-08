import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import FastImage from 'react-native-fast-image'
import { goToUserCard } from "../../navigation"

export default UserList = (props) => {
    return (
        <ScrollView >
            <View style={styles.container}>
                {
                    props.users.map((user) => {
                        return (
                            <TouchableOpacity onPress={() => { goToUserCard(user); }} style={styles.user} key={user.cell}>
                                <FastImage
                                    style={{ width: 150, height: 150 }}
                                    source={{
                                        uri: user.picture.large,
                                        priority: FastImage.priority.normal,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                                <Text>{user.name.first}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: 'row'
    },
    user: {
        height: "20%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    }
});