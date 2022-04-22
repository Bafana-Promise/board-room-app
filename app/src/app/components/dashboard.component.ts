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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialogComponent } from './dialog.component'; //_splitter_
import { updateDialogComponent } from './updateDialog.component'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_9yKA3DX36HvNUEQR(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9yKA3DX36HvNUEQR(bh) {
    try {
      bh = this.sd_WQNXgV2AmBqeY0LE(bh);
      bh = this.sd_ibUeR6TpvuQDlRJE(bh);
      //appendnew_next_sd_9yKA3DX36HvNUEQR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9yKA3DX36HvNUEQR');
    }
  }

  openDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_RQCUNnpkGEIcfAN7(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M0GM0QEeQq12P4pS');
    }
  }

  tableData(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ibUeR6TpvuQDlRJE(bh);
      bh = this.sd_rnx3vVLUOzoif8gw(bh);
      //appendnew_next_tableData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xzgYsGu7JqIo2qvN');
    }
  }

  deleteUser(id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};
      bh = this.sd_UtJ87pxje1VAFTug(bh);
      //appendnew_next_deleteUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q6iZR82AbdbrGZX0');
    }
  }

  addUser(addUser: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { addUser: addUser };
      bh.local = {};
      //appendnew_next_addUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aZh1lGZu5XzGT6nf');
    }
  }

  openEditDialog(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = { result: undefined };
      bh = this.sd_uYXMCxtl2Bc5mOlU(bh);
      //appendnew_next_openEditDialog
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e2HzuFaORiXV2IVe');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_WQNXgV2AmBqeY0LE(bh) {
    try {
      this.page.res = undefined;
      this.page.loggedUser = undefined;
      this.page.users = undefined;
      this.page.tableData = undefined;
      this.page.editRes = undefined;
      bh = this.getUsers(bh);
      //appendnew_next_sd_WQNXgV2AmBqeY0LE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WQNXgV2AmBqeY0LE');
    }
  }

  getUsers(bh) {
    try {
      const page = this.page;
      page.loggedUser = JSON.parse(sessionStorage.getItem('user'));
      // console.log(page.loggedUser,"Back From Session Store")
      if (page.loggedUser.email.includes('admin')) {
        return true;
      } else {
        return (window.location.href = '/home/employee');
      }
      bh = this.sd_rnx3vVLUOzoif8gw(bh);
      //appendnew_next_getUsers
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DON8UMkQCnGVeEFG');
    }
  }

  async sd_rnx3vVLUOzoif8gw(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getRegUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_DX21OE4czXLJYImh(bh);
      //appendnew_next_sd_rnx3vVLUOzoif8gw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rnx3vVLUOzoif8gw');
    }
  }

  sd_DX21OE4czXLJYImh(bh) {
    try {
      const page = this.page;
      console.log(page.users, 'Users from back end Two dashboard');

      page.tableData = page.users;
      //page.users.forEach(function (item) {
      //   console.log(item,'Each');
      //})
      console.log(page.tableData, 'o');
      //appendnew_next_sd_DX21OE4czXLJYImh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DX21OE4czXLJYImh');
    }
  }

  sd_ibUeR6TpvuQDlRJE(bh) {
    try {
      bh = this.sd_rnx3vVLUOzoif8gw(bh);
      //appendnew_next_sd_ibUeR6TpvuQDlRJE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ibUeR6TpvuQDlRJE');
    }
  }

  sd_RQCUNnpkGEIcfAN7(bh) {
    try {
      const dialogDialog = this.__page_injector__.get(MatDialog);
      const dialogDialogRef = dialogDialog.open(dialogComponent, {
        minWidth: '500px',
      });
      dialogDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_g9rDWyVx6I6HWGmK(bh);

        //appendnew_next_sd_RQCUNnpkGEIcfAN7;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RQCUNnpkGEIcfAN7');
    }
  }

  async sd_g9rDWyVx6I6HWGmK(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          this.page.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_whe4mF6xwGL9tudu(bh);
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
        bh = await this.sd_Sr5cP4SfQ84XMmBX(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g9rDWyVx6I6HWGmK');
    }
  }

  sd_whe4mF6xwGL9tudu(bh) {
    try {
      const page = this.page;

      // page.users
      // page.users.forEach(function (item) {
      //     bh.local.message = ""
      // if(item.email == page.res.email && item.pass == page.res.pass){
      //     console.log(item.email,'Data from SSD')
      //     console.log(page.res.email,'Data from template')
      //     bh.local.message = "User already exist"
      //     return bh.local.message = "User already exist"
      // }else{
      //     localStorage.setItem("user", JSON.stringify(page.res))
      //     setTimeout( () =>{
      //     //window.location.reload()
      // }, 2000 );
      //     bh.local.message = "User Added successfully"
      // }
      //    console.log(item.email,'Each');
      //    console.log(page.res.email,'from tem');
      // })
      // console.log(page.users,'reg test')
      bh = this.sd_CFCuPoy03YrDUVli(bh);
      //appendnew_next_sd_whe4mF6xwGL9tudu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_whe4mF6xwGL9tudu');
    }
  }

  async sd_CFCuPoy03YrDUVli(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.registerUser(
        this.page.res
      );
      bh.local.data = outputVariables.local.result;

      bh = this.sd_MB6jtvwtuABiaJwd(bh);
      //appendnew_next_sd_CFCuPoy03YrDUVli
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CFCuPoy03YrDUVli');
    }
  }

  async sd_MB6jtvwtuABiaJwd(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getRegUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_oujtPnaj4pIGYa4C(bh);
      //appendnew_next_sd_MB6jtvwtuABiaJwd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MB6jtvwtuABiaJwd');
    }
  }

  sd_oujtPnaj4pIGYa4C(bh) {
    try {
      const page = this.page;
      console.log(page.users, 'Users from back end Two dashboard');

      page.tableData = page.users;
      //page.users.forEach(function (item) {
      //   console.log(item,'Each');
      //})
      console.log(page.tableData, 'o');
      //appendnew_next_sd_oujtPnaj4pIGYa4C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oujtPnaj4pIGYa4C');
    }
  }

  sd_Sr5cP4SfQ84XMmBX(bh) {
    try {
      const page = this.page;
      return false;
      //appendnew_next_sd_Sr5cP4SfQ84XMmBX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sr5cP4SfQ84XMmBX');
    }
  }

  sd_UtJ87pxje1VAFTug(bh) {
    try {
      const page = this.page;
      console.log(bh.input.id, 'Hello there');
      bh = this.sd_1nscaOORocM3clrV(bh);
      //appendnew_next_sd_UtJ87pxje1VAFTug
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UtJ87pxje1VAFTug');
    }
  }

  async sd_1nscaOORocM3clrV(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.deleteUser();

      bh = this.sd_SOFwlDSSvUvqNkd5(bh);
      //appendnew_next_sd_1nscaOORocM3clrV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1nscaOORocM3clrV');
    }
  }

  async sd_SOFwlDSSvUvqNkd5(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getRegUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_vYH1z8IjTYS2MwZU(bh);
      //appendnew_next_sd_SOFwlDSSvUvqNkd5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SOFwlDSSvUvqNkd5');
    }
  }

  sd_vYH1z8IjTYS2MwZU(bh) {
    try {
      const page = this.page;
      console.log(page.users, 'Users from back end Two dashboard');

      page.tableData = page.users;
      //page.users.forEach(function (item) {
      //   console.log(item,'Each');
      //})
      console.log(page.tableData, 'o');
      //appendnew_next_sd_vYH1z8IjTYS2MwZU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vYH1z8IjTYS2MwZU');
    }
  }

  sd_uYXMCxtl2Bc5mOlU(bh) {
    try {
      const page = this.page;
      console.log(bh.input.data, 'edit');
      bh = this.sd_nxeRxDpLUHltVAad(bh);
      //appendnew_next_sd_uYXMCxtl2Bc5mOlU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uYXMCxtl2Bc5mOlU');
    }
  }

  sd_nxeRxDpLUHltVAad(bh) {
    try {
      const updateDialogDialog = this.__page_injector__.get(MatDialog);
      const updateDialogDialogRef = updateDialogDialog.open(
        updateDialogComponent,
        { data: bh.input.data, minWidth: '500px' }
      );
      updateDialogDialogRef.afterClosed().subscribe((event) => {
        this.page.editRes = event;
        this.sd_Usb8sL40D0bvskUP(bh);

        //appendnew_next_sd_nxeRxDpLUHltVAad;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nxeRxDpLUHltVAad');
    }
  }

  sd_Usb8sL40D0bvskUP(bh) {
    try {
      const page = this.page;
      console.log(page.editRes, 'Edit Data from after close');
      //appendnew_next_sd_Usb8sL40D0bvskUP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Usb8sL40D0bvskUP');
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
  //appendnew_flow_dashboardComponent_Catch
}
