// SideMenuProvider.jsx
import { useReducer, createContext, useState } from 'react';

/**
 * 获取菜单项的id集合, 用于初始化菜单项的徽章,本菜单的每个Item都有一个id属性，用于唯一标识菜单项。
 * @param menuConfig
 * @returns
 */
function initBadge(menuConfig){
    let ids = {};
    menuConfig.forEach((element) => {
        const name = element.id;
        ids = { ...ids, [name]: 0 };

        if (element.children) {
            const children = element.children;
            children.forEach(el => {
                const subName = el.id;
                ids = { ...ids, [subName]: 0 };
            })
        }
    });

    return ids;
}

//菜单的内部状态的初始值，用react的reducer来管理, 用context来向子组件传递通信。
const initState = {
    activeItemId: null, //当点击一个菜单项时记录活动菜单项
    hoverItemId: null, //当点击一个菜单项组标题时，记录打开的GroupMenu的名称。
    open: true, //菜单项的展开模式，true为展开，false为折叠
    showDivider: true, //菜单项的分割线模式，true为显示，false为不显示
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}

export const SideMenuState = createContext(initState); //菜单的内部状态
export const SideMenuBadge = createContext(null); //菜单的徽章配置数据
export const DispatchMenuState = createContext(null); //菜单的内部状态的更新函数
export const DispatchMenuBadge = createContext(null); //菜单的徽章的更新函数
export const SideMenuData = createContext([]); //菜单的配置数据

/**
 * 菜单的上下文Context
 * @param children
 * @param menuData
 * @returns
 */
function SideMenuProvider({ children, menuData }) {
    const [badge, updateBadge] = useState(initBadge(menuData));
    const [menuState, updateMenuState] = useReducer(reducer, initState);

    const updateBadgeHandler = (id, count) => {
        updateBadge((state) => {
            return {
                ...state,
                [id]: count
            }
        })
    }
    return (
        <SideMenuState.Provider value={ menuState }>
            <SideMenuBadge.Provider value={badge}>
                <DispatchMenuState.Provider value={updateMenuState}>
                    <DispatchMenuBadge.Provider value={updateBadgeHandler}>
                        <SideMenuData.Provider value={menuData}>
                            {
                                children
                            }
                        </SideMenuData.Provider>
                    </DispatchMenuBadge.Provider>
                </DispatchMenuState.Provider>
            </SideMenuBadge.Provider>
        </SideMenuState.Provider>
    )
}

export default SideMenuProvider;
