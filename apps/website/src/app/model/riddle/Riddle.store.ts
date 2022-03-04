import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Riddle } from './Riddle.model';
import { v4 } from 'uuid';
export interface RiddleState extends EntityState<Riddle, string> {}

@StoreConfig({ name: 'riddle', idKey: 'uuid' })
export class RiddleStore extends EntityStore<RiddleState> {
    constructor() {
        super();
    }
}
export const riddleStore: RiddleStore = new RiddleStore();
riddleStore.add([
    { uuid: v4(), title: 'title1', createdBy: { id: 2, username: 'ojomFox' } },
    {
        uuid: v4(),
        title: 'title2',
        createdBy: { id: 1, username: 'appleptr16' },
    },
    { uuid: v4(), title: 'title3', createdBy: { id: 2, username: 'ojomFox' } },
    {
        uuid: v4(),
        title: 'title4',
        createdBy: { id: 1, username: 'appleptr16' },
    },
    {
        uuid: v4(),
        title: 'title5',
        createdBy: { id: 1, username: 'appleptr16' },
    },
    { uuid: v4(), title: 'title6', createdBy: { id: 2, username: 'ojomFox' } },
]);
