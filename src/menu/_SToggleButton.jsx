import IconButton from '@mui/material/IconButton';
import { useSideMenuState, useSideMenuStateUpdate } from './_SMenuHooks';

/**
 * 菜单的展开/收起按钮
 * @param {*} param0
 * @returns
 */
function SToggleButton({icon}) {
    const menuState = useSideMenuState();
    const updateMenuState = useSideMenuStateUpdate();
    const clickHandler = () => {
        updateMenuState({ open: !menuState.open})
    }
    return (
        <IconButton onClick={clickHandler}>
            { icon }
        </IconButton>
    )
}

export default SToggleButton;
