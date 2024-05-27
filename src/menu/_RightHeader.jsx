import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import { redirect } from 'react-router-dom';

//菜单头
const RightHeader = ({
                            logo, //图标
                            title, //标题
                            onClick //单击事件
                        }) => {
    const { open } = true;
    const clickEvent = () => {
        if (onClick == null) {redirect("/");
        } else {onClick();        }
    }
    return (
        <Box className="p-3 border-bottom" >
            <Stack
                spacing={3}
                direction={"row"}
                justifyContent="start"
                alignItems={"center"}
                className="w-100"
            >
                <Avatar
                    sx={{width: 40,height: 40,cursor: "pointer",transition: '0.2s',transform: open ? 'scale(1)' : 'scale(1.2)',}}
                    src={logo}
                    variant="rounded"
                    alt={title}
                    onClick={clickEvent}
                >
                    {
                        title && title.substring(0, 1).toUpperCase()
                    }
                </Avatar>

                <Typography className="text-truncate" variant="h5" sx={{pl: 0.5}} > { title ||  "Momento" } </Typography>
            </Stack>
        </Box>
    )
};

export default RightHeader;
