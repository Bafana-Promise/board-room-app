let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class backEndCrudOperation {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'backEndCrudOperation';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new backEndCrudOperation(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_backEndCrudOperation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: backEndCrudOperation');

    //appendnew_flow_backEndCrudOperation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: backEndCrudOperation');

    if (!this.swaggerDocument['paths']['/getRegUsers']) {
      this.swaggerDocument['paths']['/getRegUsers'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getRegUsers']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getRegUsers`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_313cHUzqgS32ArDr(bh);
          //appendnew_next_sd_dEr4FRhZH8BUHd9k
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dEr4FRhZH8BUHd9k');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/loginUser']) {
      this.swaggerDocument['paths']['/loginUser'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/loginUser']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/loginUser`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_EZbTmj5YW05MTJpj(bh);
          //appendnew_next_sd_VNOLVqvY33rOMdZm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VNOLVqvY33rOMdZm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteUser/{id}']) {
      this.swaggerDocument['paths']['/deleteUser/{id}'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteUser/{id}']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/deleteUser/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_389eJa4iJcotvnzB(bh);
          //appendnew_next_sd_ZfvDF573EaE3z7OZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZfvDF573EaE3z7OZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/editUser/{email}']) {
      this.swaggerDocument['paths']['/editUser/{email}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/editUser/{email}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/editUser/:email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_6nYr2tGPF5imdy20(bh);
          //appendnew_next_sd_JhqWw0XtZwCvTOyn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JhqWw0XtZwCvTOyn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/addBookings']) {
      this.swaggerDocument['paths']['/addBookings'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addBookings']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addBookings`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_lE2ihKNEDJ7xOQ8s(bh);
          //appendnew_next_sd_dbeFs1GJ8UblJ6tw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dbeFs1GJ8UblJ6tw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getUser']) {
      this.swaggerDocument['paths']['/getUser'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getUser']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/getUser`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_MXOcRBGz6lPxipsA(bh);
          //appendnew_next_sd_QueSrqTK1b4m0kKq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QueSrqTK1b4m0kKq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/regUser']) {
      this.swaggerDocument['paths']['/regUser'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/regUser']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/regUser`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_QrqOP4jEw52EkvFG(bh);
          //appendnew_next_sd_17S1Yj4OhMqPsrMm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_17S1Yj4OhMqPsrMm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/regUsers']) {
      this.swaggerDocument['paths']['/regUsers'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/regUsers']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/regUsers`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_kJYuYWtWm3E5M3nh(bh);
          //appendnew_next_sd_g1pcSFI3dsQRbR7w
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_g1pcSFI3dsQRbR7w');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getUserBookings']) {
      this.swaggerDocument['paths']['/getUserBookings'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getUserBookings']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/getUserBookings`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_sUIajlvWUr5Ukrqx(bh);
          //appendnew_next_sd_x04y9FVSJkyZvAw6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_x04y9FVSJkyZvAw6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/addBookings']) {
      this.swaggerDocument['paths']['/addBookings'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addBookings']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addBookings`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_CLr7AqYgpeOtqOSB(bh);
          //appendnew_next_sd_p3SlvSPreegQw1nk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_p3SlvSPreegQw1nk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getBookings']) {
      this.swaggerDocument['paths']['/getBookings'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getBookings']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getBookings`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_YKkmWis7QpCpCvMd(bh);
          //appendnew_next_sd_kGACDZYF0ggP10R7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kGACDZYF0ggP10R7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getaUserBooking']) {
      this.swaggerDocument['paths']['/getaUserBooking'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getaUserBooking']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getaUserBooking`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_t9V9oDRF1mCD9uk7(bh);
          //appendnew_next_sd_uVovh4ZXlC1OXaaH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uVovh4ZXlC1OXaaH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/changeBookingStatus/{id}']) {
      this.swaggerDocument['paths']['/changeBookingStatus/{id}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/changeBookingStatus/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/changeBookingStatus/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_5dvzZ8qr3ywtns8w(bh);
          //appendnew_next_sd_zMNUPbMdFtT61luo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zMNUPbMdFtT61luo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/allBookings']) {
      this.swaggerDocument['paths']['/allBookings'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/allBookings']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/allBookings`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_igVPClRZVedEYhEC(bh);
          //appendnew_next_sd_fawKmXNcElyvvKCB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fawKmXNcElyvvKCB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_backEndCrudOperation_HttpIn
  }
  //   service flows_backEndCrudOperation

  //appendnew_flow_backEndCrudOperation_start

  async sd_313cHUzqgS32ArDr(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_5d4j83WQZkjpBWao',
        'users',
        bh.input.query,
        {}
      );
      await this.sd_EKifV3HeovmYFhRY(bh);
      //appendnew_next_sd_313cHUzqgS32ArDr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_313cHUzqgS32ArDr');
    }
  }

  async sd_EKifV3HeovmYFhRY(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EKifV3HeovmYFhRY');
    }
  }

  async sd_EZbTmj5YW05MTJpj(bh) {
    try {
      bh.input.query = {
        email: bh.input.body.email,
      };
      // console.log(bh);
      bh = await this.sd_wOmzgXi0GI9pmSwx(bh);
      //appendnew_next_sd_EZbTmj5YW05MTJpj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EZbTmj5YW05MTJpj');
    }
  }

  async sd_wOmzgXi0GI9pmSwx(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_5d4j83WQZkjpBWao',
        'users',
        bh.input.query,
        {}
      );
      bh = await this.sd_geE3EEpPK3DZz6sw(bh);
      //appendnew_next_sd_wOmzgXi0GI9pmSwx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wOmzgXi0GI9pmSwx');
    }
  }

  async sd_geE3EEpPK3DZz6sw(bh) {
    try {
      // console.log(bh.local.result, "response from SSD");
      await this.sd_pQffNSNSEP6WA3DT(bh);
      //appendnew_next_sd_geE3EEpPK3DZz6sw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_geE3EEpPK3DZz6sw');
    }
  }

  async sd_pQffNSNSEP6WA3DT(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pQffNSNSEP6WA3DT');
    }
  }

  async sd_389eJa4iJcotvnzB(bh) {
    try {
      let objId = require('mongodb').ObjectId;
      let _id = new objId(bh.input.params.id);
      bh.input.filter = {
        _id,
      };
      console.log(bh);
      bh = await this.sd_KMQ6MId07otZnQMX(bh);
      //appendnew_next_sd_389eJa4iJcotvnzB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_389eJa4iJcotvnzB');
    }
  }

  async sd_KMQ6MId07otZnQMX(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_5d4j83WQZkjpBWao',
        'users',
        bh.input.filter,
        {}
      );
      await this.sd_XXWZnlNKVoYpn2Hw(bh);
      //appendnew_next_sd_KMQ6MId07otZnQMX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KMQ6MId07otZnQMX');
    }
  }

  async sd_XXWZnlNKVoYpn2Hw(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XXWZnlNKVoYpn2Hw');
    }
  }

  async sd_6nYr2tGPF5imdy20(bh) {
    try {
      bh.input.filter = {
        email: bh.input.body.email,
        // _id: bh.input.body._id
      };
      delete bh.input.body._id;
      bh.updatedUser = { $set: bh.input.body };
      console.log(bh.input.body);
      bh = await this.sd_I5xXPNwCnB6EImcG(bh);
      //appendnew_next_sd_6nYr2tGPF5imdy20
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6nYr2tGPF5imdy20');
    }
  }

  async sd_I5xXPNwCnB6EImcG(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_5d4j83WQZkjpBWao',
        'users',
        bh.input.filter,
        bh.updatedUser,
        {}
      );
      await this.sd_4qR2GwpUveeql45I(bh);
      //appendnew_next_sd_I5xXPNwCnB6EImcG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I5xXPNwCnB6EImcG');
    }
  }

  async sd_4qR2GwpUveeql45I(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4qR2GwpUveeql45I');
    }
  }

  async sd_lE2ihKNEDJ7xOQ8s(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_5d4j83WQZkjpBWao',
        'bookings',
        bh.input.body,
        {}
      );
      await this.sd_ukjBbhhjrQxdwYYT(bh);
      //appendnew_next_sd_lE2ihKNEDJ7xOQ8s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lE2ihKNEDJ7xOQ8s');
    }
  }

  async sd_ukjBbhhjrQxdwYYT(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ukjBbhhjrQxdwYYT');
    }
  }

  async sd_MXOcRBGz6lPxipsA(bh) {
    try {
      bh.input.query = {
        email: bh.input.body.email,
      };
      bh = await this.sd_qBQqzsqDmorWAvuZ(bh);
      //appendnew_next_sd_MXOcRBGz6lPxipsA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MXOcRBGz6lPxipsA');
    }
  }

  async sd_qBQqzsqDmorWAvuZ(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_5d4j83WQZkjpBWao',
        'users',
        bh.input.query,
        {}
      );
      bh = await this.sd_VPy1rT1IT3NnZKPm(bh);
      //appendnew_next_sd_qBQqzsqDmorWAvuZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qBQqzsqDmorWAvuZ');
    }
  }

  async sd_VPy1rT1IT3NnZKPm(bh) {
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QrqOP4jEw52EkvFG(bh);
      } else if (
        this.sdService.operators['nempty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H4Nh1gSHv9qCwPaS(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VPy1rT1IT3NnZKPm');
    }
  }

  async sd_QrqOP4jEw52EkvFG(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_5d4j83WQZkjpBWao',
        'users',
        bh.input.body,
        {}
      );
      bh = await this.sd_AAhXxdpa0HdPcWqM(bh);
      //appendnew_next_sd_QrqOP4jEw52EkvFG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QrqOP4jEw52EkvFG');
    }
  }

  async sd_AAhXxdpa0HdPcWqM(bh) {
    try {
      bh.local.result.ops.shift();
      bh.local.result.ops.push({
        message: 'Registered Successfully',
      });
      await this.sd_LPz42caZzbxPEZFe(bh);
      //appendnew_next_sd_AAhXxdpa0HdPcWqM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AAhXxdpa0HdPcWqM');
    }
  }

  async sd_LPz42caZzbxPEZFe(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result.ops);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LPz42caZzbxPEZFe');
    }
  }

  async sd_H4Nh1gSHv9qCwPaS(bh) {
    try {
      bh.local.result.shift();
      bh.local.result.push({
        message: 'User aready exist please Login',
      });

      await this.sd_WqGPLmqPeXD0a9mB(bh);
      //appendnew_next_sd_H4Nh1gSHv9qCwPaS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H4Nh1gSHv9qCwPaS');
    }
  }

  async sd_WqGPLmqPeXD0a9mB(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WqGPLmqPeXD0a9mB');
    }
  }

  async sd_kJYuYWtWm3E5M3nh(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_5d4j83WQZkjpBWao',
        'users',
        bh.input.body,
        {}
      );
      await this.sd_7g0bI4DYWRx0OtXl(bh);
      //appendnew_next_sd_kJYuYWtWm3E5M3nh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kJYuYWtWm3E5M3nh');
    }
  }

  async sd_7g0bI4DYWRx0OtXl(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7g0bI4DYWRx0OtXl');
    }
  }

  async sd_sUIajlvWUr5Ukrqx(bh) {
    try {
      // console.log(bh.input.body);
      bh.input.query = {
        email: bh.input.body.email,
      };
      bh = await this.sd_yHcKScTtWX1RNzUw(bh);
      //appendnew_next_sd_sUIajlvWUr5Ukrqx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sUIajlvWUr5Ukrqx');
    }
  }

  async sd_yHcKScTtWX1RNzUw(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_5d4j83WQZkjpBWao',
        'bookings',
        bh.input.query,
        {}
      );
      await this.sd_7dHy5Cac7ytWziSm(bh);
      //appendnew_next_sd_yHcKScTtWX1RNzUw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yHcKScTtWX1RNzUw');
    }
  }

  async sd_7dHy5Cac7ytWziSm(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7dHy5Cac7ytWziSm');
    }
  }

  async sd_CLr7AqYgpeOtqOSB(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_5d4j83WQZkjpBWao',
        'bookings',
        bh.input.body,
        {}
      );
      bh = await this.sd_XOBORvQO8zI3z2MR(bh);
      //appendnew_next_sd_CLr7AqYgpeOtqOSB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CLr7AqYgpeOtqOSB');
    }
  }

  async sd_XOBORvQO8zI3z2MR(bh) {
    try {
      bh.local.result.ops.shift();
      bh.local.result.ops.push({
        message: 'Registered Successfully',
      });
      console.log(bh, 'test');
      await this.sd_y93Gpp3rAjXkSe3l(bh);
      //appendnew_next_sd_XOBORvQO8zI3z2MR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XOBORvQO8zI3z2MR');
    }
  }

  async sd_y93Gpp3rAjXkSe3l(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result.ops);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y93Gpp3rAjXkSe3l');
    }
  }

  async sd_YKkmWis7QpCpCvMd(bh) {
    try {
      bh.input.query = {
        email: bh.input.body.email,
      };
      console.log(bh);
      bh = await this.sd_LLay9pLChE0NgOPX(bh);
      //appendnew_next_sd_YKkmWis7QpCpCvMd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YKkmWis7QpCpCvMd');
    }
  }

  async sd_LLay9pLChE0NgOPX(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_5d4j83WQZkjpBWao',
        'bookings',
        bh.input.query,
        {}
      );
      bh = await this.sd_xXaxwFHXWERD4nQY(bh);
      //appendnew_next_sd_LLay9pLChE0NgOPX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LLay9pLChE0NgOPX');
    }
  }

  async sd_xXaxwFHXWERD4nQY(bh) {
    try {
      console.log(bh, 'SSD API');
      await this.sd_Z0zjQrJYr707geOH(bh);
      //appendnew_next_sd_xXaxwFHXWERD4nQY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xXaxwFHXWERD4nQY');
    }
  }

  async sd_Z0zjQrJYr707geOH(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z0zjQrJYr707geOH');
    }
  }

  async sd_t9V9oDRF1mCD9uk7(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_5d4j83WQZkjpBWao',
        'bookings',
        bh.input.query,
        {}
      );
      bh = await this.sd_bxenitihQoOcgYMt(bh);
      //appendnew_next_sd_t9V9oDRF1mCD9uk7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t9V9oDRF1mCD9uk7');
    }
  }

  async sd_bxenitihQoOcgYMt(bh) {
    try {
      // console.log(bh.local.result, "response from SSD");
      await this.sd_aAMAEkW4lhb7AovQ(bh);
      //appendnew_next_sd_bxenitihQoOcgYMt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bxenitihQoOcgYMt');
    }
  }

  async sd_aAMAEkW4lhb7AovQ(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aAMAEkW4lhb7AovQ');
    }
  }

  async sd_5dvzZ8qr3ywtns8w(bh) {
    try {
      let objId = require('mongodb').ObjectId;
      let _id = new objId(bh.input.body._id);

      bh.input.filter = {
        _id,
      };
      console.log(bh.input.body);

      delete bh.input.body._id;
      bh.updatedUser = { $set: bh.input.body };
      bh = await this.sd_JtXg8RXzOu4a0q7a(bh);
      //appendnew_next_sd_5dvzZ8qr3ywtns8w
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5dvzZ8qr3ywtns8w');
    }
  }

  async sd_JtXg8RXzOu4a0q7a(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_5d4j83WQZkjpBWao',
        'bookings',
        bh.input.filter,
        bh.updatedUser,
        {}
      );
      await this.sd_Ds18qAYixmPghsNK(bh);
      //appendnew_next_sd_JtXg8RXzOu4a0q7a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JtXg8RXzOu4a0q7a');
    }
  }

  async sd_Ds18qAYixmPghsNK(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ds18qAYixmPghsNK');
    }
  }

  async sd_igVPClRZVedEYhEC(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_5d4j83WQZkjpBWao',
        'bookings',
        bh.input.query,
        {}
      );
      await this.sd_dGKmXQOs0KGTIvnb(bh);
      //appendnew_next_sd_igVPClRZVedEYhEC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_igVPClRZVedEYhEC');
    }
  }

  async sd_dGKmXQOs0KGTIvnb(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dGKmXQOs0KGTIvnb');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_backEndCrudOperation_Catch
}
