import User from './user';

class Mail {
  from: User;
  to: User;
  subject: string;
  content: string;
}

export default Mail;