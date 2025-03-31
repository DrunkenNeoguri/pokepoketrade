import {Card} from './card';
import {User} from './user';

export interface Trade {
  id: string;
  title: string;
  tradeUser: User;
  createdAt: Date;
  ongoingState: 'ongoing' | 'closed';
  exchangeType: 'exchange' | 'handOut';
  giveCards: Array<Card & {nation: string}> | 'anyone';
  wantCards: Array<Card & {nation: string}> | 'anyone';
}
