import { Box } from '@mui/material';

import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';
import { PublicOnlyRouteInfo } from '../../../routes/PublicOnlyRouteInfo';

export class AuthPage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new PublicOnlyRouteInfo(this);
    }

    override renderMainPage(): JSX.Element {
        return <Box />;
    }
}
