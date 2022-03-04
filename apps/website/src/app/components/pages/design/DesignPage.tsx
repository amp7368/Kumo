import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';

import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';
import { DesignEditor } from './editor/DesignEditor';
import { DesignPreview } from './DesignPreview';
import { DesignToolbox } from './DesignToolbox';

function resizeBox(size: string, element: ReactNode) {
    return <Box width={size}>{element}</Box>;
}
export class DesignPage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new RouteInfo(this);
    }

    override renderMainPage(): ReactNode {
        return (
            <Stack direction="column">
                {resizeBox('25%', <DesignToolbox />)}
                {resizeBox('40%', <DesignEditor />)}
                {resizeBox('25%', <DesignPreview />)}
            </Stack>
        );
    }
}
