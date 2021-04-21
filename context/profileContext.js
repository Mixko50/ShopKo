import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "../utils/axios";

export const ProfileContext = createContext();

const user = {
    isLoggedIn: false,
    username: "",
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    email: "",
    gender: "",
    birthdate: "",
    profilepic:
        "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/78168108_2953186831382681_1766514813279666176_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHxkbu67Sg5uYj1cbc2r7qImktqjmfOG2qaS2qOZ84bavTZAD79YeT-IJTh8Nc62XfEO81xjI9UNgTWYYS7PSFh&_nc_ohc=EPGDiVy9k3UAX8JAJve&_nc_ht=scontent.fbkk7-3.fna&oh=0b775b1d0896e159085dc0c357282776&oe=6080B4E3",
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
                username: user.data.username,
                phone: user.data.phone,
                email: user.data.email,
                gender: user.data.gender,
                birthdate: user.data.birthdate,
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
