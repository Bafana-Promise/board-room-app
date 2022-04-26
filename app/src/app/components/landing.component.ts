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
import { crudOperation } from 'app/sd-services/crudOperation'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent {
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
      this.sd_VSYCXVrjo5eTYs2L(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VSYCXVrjo5eTYs2L(bh) {
    try {
      bh = this.sd_6E09qmLnztQg4VUI(bh);
      //appendnew_next_sd_VSYCXVrjo5eTYs2L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VSYCXVrjo5eTYs2L');
    }
  }

  chartClicked(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_dPiHNQej0svajohP(bh);
      //appendnew_next_chartClicked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bLHgwP6ZjOMftXKD');
    }
  }

  chartHovered(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_tOIPsvnOk128K5OU(bh);
      //appendnew_next_chartHovered
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ea1J03fnqF8Gj4rI');
    }
  }

  pieSliceClickEvent(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_OylLbku1fdpQqdlk(bh);
      //appendnew_next_pieSliceClickEvent
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ByHBoO3qdzOZ4sgy');
    }
  }

  //appendnew_flow_landingComponent_start

  sd_6E09qmLnztQg4VUI(bh) {
    try {
      this.page.users = undefined;
      this.page.allBookings = undefined;
      this.page.graphData = undefined;
      this.page.chartDatasets = undefined;
      this.page.chartLabels = undefined;
      this.page.chartColors = undefined;
      this.page.chartOptions = undefined;
      this.page.chartType = undefined;
      this.page.pieChartData = undefined;
      this.page.pedding = [];
      this.page.rejected = [];
      this.page.approved = [];
      bh = this.sd_vEjSepkJK38rf9I6(bh);
      //appendnew_next_sd_6E09qmLnztQg4VUI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6E09qmLnztQg4VUI');
    }
  }

  async sd_vEjSepkJK38rf9I6(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getRegUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_B4hLsB4BGBAptlWE(bh);
      //appendnew_next_sd_vEjSepkJK38rf9I6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vEjSepkJK38rf9I6');
    }
  }

  sd_B4hLsB4BGBAptlWE(bh) {
    try {
      const page = this.page;
      page.users;
      //page.users.forEach(function (item) {
      //   console.log(item,'Each');
      //})
      // console.log(page.users.length, 'Reg Users Dashboard')
      // console.log(page.allBookings,'Each Bookings dash')
      bh = this.sd_kwp3vkZaFGOEnLes(bh);
      //appendnew_next_sd_B4hLsB4BGBAptlWE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B4hLsB4BGBAptlWE');
    }
  }

  async sd_kwp3vkZaFGOEnLes(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllBooking();
      this.page.allBookings = outputVariables.local.result;

      bh = this.sd_ZZqtQNd2srzGnLmX(bh);
      //appendnew_next_sd_kwp3vkZaFGOEnLes
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kwp3vkZaFGOEnLes');
    }
  }

  sd_ZZqtQNd2srzGnLmX(bh) {
    try {
      const page = this.page;
      console.log(page.allBookings, 'Each Bookings dash');

      page.chartType = 'line';
      page.chartDatasets = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'This years Bookings' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Last years booking' },
      ];
      page.chartLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ];
      page.chartColors = [
        {
          backgroundColor: 'rgba(105, 0, 132, .2)',
          borderColor: 'rgba(200, 99, 132, .7)',
          borderWidth: 2,
        },
        {
          backgroundColor: 'rgba(0, 137, 132, .2)',
          borderColor: 'rgba(0, 10, 130, .7)',
          borderWidth: 2,
        },
      ];
      page.chartOptions = {
        responsive: true,
      };

      bh = this.sd_L3c8GRGrenKIHUxX(bh);
      //appendnew_next_sd_ZZqtQNd2srzGnLmX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZZqtQNd2srzGnLmX');
    }
  }

  sd_L3c8GRGrenKIHUxX(bh) {
    try {
      const page = this.page;
      page.pieChartData = [
        {
          data: [300, 500, 100],
        },
      ];

      page.pieChartLabels = [
        'Last year 2021',
        'Current year 2022',
        'Last of last year 2020',
      ];

      page.pieChartOptions = {
        responsive: true,
      };

      page.allBookings.forEach(function (item) {
        if (item.status === null) {
          page.pedding.push(item);
          // console.log(page.pedding,'Pending')
        } else if (item.status === false) {
          page.rejected.push(item);
          // console.log('Rejected')
        } else {
          page.approved.push(item);
          // console.log('Approved')
        }
        // if(item.status === null){
        //   page.pedding.push(item);
        //   console.log(page.pedding,'Pending')
        // }else if(item.status === false){
        //   page.rejected.push(item);
        //   console.log(page.rejected,'Rejected')
        // }else{
        //   page.approved.push(item);
        //   console.log(page.approved,'Approved')
        // }
        // console.log(item, 'Each');
      });
      page.pedding;
      page.rejected;
      page.approved;
      console.log(page.pedding.length, 'Pending  OutSide for each');
      console.log(page.rejected.length, 'Rejected Outside for each');
      console.log(page.approved.length, 'Approved outside for each');
      //appendnew_next_sd_L3c8GRGrenKIHUxX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L3c8GRGrenKIHUxX');
    }
  }

  sd_dPiHNQej0svajohP(bh) {
    try {
      const page = this.page;
      console.log(bh.input.event);
      //appendnew_next_sd_dPiHNQej0svajohP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dPiHNQej0svajohP');
    }
  }

  sd_tOIPsvnOk128K5OU(bh) {
    try {
      const page = this.page;
      console.log(bh.input.event);
      //appendnew_next_sd_tOIPsvnOk128K5OU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tOIPsvnOk128K5OU');
    }
  }

  sd_OylLbku1fdpQqdlk(bh) {
    try {
      const page = this.page;
      bh.input.event.args.isExploded = !bh.input.event.args.isExploded;
      //appendnew_next_sd_OylLbku1fdpQqdlk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OylLbku1fdpQqdlk');
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
  //appendnew_flow_landingComponent_Catch
}
