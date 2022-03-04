import { BaseQueryEntity } from '../BaseQueryEntity';
import { sessionQuery } from '../user/session/Session.query';
import { Riddle } from './Riddle.model';
import { RiddleState, RiddleStore, riddleStore } from './Riddle.store';

export class RiddleQuery extends BaseQueryEntity<RiddleState> {
    constructor(protected override store: RiddleStore) {
        super(store);
    }

    createdByMe = this.filterAllBy(
        (riddle: Riddle) =>
            riddle.createdBy.id === sessionQuery.getValue().userId
    );
}
export const riddleQuery = new RiddleQuery(riddleStore);
