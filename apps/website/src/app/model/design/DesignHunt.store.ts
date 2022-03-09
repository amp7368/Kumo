import { Store, StoreConfig } from '@datorama/akita';

import { DesignHuntState } from './DesignHunt.model';

function createInitialState(): DesignHuntState {
    return {
        unsavedChanges: {},
    };
}

@StoreConfig({ name: 'designhunt' })
export class DesignHuntStore extends Store<DesignHuntState> {
    constructor() {
        super(createInitialState());
    }
}

export const designHuntStore = new DesignHuntStore();
