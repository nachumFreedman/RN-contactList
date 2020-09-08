import { Alert } from "react-native";
let users = [];



export const getRandomUsers = () => {
    return new Promise((resolve) => {
        if (users.length > 9) resolve(users);



        const alertError = (res) => {
            Alert.alert(
                "Oops something went wrong",
                "Try again?",
                [
                    {
                        text: "No",
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => getAnotherUser() }
                ],
                { cancelable: false }
            );

            console.error(`response to randomuser came back with a ${res.status}`);
        }

        const getAnotherUser = () => {
            fetch("https://randomuser.me/api")
                .then((res) => {
                    if (res.status !== 200) {
                        alertError(res);
                    } else {
                        res.json().then((user) => {
                            users.push(...user.results);
                            if (users.length < 1) {
                                //this timeout prevents 503 response from ramdonuser api
                                setTimeout(() => {
                                    getAnotherUser();
                                }, 100)
                            } else {
                                resolve(users);
                            }
                        })
                    }
                }).catch((error) => {
                    alertError(error);
                })
        }
        getAnotherUser();


    })

}

