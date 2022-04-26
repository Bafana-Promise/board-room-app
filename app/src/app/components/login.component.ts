/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { crudOperation } from 'app/sd-services/crudOperation'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_CDq5BdtyJb7BGWVH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CDq5BdtyJb7BGWVH(bh) {
    try {
      bh = this.sd_yq9w9xH97S4FJFI6(bh);
      //appendnew_next_sd_CDq5BdtyJb7BGWVH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CDq5BdtyJb7BGWVH');
    }
  }

  login(loginUser: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { loginUser: loginUser };
      bh.local = {};
      bh = this.sd_jQXp3kEBFLqMlbUv(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KMUj9jojl1WbxANg');
    }
  }

  register(regUser: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { regUser: regUser };
      bh.local = {};
      bh = this.sd_DBOmdUbMGZmEKKYR(bh);
      //appendnew_next_register
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Udwx7V9v4IlpvS5J');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_yq9w9xH97S4FJFI6(bh) {
    try {
      this.page.window = undefined;
      this.page.showLogin = true;
      this.page.loggedUser = undefined;
      this.page.regUsers = undefined;
      this.page.users = undefined;
      this.page.loginValidation = undefined;
      bh = this.sd_2XzmeSVA2SPIwrKk(bh);
      //appendnew_next_sd_yq9w9xH97S4FJFI6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yq9w9xH97S4FJFI6');
    }
  }

  sd_2XzmeSVA2SPIwrKk(bh) {
    try {
      const page = this.page;
      page.loggedUser = JSON.parse(sessionStorage.getItem('user'));
      console.log(page.loggedUser, 'Back From Session Store');

      bh = this.sd_NDHNw4bIMSMLVG2w(bh);
      //appendnew_next_sd_2XzmeSVA2SPIwrKk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2XzmeSVA2SPIwrKk');
    }
  }

  async sd_NDHNw4bIMSMLVG2w(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getRegUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_sBStGOfPilpjIeBx(bh);
      //appendnew_next_sd_NDHNw4bIMSMLVG2w
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NDHNw4bIMSMLVG2w');
    }
  }

  sd_sBStGOfPilpjIeBx(bh) {
    try {
      bh = this.sd_xRcK20MztLiA2Mxj(bh);
      //appendnew_next_sd_sBStGOfPilpjIeBx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sBStGOfPilpjIeBx');
    }
  }

  sd_xRcK20MztLiA2Mxj(bh) {
    try {
      const page = this.page;
      page.users;
      //page.users.forEach(function (item) {
      //   console.log(item,'Each');
      //})
      // page.loginValidation = loginForm
      console.log(page.users, 'Validation');
      //appendnew_next_sd_xRcK20MztLiA2Mxj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xRcK20MztLiA2Mxj');
    }
  }

  async sd_jQXp3kEBFLqMlbUv(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.loginUser(
        bh.input.loginUser
      );
      bh.local.data = outputVariables.local.result;

      bh = this.getUser(bh);
      //appendnew_next_sd_jQXp3kEBFLqMlbUv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jQXp3kEBFLqMlbUv');
    }
  }

  getUser(bh) {
    try {
      const page = this.page;
      bh.local.message = '';
      if (!bh.local.data.length) {
        bh.local.message = 'User does not exist';
      } else if (bh.local.data[0].password === bh.input.loginUser.password) {
        sessionStorage.setItem('user', JSON.stringify(bh.local.data[0]));
        bh.local.message = 'Logged In Sucessfully';
        window.location.href = '/home/dashboard';
      } else {
        bh.local.message = 'Invalid Password';
      }
      bh = this.sd_ubIWDdPA37X9Ggzn(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EMiDXZFF6IjbBpHD');
    }
  }

  sd_ubIWDdPA37X9Ggzn(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.message, 'Dismiss', {
          duration: 4000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_ubIWDdPA37X9Ggzn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ubIWDdPA37X9Ggzn');
    }
  }

  sd_DBOmdUbMGZmEKKYR(bh) {
    try {
      bh = this.sd_Ba3vHiDEu3tNr4Uu(bh);
      //appendnew_next_sd_DBOmdUbMGZmEKKYR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DBOmdUbMGZmEKKYR');
    }
  }

  async sd_Ba3vHiDEu3tNr4Uu(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.register(
        bh.input.regUser
      );
      bh.local.data = outputVariables.local.result;

      bh = this.sd_IgYBJiXZoPJ7AWiu(bh);
      //appendnew_next_sd_Ba3vHiDEu3tNr4Uu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ba3vHiDEu3tNr4Uu');
    }
  }

  sd_IgYBJiXZoPJ7AWiu(bh) {
    try {
      const page = this.page;
      bh.local.message = bh.local.data[0].message;
      setTimeout(function () {
        page.showLogin = !page.showLogin;
      }, 1000);
      bh = this.sd_BVaumbAX4ND7k4yH(bh);
      //appendnew_next_sd_IgYBJiXZoPJ7AWiu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IgYBJiXZoPJ7AWiu');
    }
  }

  sd_BVaumbAX4ND7k4yH(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.local.message, 'close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_BVaumbAX4ND7k4yH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BVaumbAX4ND7k4yH');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_loginComponent_Catch
}
