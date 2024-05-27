// SThemeContext.jsx

import { createContext } from 'react';

/**
 * 创建自定义主题上下文
 */
export const SThemeContext = createContext(null);

export function CusThemeProvider({ theme, children }) {
    return (
        <SThemeContext.Provider value={theme}>
            {
                children
            }
        </SThemeContext.Provider>
    )
}


/**
 * 创建切换主题上下文
 */
export const ToggleSThemeContext = createContext(null);

export function ToggleSThemeProvider({ handler, children }) {
    return (
        <ToggleSThemeContext.Provider value={handler}>
            {
                children
            }
        </ToggleSThemeContext.Provider>
    )
}

/**
 * 创建Bootstrap主题上下文
 * @param {*} param0
 * @returns
 */
export function BootstrapThemeProvider({ mode, children }) {
    return (
        <div data-bs-theme={mode}>
            {
                children
            }
        </div>
    )
}
