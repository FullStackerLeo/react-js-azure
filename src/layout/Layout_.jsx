// Layout_.jsx
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import Stack from '@mui/material/Stack';

import SToggleButton from '../menu/_SToggleButton.jsx';
import ToggleThemeButton from '../theme/ToggleThemeButton.jsx';
import Typography from '@mui/material/Typography';

import PageTemplate_ from './PageTemplate_.jsx';
import { useSideMenuBadgeUpdate } from '@/menu/_SMenuHooks.jsx';
import Note from '@/components/Note.jsx';
import MMLeft  from "./ColumnLeft.jsx";
import MMRight from "./ColumnRight.jsx";

function Layout_() {
    const updateBadge = useSideMenuBadgeUpdate();
    const onClickHandler = (id, title, idPath, titlePath) => {
        console.log(id, title, idPath, titlePath);        updateBadge(id, 0);    }

    return (
        <PageTemplate_
            sideMenu={<MMLeft   title="Menu" logo="/src/assets/img/momento.png"
                hClick={() => { console.log("headerOnClick") }}
                mClick={onClickHandler} />}

            pageHeader={
                <Stack  direction="row" justifyContent="space-between"  alignItems="center" spacing={2} className='w-100'>
                    <SToggleButton icon={<VerticalSplitIcon />} />
                        <Typography className="text-truncate" variant="h5" sx={{pl: 0.5}} > { "Learning Notes" } </Typography>
                    <ToggleThemeButton />
                </Stack>
            }

            children={<Note />}

            rightColumn={<MMRight
                title="ChatGPT"
                logo="/src/assets/img/momento.png"
                hClick={() => { console.log("headerOnClick") }}
                mClick={onClickHandler} />
            }
        >
        </PageTemplate_>
    )
}

export default Layout_;