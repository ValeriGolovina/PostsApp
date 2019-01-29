import {Adress} from './Adress';
import {Company} from './Company';


export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;
}
