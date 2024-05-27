// _SMenuHooks.jsx

import { useContext } from 'react';
import { DispatchMenuBadge, DispatchMenuState, SideMenuBadge, SideMenuData, SideMenuState } from './SideMenuProvider';

// 获取边栏菜单的状态
export function useSideMenuState() {
    return useContext(SideMenuState);
}

// 获取边栏菜单的小红点状态
export function useSideMenuBadge() {
    return useContext(SideMenuBadge);
}

// 更新边栏菜单小红点的工具,用法：
// const update = useSideMenuBadgeUpdate();
// update("menuItemId", 50)
export function useSideMenuBadgeUpdate() {
    return useContext(DispatchMenuBadge);
}

// 更新边栏菜单工具
export function useSideMenuStateUpdate() {
    return useContext(DispatchMenuState);
}

// 获取菜单配置项
export function useSideMenuData() {
    return useContext(SideMenuData);
}

