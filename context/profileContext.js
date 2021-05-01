import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "../utils/axios";

export const ProfileContext = createContext();

const user = {
    isLoggedIn: false,
    username: "",
    firstname: "",
    lastname: "",
    profilepic: "",
    type: "",
};

export const ProfileWrapper = ({ children }) => {
    const [profile, setProfile] = useState(user);

    const profileState = {
        profile,
        setProfile: (a) => {
            setProfile(a);
        },
    };

    useEffect(async () => {
        try {
            const user = await axios.post(`/account/fetch`);
            setProfile({
                ...profile,
                isLoggedIn: user.data.isLoggedIn,
                username: user.data.username,
                firstname: user.data.firstname,
                lastname: user.data.lastname,
                profilepic: user.data.profilepic,
                type: user.data.type,
            });
        } catch (error) {
            console.log("error");
        }
    }, []);

    return (
        <ProfileContext.Provider value={profileState}>
            {children}
        </ProfileContext.Provider>
    );
};
