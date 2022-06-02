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
//append_imports_end

@Component({
  selector: 'bh-wheathersearch',
  templateUrl: './wheathersearch.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class wheathersearchComponent {
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
      this.sd_2wUUEZVm5hR17K1Y(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2wUUEZVm5hR17K1Y(bh) {
    try {
      bh = this.sd_WqVqz3Bz99He0DVp(bh);
      //appendnew_next_sd_2wUUEZVm5hR17K1Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2wUUEZVm5hR17K1Y');
    }
  }

  updateLog(logobject: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { logobject: logobject };
      bh.local = {};
      //appendnew_next_updateLog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0qXFFCaByfpzYiQ0');
    }
  }

  processWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = {};
      bh = this.sd_IcMZGGpyNUlcjp6b(bh);
      //appendnew_next_processWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_11sHCJeVof4fcwbs');
    }
  }

  //appendnew_flow_wheathersearchComponent_start

  sd_WqVqz3Bz99He0DVp(bh) {
    try {
      this.page.logArray = [];
      //appendnew_next_sd_WqVqz3Bz99He0DVp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WqVqz3Bz99He0DVp');
    }
  }

  sd_IcMZGGpyNUlcjp6b(bh) {
    try {
      const page = this.page;
      this.page.showCard =
        typeof this.page.weatherdata === 'object' &&
        Object.keys(this.page.weatherdata).length > 2;
      bh = this.sd_kyGmzbzJ37NqYvj8(bh);
      //appendnew_next_sd_IcMZGGpyNUlcjp6b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IcMZGGpyNUlcjp6b');
    }
  }

  async sd_kyGmzbzJ37NqYvj8(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          this.page.showCard,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.errorLog(bh);
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
        bh = await this.sd_MexB8kqcbgqs4pO1(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kyGmzbzJ37NqYvj8');
    }
  }

  errorLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.bh.input.errorlog);

      //appendnew_next_errorLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tRfxYOjlN5tFZpjE');
    }
  }

  sd_MexB8kqcbgqs4pO1(bh) {
    try {
      const page = this.page;
      localStorage.lastCity = bh.input.cityName;
      bh.input.successlog = {
        type: 'info',
        message:
          'Successfully Retrieved the Weather Data for city: ' +
          bh.input.cityName,
      };
      //appendnew_next_sd_MexB8kqcbgqs4pO1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MexB8kqcbgqs4pO1');
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
      false ||
      this.sd_ftNfLwD0s0FEUOS8(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_ftNfLwD0s0FEUOS8(bh) {
    const nodes = ['sd_tRfxYOjlN5tFZpjE'];
    if (nodes.includes(bh.errorSource)) {
      //appendnew_next_sd_ftNfLwD0s0FEUOS8
      return true;
    }
    return false;
  }
  //appendnew_flow_wheathersearchComponent_Catch
}
