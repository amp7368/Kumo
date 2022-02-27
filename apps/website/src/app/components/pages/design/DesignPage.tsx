import { Stack } from '@mui/material';
import { ReactNode } from 'react';

import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';
import { DesignEditor } from './DesignEditor';
import { DesignPreview } from './DesignPreview';
import { DesignToolbox } from './DesignToolbox';

export class DesignPage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new RouteInfo(this);
    }

    override renderMainPage(): ReactNode {
        return (
            <Stack direction="column">
                <DesignToolbox />
                <DesignEditor />
                <DesignPreview />
            </Stack>
        );
    }
}
