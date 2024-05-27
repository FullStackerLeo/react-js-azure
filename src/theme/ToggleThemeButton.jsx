// theme/ToggleThemeButton.jsx

import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function ToggleThemeButton() {
    const theme = useTheme();

    // Add a fallback value for theme.palette.mode
    const mode = theme?.palette?.mode || 'light';

    return (
        <IconButton sx={{ ml: 1 }} onClick={() => { /* toggleSTheme(); */ }} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

export default ToggleThemeButton;
