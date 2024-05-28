// ColumnRight.jsx

import Box from '@mui/system/Box';
import RightHeader from "@/menu/_RightHeader.jsx";
import ChatBot from "@/components/ChatBot1.jsx";

function FnRight({title,logo,hClick,mClick,footer,}) {
    const openWidth = 400;
    const minWidth = 65;
    const open = true; // Placeholder for menu state

    return (
        <Box
            className="d-flex overflow-hidden h-100"
            elevation={1}
            sx={{
                transition: "width 0.3s",
                width: open ? openWidth : minWidth,
                borderLeft: 1,
                borderColor: "divider",
            }}
        >
            <Box className='d-flex flex-column'>
                <RightHeader
                    title={title}
                    logo={logo}
                    onClick={hClick}

                />

                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        overflowX: "hidden",
                        width: open ? openWidth : minWidth,
                    }}
                >

                    {<ChatBot />}

                </Box>

                {/*<Divider />*/}
                {/*<Box sx={{ padding: 2 }}>*/}
                {/*    Placeholder Footer*/}
                {/*</Box>*/}
            </Box>
        </Box>
    );
}

export default FnRight;
