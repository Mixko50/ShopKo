import "../styles/globals.css";
import { ProfileWrapper } from "../context/profileContext";
import theme from "../utils/theme";
import { ThemeProvider } from "@material-ui/styles";
import ReactDOM from "react-dom";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <ProfileWrapper>
                <Component {...pageProps} />
            </ProfileWrapper>
        </ThemeProvider>
    );
}

export default MyApp;
