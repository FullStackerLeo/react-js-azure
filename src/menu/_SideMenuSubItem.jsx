// _SideMenuSubItem.jsx

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import SvgIcon from '@mui/material/SvgIcon';
import CssBaseline from '@mui/material/CssBaseline';
import StyledBadge from './_SideMenuStyledBadge';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';

import { useSideMenuBadge, useSideMenuState, useSideMenuStateUpdate } from './_SMenuHooks';

/**
 * 子菜单项组件
 * @param icon: 菜单项图标
 * @param title: 菜单项标题
 * @param id: 菜单项ID
 * @param groupId: 菜单项组ID
 * @param groupTitle: 菜单项组标题
 * @param onClick: 菜单项单击事件
 * @returns
 */
function SideMenuSubItem({
                             icon = MusicVideoIcon,
                             title,
                             id,
                             groupId,
                             groupTitle,
                             onClick
                         }) {
    const { activeItemId, open } = useSideMenuState();
    const updateMenuState = useSideMenuStateUpdate();
    const badgeCount = useSideMenuBadge();

    const handleClick = () => {
        updateMenuState({ activeItemId: id });
        onClick(id, title, [groupId, id], [groupTitle, title])
    };

    return (
        <ListItemButton
            onClick={handleClick}
            selected={ activeItemId == id }
            sx={{
                transition: "padding 0.3s",
                pl: open ? 5 : 2.5,

                py: 0, // Adjust vertical padding
                // px: 4, // Adjust horizontal padding (increase to create more indentation)
                mb: 0, // Adjust bottom margin
                // width: '120%',  // Reduce the width of the sub-menu item

            }}>
            <CssBaseline />
            <Tooltip title={open ? null : title} arrow placement="right">
                <Badge
                    badgeContent={open ? 0 : activeItemId === groupId ? 0 : badgeCount[id]}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    color="blue">
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
                                        width: 24,
                                        height: 24,
                                        fontSize: 16,
                                        transition: '0.2s',
                                        transform: open ? 'scale(1)' : 'scale(1.2)',
                                    }}
                                    variant="rounded"
                                > {title.substring(0, 1).toUpperCase()} </Avatar> :
                                <SvgIcon component={icon} sx={{ fontSize: 16 }} color="primary" />


                        }
                    </ListItemIcon>
                </Badge>
            </Tooltip>

            <StyledBadge badgeContent={badgeCount[id]} color="blue">
                <ListItemText
                    primary={
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body1"
                            color="text.secondary"                        >
                            {title}
                        </Typography>
                    }
                />
            </StyledBadge>
        </ListItemButton>
    );
}

export default SideMenuSubItem;
