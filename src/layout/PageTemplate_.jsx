// layout/PageTemplate_.jsx

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function PageTemplate_({ sideMenu, pageHeader , children, rightColumn }) {
    return (
        <Paper className='d-flex overflow-hidden position-absolute w-100 h-100 p-0 m-0'>
            <Box className='h-100' sx={{ height: 68 }}>
                {                    sideMenu                }
            </Box>

            <Box className='d-flex overflow-hidden position-relative flex-grow-1'>
                <Box className="d-flex flex-column p-0 m-0 position-relative flex-grow-1 flex-nowrap">
                    <Box className="w-90 p-3 border-bottom" >
                        {pageHeader}
                    </Box>

                    <Box className="p-0 w-100 h-100">
                        {children }
                    </Box>
                </Box>
            </Box>

            <Box className='h-100'>
                {
                    rightColumn
                }
            </Box>

        </Paper>
    )
}

export default PageTemplate_;
