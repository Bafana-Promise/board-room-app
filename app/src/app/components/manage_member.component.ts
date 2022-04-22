/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  HostListener,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { crudOperation } from 'app/sd-services/crudOperation'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { bookingComponent } from './booking.component'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-manage_member',
  templateUrl: './manage_member.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class manage_memberComponent {
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
      this.sd_AiUBndLf32UlYQ52(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AiUBndLf32UlYQ52(bh) {
    try {
      bh = this.sd_wS87jApqoeQxQBlG(bh);
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_AiUBndLf32UlYQ52
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AiUBndLf32UlYQ52');
    }
  }

  openDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nQgqmj9EE4pPdYpI(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_380OaXAAnaih8ZkV');
    }
  }

  sd_x1v3KKDE48fXNE7t(emailObj: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { emailObj: emailObj };
      bh.local = {};
      bh = this.sd_xWJzik1gZbrCcdEL(bh);
      //appendnew_next_sd_x1v3KKDE48fXNE7t
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x1v3KKDE48fXNE7t');
    }
  }

  changeBookingStatus(
    body: any = undefined,
    newStatus: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { body: body, newStatus: newStatus };
      bh.local = { result: undefined };
      bh = this.sd_1sGQ2Lxhjcd9p6J5(bh);
      //appendnew_next_changeBookingStatus
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iPVtSopp6yRGWnjx');
    }
  }

  //appendnew_flow_manage_memberComponent_start

  sd_wS87jApqoeQxQBlG(bh) {
    try {
      this.page.bookings = undefined;
      this.page.userBooking = undefined;
      this.page.tableData = undefined;
      this.page.userfromSessionstorage = undefined;
      this.page.bookedRoom = undefined;
      this.page.allBookings = undefined;
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_wS87jApqoeQxQBlG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wS87jApqoeQxQBlG');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.owner = {
        email,
      };
      page.admin = email.includes('admin');
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      bh = this.sd_xWJzik1gZbrCcdEL(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0gtGzUbwInFSaktC');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = [];
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z21xFGHLAqOW3LYN');
    }
  }

  async sd_xWJzik1gZbrCcdEL(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getUserBookings(
        this.page.owner
      );
      this.page.bookings = outputVariables.local.result;

      bh = this.sd_ISlebASHJtZXZYnG(bh);
      //appendnew_next_sd_xWJzik1gZbrCcdEL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xWJzik1gZbrCcdEL');
    }
  }

  sd_ISlebASHJtZXZYnG(bh) {
    try {
      const page = this.page; // page.tableData = page.bookings
      // page.userfromSessionstorage = JSON.parse(sessionStorage.getItem("user"));
      // page.canBook = page.userfromSessionstorage.canBook;
      // console.log(page.tableData.length, page.canBook)

      bh = this.sd_As1BXraxUAstakgK(bh);
      //appendnew_next_sd_ISlebASHJtZXZYnG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ISlebASHJtZXZYnG');
    }
  }

  async sd_As1BXraxUAstakgK(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllBooking();
      this.page.allBookings = outputVariables.local.result;

      bh = this.sd_kXZV8oyXZdQeqUAp(bh);
      //appendnew_next_sd_As1BXraxUAstakgK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_As1BXraxUAstakgK');
    }
  }

  sd_kXZV8oyXZdQeqUAp(bh) {
    try {
      const page = this.page;
      console.log(page.allBookings, 'Each Bookings employee');
      page.userfromSessionstorage = JSON.parse(sessionStorage.getItem('user'));

      if (page.userfromSessionstorage.email.includes('admin')) {
        page.tableData = page.allBookings;
        page.userfromSessionstorage = JSON.parse(
          sessionStorage.getItem('user')
        );
        page.canBook = page.userfromSessionstorage.canBook;
        console.log(page.tableData.length, page.canBook);
      } else {
        page.tableData = page.bookings;
        page.userfromSessionstorage = JSON.parse(
          sessionStorage.getItem('user')
        );
        page.canBook = page.userfromSessionstorage.canBook;
        console.log(page.tableData.length, page.canBook);
      }
      //appendnew_next_sd_kXZV8oyXZdQeqUAp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kXZV8oyXZdQeqUAp');
    }
  }

  sd_nQgqmj9EE4pPdYpI(bh) {
    try {
      const bookingDialog = this.__page_injector__.get(MatDialog);
      const bookingDialogRef = bookingDialog.open(bookingComponent, {});
      bookingDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_tMx3Ab4u1xJnNdGr(bh);

        //appendnew_next_sd_nQgqmj9EE4pPdYpI;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nQgqmj9EE4pPdYpI');
    }
  }

  sd_tMx3Ab4u1xJnNdGr(bh) {
    try {
      const page = this.page;
      console.log(page.res, 'Hello Data From Booking');
      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.res.email = email;
      page.res.status = null;
      console.log(email);
      bh = this.sd_G6Yycxc0N2ZNW4SX(bh);
      //appendnew_next_sd_tMx3Ab4u1xJnNdGr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tMx3Ab4u1xJnNdGr');
    }
  }

  async sd_G6Yycxc0N2ZNW4SX(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.addBookings(
        this.page.res
      );
      bh.local.result = outputVariables.local.result;

      bh = this.sd_zMkKlpOXipfd7JSC(bh);
      //appendnew_next_sd_G6Yycxc0N2ZNW4SX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G6Yycxc0N2ZNW4SX');
    }
  }

  async sd_zMkKlpOXipfd7JSC(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getUserBookings(
        this.page.owner
      );
      this.page.bookings = outputVariables.local.result;

      bh = this.sd_WaWyaSp44aEpC7QS(bh);
      //appendnew_next_sd_zMkKlpOXipfd7JSC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zMkKlpOXipfd7JSC');
    }
  }

  sd_WaWyaSp44aEpC7QS(bh) {
    try {
      const page = this.page;
      console.log(page.bookings, 'Hey daar bookings');
      page.tableData = page.bookings;
      //appendnew_next_sd_WaWyaSp44aEpC7QS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WaWyaSp44aEpC7QS');
    }
  }

  sd_1sGQ2Lxhjcd9p6J5(bh) {
    try {
      const page = this.page;
      bh.input.body.status = bh.input.newStatus;
      bh = this.sd_kQHrQPlDGwek3YgW(bh);
      //appendnew_next_sd_1sGQ2Lxhjcd9p6J5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1sGQ2Lxhjcd9p6J5');
    }
  }

  async sd_kQHrQPlDGwek3YgW(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.changeBookingStatus(
        bh.input.body
      );
      bh.local.result = outputVariables.local.result;

      //appendnew_next_sd_kQHrQPlDGwek3YgW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kQHrQPlDGwek3YgW');
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
  //appendnew_flow_manage_memberComponent_Catch
}
