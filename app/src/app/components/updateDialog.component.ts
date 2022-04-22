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
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-updateDialog',
  templateUrl: './updateDialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class updateDialogComponent {
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
      this.sd_bXSz37g8NjZ2lZdE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bXSz37g8NjZ2lZdE(bh) {
    try {
      bh = this.sd_r6xpnkNnyMF7gGuo(bh);
      //appendnew_next_sd_bXSz37g8NjZ2lZdE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bXSz37g8NjZ2lZdE');
    }
  }

  //appendnew_flow_updateDialogComponent_start

  sd_r6xpnkNnyMF7gGuo(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_nhyh8fDnjs1XaFlc(bh);
      //appendnew_next_sd_r6xpnkNnyMF7gGuo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r6xpnkNnyMF7gGuo');
    }
  }

  sd_nhyh8fDnjs1XaFlc(bh) {
    try {
      const page = this.page;
      page.dm.user = page.data;
      //appendnew_next_sd_nhyh8fDnjs1XaFlc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nhyh8fDnjs1XaFlc');
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
  //appendnew_flow_updateDialogComponent_Catch
}
