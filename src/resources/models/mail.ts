import {User} from './user';

export class Mail {
  from: User;
  to: User;
  subject: string;
  content: string;
}
