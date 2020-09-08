import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { goToUserList } from "../../navigation"; // import the functions for loading either the login screen or the tabs screen (shows home screen by default)
import { getRandomUsers } from "../../network";

export default Loading = () => {
    useEffect(() => {
        updateUsers();
    });

    const updateUsers = async () => {
        getRandomUsers().then((users) => {
            goToUserList(users);
        })
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});