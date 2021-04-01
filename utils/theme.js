import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    shape: {
        borderRadius: 10,
    },
});

export default theme;
