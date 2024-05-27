// SThemeUtils.jsx

import SThemeCodors from "./SColors.jsx";

// 生成基本颜色，lightColor为浅色，darkColor为深色
export function sColor(lightColor, darkColor) {
    return {
        light: lightColor,
        dark: darkColor,
    }
}

/**
 * 生成主题模型
 * @param {} mode
 * @returns
 */
export default function createSTheme(mode = "light") {
    const themeMode = mode === "light" ? "light" : "dark";
    const sTheme = {mode: themeMode};

    Object.keys(SThemeCodors).forEach(key => {
            sTheme[key] = SThemeCodors[key][themeMode];
        }
    );
    return sTheme;
}

/**
 * 生成MUI系统主题
 * @param {*} mode
 * @returns
 */
export function createMuiTheme(mode) {
    const themeMode = mode === "light" ? "light" : "dark";
    return createTheme({
        palette: {
            mode: themeMode,
        },
    });
}
