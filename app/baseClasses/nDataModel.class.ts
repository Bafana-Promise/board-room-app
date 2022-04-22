import { user } from '../src/app/models/user.model';
import { login } from '../src/app/models/login.model';
import { reg } from '../src/app/models/reg.model';
import { bookingdm } from '../src/app/models/bookingdm.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
login: login;
reg: reg;
bookingdm: bookingdm;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.login = new login();
this.reg = new reg();
this.bookingdm = new bookingdm();
//CREATE NEW DM INSTANCE
    }
}
