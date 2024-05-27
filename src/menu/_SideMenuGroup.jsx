import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from '@mui/material/SvgIcon';
import StyledBadge from './_SideMenuStyledBadge';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

import { useSideMenuState, useSideMenuStateUpdate, useSideMenuBadge } from './_SMenuHooks';
import SMenuSubItem from './_SideMenuSubItem';

function IconItem({ open, icon, title }) {
    return (
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
                // px: 0, // Remove horizontal padding
                // mb: 0, // Remove bottom margin
                // pl: 2, // Adjust the left padding (indentation)
            }}>
            {
                icon == null ?
                    <Avatar
                        sx={{
                            width: 30,
                            height: 30,
                            fontSize: 18,
                            bgcolor: grey[600],
                            transition: '0.2s',
                            transform: open ? 'scale(1)' : 'scale(1.2)'
                        }}
                        variant="rounded"
                    >
                        {title.substring(0, 1).toUpperCase()}
                    </Avatar> :
                    <SvgIcon component={icon} />
            }
        </ListItemIcon>
    );
}

/**
 * 含有子菜单的菜单项
 * @param props
 * @returns
 */
function SideMenuGroup({
    id, //菜单项的ID名称
    icon = null, //图标
    title, //标题
    childrenData, //子菜单
    onClick, //单击事件
    defaultExpanded = true, // 新增的默认展开参数
}) {
    const { hoverItemId } = useSideMenuState();
    const updateMenuState = useSideMenuStateUpdate();
    const badgeCount = useSideMenuBadge();
    const groupBadgeNumber = childrenData.map((item) => badgeCount[item.id]).reduce((a, b) => a + b, 0);

    // Local state to control expansion
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            updateMenuState({ hoverItemId: id });
        } else {
            updateMenuState({ hoverItemId: null });
        }
    };

    return (
        <Box>
            <ListItemButton onClick={handleClick}
                            sx={{
                                py: 0, // Adjust vertical padding
                                // px: 0, // Adjust horizontal padding
                                mb: 0, // Adjust bottom margin
                            }}>
                <Tooltip title={isExpanded ? null : title} arrow placement="right">
                    <Badge
                        badgeContent={isExpanded ? 0 : groupBadgeNumber}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        color="error">
                        <IconItem open={isExpanded} icon={icon} title={title} />
                    </Badge>
                </Tooltip>

                <Stack direction={"row"} justifyContent={"space-between"} sx={{ width: 300 }}>
                    <StyledBadge badgeContent={isExpanded ? null : groupBadgeNumber} color="error">
                        <ListItemText primary={title} />
                    </StyledBadge>

                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                </Stack>
            </ListItemButton>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit
                      sx={{
                          // mt: 0, // Adjust top margin
                          // mb: 0, // Adjust bottom margin
                      }}
            >
                <List component="div" dense={true} disablePadding>
                    {childrenData && childrenData.map((itemData, index) => (
                        <SMenuSubItem
                            icon={itemData.icon}
                            title={itemData.title}
                            id={itemData.id}
                            groupId={id}
                            groupTitle={title}
                            onClick={onClick}
                            key={index}
                        />
                    ))}
                </List>
            </Collapse>
        </Box>
    );
}

export default SideMenuGroup;
