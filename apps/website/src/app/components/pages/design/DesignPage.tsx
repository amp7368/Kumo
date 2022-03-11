import { RouteInfo } from '../../../routes/RouteInfo';
import { appQueryParams } from '../../../util/AppQueryParams';
import { PageWrapper } from '../PageWrapper';
import { DesignDefaultPage } from './default/DesignDefaultPage';
import { huntQuery } from '../../../model/hunt/Hunt.query';
import { HuntEditor } from './editor/HuntEditor';
import { ObserveableToElement } from '@appleptr16/elemental';
import { Optional } from '@misc/for-now';
import { Hunt } from '../../../model/hunt/Hunt.model';
import { PrivateRouteInfo } from '../../../routes/PrivateRouteInfo';

function mapToPage(hunt: Optional<Hunt>) {
    console.log(hunt);
    return hunt ? <HuntEditor hunt={hunt} /> : <DesignDefaultPage />;
}
export class DesignPage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new PrivateRouteInfo(this);
    }

    override renderMainPage(): JSX.Element {
        const queryHunt: string = appQueryParams().getQueryHunt() ?? '';
        console.log(queryHunt);
        const huntObsv = huntQuery.selectEntity(queryHunt);

        huntObsv.subscribe((et) => {
            console.log('emit' + et);
        });
        return (
            <ObserveableToElement original={huntObsv} mappingFn={mapToPage} />
        );
    }
}
