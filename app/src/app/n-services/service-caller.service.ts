//append_imports_start

import * as sd_LMZsDDGS2PuFWUUS from 'app/sd-services/crudOperation'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_LMZsDDGS2PuFWUUS: sd_LMZsDDGS2PuFWUUS.crudOperation) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
