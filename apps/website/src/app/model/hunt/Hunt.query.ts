import { Optional } from '@misc/for-now';
import { combineLatest, filter, map, Observable } from 'rxjs';

import { BaseQueryEntity } from '../BaseQueryEntity';
import { sessionQuery } from '../myself/session/Session.query';
import { User } from '../user/User.model';
import { userQuery } from '../user/User.query';
import { Hunt, HuntWithUser } from './Hunt.model';
import { HuntState, HuntStore, huntStore } from './Hunt.store';
import { SessionState } from '../myself/session/Session.store';

type PreJoiningUserHunt = [Hunt[], User[], SessionState];
type JoinedUserHunt = [HuntWithUser[], SessionState];
function doJoinUserHunt([
    hunts,
    users,
    session,
]: PreJoiningUserHunt): JoinedUserHunt {
    const mappedHunts = hunts.map((hunt: Hunt): HuntWithUser => {
        const createdBy: Optional<User> = users.find(
            (user: User) => hunt.createdBy == user.id
        );
        const collaborators: Optional<User>[] = users.filter((user: User) =>
            hunt.collaborators.includes(user.id)
        );
        for (const collabId of hunt.collaborators) {
            if (!collaborators.find((collab) => collab?.id === collabId))
                collaborators.push(undefined);
        }
        return { ...hunt, createdBy, collabs: collaborators };
    });
    return [mappedHunts, session];
}
export class HuntQuery extends BaseQueryEntity<HuntState> {
    constructor(protected override store: HuntStore) {
        super(store);
    }
    private joinUser$: Observable<[Hunt[], User[], SessionState]> =
        combineLatest([
            this.selectAll(),
            userQuery.selectAll(),
            sessionQuery.select(),
        ]);

    joinUserByHunt$: Observable<JoinedUserHunt> = this.joinUser$.pipe(
        map(doJoinUserHunt)
    );

    createdByMe$: Observable<HuntWithUser[]> = this.filterByWithExtract(
        this.joinUserByHunt$,
        ([hunts]: JoinedUserHunt) => hunts,
        (hunt: HuntWithUser, [hunts, session]: JoinedUserHunt) =>
            hunt.createdBy === session.userId
    );
    sharedWithMe$: Observable<HuntWithUser[]> = this.filterByWithExtract(
        this.joinUserByHunt$,
        ([hunts]: JoinedUserHunt) => hunts,
        (hunt: HuntWithUser, [hunts, session]: JoinedUserHunt) =>
            !!hunt.collabs.find(
                (collab: Optional<User>) => collab?.id === session.userId
            )
    );
}
export const huntQuery = new HuntQuery(huntStore);
