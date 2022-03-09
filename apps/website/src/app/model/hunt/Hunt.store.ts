import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Hunt } from './Hunt.model';
import { v4 } from 'uuid';
export interface HuntState extends EntityState<Hunt, string> {}

@StoreConfig({ name: 'hunt', idKey: 'uuid' })
export class HuntStore extends EntityStore<HuntState> {
    constructor() {
        super();
    }
}
export const huntStore: HuntStore = new HuntStore();
huntStore.add([
    { uuid: v4(), title: 'title1', createdBy: 2, collaborators: [1] },
    { uuid: v4(), title: 'title2', createdBy: 1, collaborators: [] },
    { uuid: v4(), title: 'title3', createdBy: 2, collaborators: [] },
    { uuid: v4(), title: 'title4', createdBy: 1, collaborators: [] },
    { uuid: v4(), title: 'title5', createdBy: 1, collaborators: [2] },
    { uuid: v4(), title: 'title6', createdBy: 2, collaborators: [1] },
]);
