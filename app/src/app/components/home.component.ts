/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_46WmH3j0JqxZjxoq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_46WmH3j0JqxZjxoq(bh) {
    try {
      bh = this.sd_QLL89PJFFkfl06Kr(bh);
      //appendnew_next_sd_46WmH3j0JqxZjxoq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_46WmH3j0JqxZjxoq');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gzr5GmvZpFLPdFdx(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QlrjcHlhgNAuPFtz');
    }
  }

  menuOpen(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_L97xzNGPHWu87dvJ(bh);
      //appendnew_next_menuOpen
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W68nhsn0lsk23CO6');
    }
  }

  @HostListener('window:resize', ['$event']) sd_Pl3dwe48MTj2wpmw(event) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.$event = event;
      bh = this.sd_4u7VFP2CAK7RXDSg(bh);
      //appendnew_next_sd_Pl3dwe48MTj2wpmw
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pl3dwe48MTj2wpmw');
    }
  }

  toggle(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NlstkRWqYTCSmxJZ(bh);
      //appendnew_next_toggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CRgpaR5ZiR2UUtSh');
    }
  }

  navigateTo(url: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { url: url };
      bh.local = {};
      bh = this.sd_7yzES5FGTuEAVgtP(bh);
      //appendnew_next_navigateTo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AjagrSuaeSzojZdc');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_QLL89PJFFkfl06Kr(bh) {
    try {
      this.page.sidenavItems = undefined;
      this.page.sideNavOpen = true;
      this.page.menuBarOpen = false;
      this.page.iconName = 'expand_more';
      this.page.sideNavMode = 'Side';
      this.page.users = undefined;
      this.page.loggedInUser = undefined;
      this.page.sideNavWidth = undefined;
      this.page.admin = undefined;
      bh = this.sd_QhGoHZOb0IOg3UpN(bh);
      //appendnew_next_sd_QLL89PJFFkfl06Kr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QLL89PJFFkfl06Kr');
    }
  }

  sd_QhGoHZOb0IOg3UpN(bh) {
    try {
      const page = this.page;
      page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      page.admin = page.loggedInUser.email.includes('admin');
      page.sidenavItems = [
        {
          url: '/home/dashboard',
          icon: 'dashboard',
          name: 'Dashboard',
          show: true,
          active: 'active-route',
        },
        {
          url: '/home/admin',
          icon: 'groups',
          name: 'Users',
          show: page.admin,
          active: 'active-route',
        },
        {
          url: '/home/employee',
          icon: 'event_note',
          name: 'Bookings',
          show: page.admin,
          active: 'active-route',
        },
        {
          url: '/home/employee',
          icon: 'event_note',
          name: 'Bookings',
          show: !page.admin,
          active: 'active-route',
        },
        {
          url: 'Logout',
          icon: 'power_settings_new',
          name: 'Logout',
          show: true,
          active: 'active-route',
        },
      ];
      // console.log(page.loggedInUser, "One Session")
      if (page.sideNavOpen == true) {
        page.sideNavWidth = '12';
        // console.log(page.sideNavWidth,page.sideNavOpen)
      } else {
        page.sideNavWidth = '21';
        // console.log(page.sideNavWidth,page.sideNavOpen)
      }
      // console.log(page.sideNavWidth, "Click for side nav");
      //appendnew_next_sd_QhGoHZOb0IOg3UpN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QhGoHZOb0IOg3UpN');
    }
  }

  sd_gzr5GmvZpFLPdFdx(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      //return redirect('/login');
      window.location.href = '/login';
      //console.log(window.location)
      //window.sessionStorage.clear()
      bh = this.sd_SaN27PfeCQjNA2Xa(bh);
      //appendnew_next_sd_gzr5GmvZpFLPdFdx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gzr5GmvZpFLPdFdx');
    }
  }

  sd_SaN27PfeCQjNA2Xa(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Logged out!', 'close', {
        duration: 4000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_SaN27PfeCQjNA2Xa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SaN27PfeCQjNA2Xa');
    }
  }

  sd_L97xzNGPHWu87dvJ(bh) {
    try {
      const page = this.page;
      if (page.menuBarOpen) {
        page.iconName = 'expand_more';
        page.menuBarOpen = false;
      } else {
        page.iconName = 'expand_less';
        page.menuBarOpen = true;
      }
      //appendnew_next_sd_L97xzNGPHWu87dvJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L97xzNGPHWu87dvJ');
    }
  }

  sd_4u7VFP2CAK7RXDSg(bh) {
    try {
      const page = this.page; //console.log('hello')
      //console.log(window.innerWidth)
      //page.sideNavMode = (window.innerWidth <= 600) ? 'side' : 'over';
      //console.log(page.sideNavMode)

      if (window.innerWidth <= 800) {
        page.sideNavMode = 'Over';
      } else {
        page.sideNavMode = 'Side';
      }
      console.log(page.sideNavMode);

      //appendnew_next_sd_4u7VFP2CAK7RXDSg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4u7VFP2CAK7RXDSg');
    }
  }

  sd_NlstkRWqYTCSmxJZ(bh) {
    try {
      const page = this.page;
      if (page.sideNavOpen == true) {
        page.sideNavWidth = '12';
      } else {
        page.sideNavWidth = '21';
      }
      console.log(page.sideNavWidth, 'Click for side nav');
      //appendnew_next_sd_NlstkRWqYTCSmxJZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NlstkRWqYTCSmxJZ');
    }
  }

  async sd_7yzES5FGTuEAVgtP(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.url,
          'Logout',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gzr5GmvZpFLPdFdx(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qLcvlpMEP3fuMg2y(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7yzES5FGTuEAVgtP');
    }
  }

  sd_qLcvlpMEP3fuMg2y(bh) {
    try {
      const page = this.page;
      window.location.href = bh.input.url;
      //appendnew_next_sd_qLcvlpMEP3fuMg2y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qLcvlpMEP3fuMg2y');
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
  //appendnew_flow_homeComponent_Catch
}
