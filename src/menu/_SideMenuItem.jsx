import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import { useSideMenuBadge, useSideMenuState, useSideMenuStateUpdate } from './_SMenuHooks';
import StyledBadge from './_SideMenuStyledBadge';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';

/**
 * 主菜单项组件
 * @param title: 菜单项标题
 * @param id: 菜单项ID
 * @param icon: 菜单项图标
 * @param onClick: 菜单项单击事件
 * @returns
 */
const SideMenuItem = ({
                          title,
                          id,
                          icon = null,
                          onClick,
                      }) => {
    const {activeItemId, open} = useSideMenuState();
    const badgeCount = useSideMenuBadge();
    const updateMenuState = useSideMenuStateUpdate();

    //单击事件
    const itemClickeEvent = () => {
        updateMenuState({ activeItemId: id });
        onClick(id, title, [id], [title]);
    }

    return (
        <ListItemButton
            selected={ activeItemId == id }
            onClick={itemClickeEvent}
        >
            <Tooltip title={open ? null : title} arrow placement="right">
                <Badge
                    badgeContent={open ? 0 : badgeCount[id]}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    color="error">
                    <ListItemIcon
                        sx={{
                            '& svg': {
                                transition: '0.2s',
                                transform: open ? 'scale(1)' : 'scale(1.2)',
                            },

                            '&:hover, &:focus': {
                                '& svg:first-of-type': {
                                    transform: open ? 'scale(1)' : 'scale(1.3)',
                                }
                            },
                        }}>
                        {
                            icon == null ?
                                <Avatar
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        fontSize: 18,
                                        bgcolor:grey[700],
                                        transition: '0.2s',
                                        transform: open ? 'scale(1)' : 'scale(1.2)'
                                    }}
                                    variant="rounded">
                                    {title.substring(0, 1).toUpperCase()}
                                </Avatar> :
                                <SvgIcon component={icon} />
                        }
                    </ListItemIcon>
                </Badge>
            </Tooltip>

            <StyledBadge badgeContent={badgeCount[id]} color="error">
                <ListItemText primary={title}/>
            </StyledBadge>

        </ListItemButton>
    );
};

export default SideMenuItem;
