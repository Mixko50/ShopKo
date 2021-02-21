import { useState } from 'react';
import { createContext, useContext } from 'react';

export const ProfileContext = createContext();

export const ProfileWrapper = ({ children }) => {
    const [profile, setProfile] = useState({
        firstname: "Apisit",
        lastname: "Maneerat",
        username: "Mixko",
        email: "apisithotmail@hotmail.co.th",
        phone: "0632458648",
        gender: 1,
    });

    const profileState = {
        profile,
        setProfile: (a) => {
            setProfile(a);
        }
    }

    return (
        <ProfileContext.Provider value={profileState}>
            {children}
        </ProfileContext.Provider>
    );
}