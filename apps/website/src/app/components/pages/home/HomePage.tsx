import { ReactNode } from 'react';

import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';

export class HomePage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new RouteInfo(this);
    }

    override renderMainPage(): ReactNode {
        return <h1>Main Page</h1>;
    }
}
