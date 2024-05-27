// SThemeProvider.jsx

import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AdapterCss from './AdapterCss.jsx';
import createSTheme, { createMuiTheme } from './SThemeUtils.jsx';
import { BootstrapThemeProvider, CusThemeProvider, ToggleSThemeProvider} from './SThemeContext.jsx';

/**
 * 项目的皮肤供应器
 * @param {} param0
 * @returns
 */
function SThemeProvider({ children }) {
    const [theme, changeTheme] = useState({ custom: createSTheme("light"), muiTheme: createMuiTheme("light")});
    const toggleThemHandler = () => {
        const muiThemeMode = theme.muiTheme.palette.mode === "light" ? "dark" : "light";
        changeTheme({
            custom: createSTheme(muiThemeMode),
            muiTheme: createMuiTheme(muiThemeMode),
        })
    }

    return (
        <ThemeProvider theme={theme.muiTheme}>
            <CusThemeProvider theme={theme.custom}>
                <BootstrapThemeProvider mode={theme.custom.mode}>
                    <ToggleSThemeProvider handler={toggleThemHandler}>
                        <AdapterCss />
                        {
                            children
                        }
                    </ToggleSThemeProvider>
                </BootstrapThemeProvider>
            </CusThemeProvider>
        </ThemeProvider>
    )
}

export default SThemeProvider;
