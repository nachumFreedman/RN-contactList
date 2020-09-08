import { Navigation } from "react-native-navigation";

import UserList from "./src/screens/UserList";
import UserCard from "./src/screens/UserCard";

Navigation.registerComponent(`UserList`, () => UserList);
Navigation.registerComponent(`UserCard`, () => UserCard);

export const goToUserCard = (user) =>
    //TODO: use .push instead of .showModal 
    Navigation.showModal({
        stack: {
            children: [
                {
                    component: {
                        name: "UserCard",
                        passProps: {
                            user
                        }
                        //TODO: get back button working 
                    }
                }
            ]
        }
    });

export const goToUserList = (users) =>
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: "UserList",
                            passProps: {
                                users
                            }
                        }
                    }
                ]
            }
        }
    });