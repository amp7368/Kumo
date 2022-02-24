import { HomePage } from '../components/pages/home/HomePage';
import { RouteInfo } from './RouteInfo';
import { PageId, PageWrapperProps } from './routeProps';

function createProps(
    pageType: PageId,
    title: string,
    link: string
): PageWrapperProps {
    return {
        pageType: pageType,
        title: title,
        link: link,
    } as PageWrapperProps;
}
export const AllRoutes: Record<string, RouteInfo> = {
    HomeRoute: new HomePage(
        createProps(PageId.Home, 'Home', '/')
    ).createRoute(),
};

export const AllRouteProps = {
    ProfileProps: createProps(PageId.Profile, 'Profile', '/profile'),
    AuthProps: createProps(PageId.Auth, 'Authentication', '/auth'),
};
