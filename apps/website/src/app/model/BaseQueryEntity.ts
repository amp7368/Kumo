import {
    QueryEntity,
    EntityState,
    getEntityType,
    EntityStore,
    getIDType,
} from '@datorama/akita';
import { map, Observable } from 'rxjs';
export class BaseQueryEntity<
    T extends EntityState<any, any>,
    EntityType = getEntityType<T>
> extends QueryEntity<T> {
    constructor(store: EntityStore<T>) {
        super(store);
    }
    filterAllBy(filterBy: (riddle: any) => boolean): Observable<EntityType[]> {
        return this.selectAll().pipe(
            map((riddles: EntityType[]) => riddles.filter(filterBy))
        );
    }
}
