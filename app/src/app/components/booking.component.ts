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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-booking',
  templateUrl: './booking.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bookingComponent {
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
      this.sd_u1Dd8bSkMlMNfMGr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_u1Dd8bSkMlMNfMGr(bh) {
    try {
      bh = this.sd_uZc1Y8tkbTYV7N1b(bh);
      //appendnew_next_sd_u1Dd8bSkMlMNfMGr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u1Dd8bSkMlMNfMGr');
    }
  }

  //appendnew_flow_bookingComponent_start

  sd_uZc1Y8tkbTYV7N1b(bh) {
    try {
      this.page.startDate = undefined;
      bh = this.sd_qx1gpBuDqepWoZEo(bh);
      //appendnew_next_sd_uZc1Y8tkbTYV7N1b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uZc1Y8tkbTYV7N1b');
    }
  }

  sd_qx1gpBuDqepWoZEo(bh) {
    try {
      const page = this.page;
      page.startDate = new Date(2019, 0, 1);

      //appendnew_next_sd_qx1gpBuDqepWoZEo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qx1gpBuDqepWoZEo');
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
  //appendnew_flow_bookingComponent_Catch
}
