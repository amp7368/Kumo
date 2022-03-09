import { Optional } from '@misc/for-now';
import { User } from '../user/User.model';

export type HuntBarebones = Omit<Hunt, 'createdBy' | 'collaborators'>;

export interface Hunt {
    uuid: string;
    createdBy: number;
    collaborators: number[];
    title: string;
}
export interface HuntWithUser extends HuntBarebones {
    createdBy: Optional<User>;
    collabs: Optional<User>[];
}
