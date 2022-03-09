import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { User } from './User.model';

export interface UserState extends EntityState<User, number> {}

@StoreConfig({ name: 'hunt', idKey: 'id' })
export class UserStore extends EntityStore<UserState> {
    constructor() {
        super();
    }
}
export const userStore: UserStore = new UserStore();
userStore.add([
    { id: 1, username: 'appleptr16' },
    { id: 2, username: 'ojomFox' },
]);
