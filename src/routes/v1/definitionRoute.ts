import { Router, Request, Response } from 'express'

import db from '../../database';
import respond from '@src/modules/respond';
import * as ApiURL from '@constants/ApiURL';
import * as RequestTypes from '../RequestTypes';
import { DefinitionResponse } from '../ResponseTypes';
import * as DefinitionAddController from '../../controllers/Definition/DefinitionAddController';
import * as DefinitionGetController from '../../controllers/Definition/DefinitionGetController';
import GetDefinitionsParam from '@models/RequestParam/GetDefinitionsParam';
import GetDefinitionIdsParam from '@models/RequestParam/GetDefinitionIdsParam';

function definitionRoute(router) {

  router.route(ApiURL.DEFINITIONS)
    /**
     * Definitions 가져오기
     */
    .post((req: Request, res: Response) => {
      const param: GetDefinitionsParam = req['$param'];
      const payload = DefinitionGetController.getDefinitionByDefIds(param);
      respond(res, payload);
    })
    
  router.route(ApiURL.DEFINITIONS_NEW)
    /**
     * Definition 등록
     */
    .post((request: Request, response: Response) => {
      const req: RequestTypes.NewDefinitions = request.body;
      const payload = DefinitionAddController.addDefinition(req);

      respond(response, payload);
    })

  router.route(ApiURL.DEFINITIONS_IDS)
    /**
     * 최신 Definitions 가져오기
     */
    .get((request: Request, response: Response) => {
      const param: GetDefinitionIdsParam = request['$param'];
      let payload;
      if (param.defIds.length) {
        console.log(123, 1);
        payload = DefinitionGetController.getDefinitionIds(param);
      } else {
        payload = DefinitionGetController.getRecentlyUpdatedDefinitionIds(param);
      }
      respond(response, payload, 'defIds');
    })


  router.route(ApiURL.SEARCH)
    /**
     * Definition 검색
     */
    .get((request: Request, response: Response) => {
      const req: RequestTypes.Search = request.query;
      const payload = DefinitionGetController.getDefinitionIdsBySearch(req);

      respond(response, payload, 'defIds');
    })
}

export default definitionRoute;
