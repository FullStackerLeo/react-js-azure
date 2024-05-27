// sColors.jsx

import { sColor } from "./SThemeUtils.jsx";

/**
 * 定义主题颜色模型
 */
const SThemeColors = {
  bgColor: sColor("#edf3f2", "#1D1D1D"), //背景色

  /**
   * 菜单色配置
   */
  badge: sColor("red", "red"), //小红点色
  menuBgcolor: sColor("#EEEEEE", "#0D2745"),//菜单栏的背景色
  hoverMenuBgcolor: sColor("#FFEACC", "#091C32"), //菜单栏背景色Hover

  iconColorNormal: sColor("#1c2322", "#EEEEEE"), //图标色
  iconColorSquare: sColor("#363c3b", "#CCCCCC"), //无图标时的替代色

  menuNomalColor: sColor("#333333", "#07172A"), //菜单栏正常字体色
  activeMenuBgcolor: sColor("#FFEACC", "#1C54AD"), //活动菜单背景色
  activeBorderColor: sColor("#007AFF", "#1C54AD"), //活动菜单边框色

  menuSpliderColor: sColor("#DDDDDD", "#143C6A"), // 菜单栏分隔色

  menuSubitemColor: sColor("#545a59", "#B8B8B8"), //子菜单字体色
  hoverSubitemColor: sColor("#9fa2a1", "#3C628B"), //hover时的子菜单字体色
  hoverMenuSubitemBgcolor: sColor("#FFEACC", "#123862"), //子菜单的hover背景色
  activeMenuSubitemBgcolor: sColor("#FFBF66", "#0E2C4D"),//活动子菜单的背景色

  activeQuickMenuBgcolor: sColor("#FFBF66", "#2266B5"),//活动快捷菜单的子菜单
}

export default SThemeColors;

