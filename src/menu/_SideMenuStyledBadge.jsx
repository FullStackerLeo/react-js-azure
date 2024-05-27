// _SideMenuStyledBadge.jsx

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -22,
        top: 16,
        // border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default StyledBadge;
