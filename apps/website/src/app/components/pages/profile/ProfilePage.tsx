import { ReactNode } from 'react';

import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';
import { ProifleWIP } from './ProfileWIP';

export class ProfilePage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new RouteInfo(this);
    }

    override renderMainPage(): ReactNode {
        return <ProifleWIP />;
    }
}
