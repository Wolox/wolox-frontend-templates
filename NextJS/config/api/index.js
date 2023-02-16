import { create } from 'apisauce';

import { serializer, deserializer } from '../serializer';

import { getError } from './utils';
import { STATUS_CODES, API_PROBLEMS } from './constants';

/*
 * TODO Change baseURL the following when you have backend url
 * baseURL: process.env.API_BASE_URL,
 */
const baseURL = 'http://wolox.com';

if (baseURL === 'http://wolox.com') {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

const baseApiConfig = {
  timeout: 15000,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: { 'Content-Type': 'application/json' }
};

const api = create({
  baseURL,
  ...baseApiConfig
});

/*
 * TODO Use this function to create an api with another backend/service
 */
export const createApi = (apiUrl) =>
  create({
    baseURL: apiUrl,
    ...baseApiConfig
  });

/*
 * TODO Call this apiSetup(dispatch) in the component you need to call a dispatch and use those monitors with the proper dispatcher
 */
// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const apiSetup = dispatch => {
  // Response transform to deserialize snake_case backend structure
  api.addResponseTransform((response) => {
    if (response.ok) {
      response.data = response.data ? deserializer.serialize(response.data) : null;
    } else {
      // TODO if you are using react-query, you might need to throw error on request to get correct behaviour
      throw getError(response);
    }
  });

  // Request transform to serialize the body to camel_case backend structure
  api.addRequestTransform((request) => {
    if (request.params) {
      request.params = serializer.serialize(request?.params);
    }
  });

  api.addMonitor((response) => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
       */
    }
  });

  api.addMonitor((response) => {
    if (response.problem === API_PROBLEMS.networkError) {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
    }
  });
};

export default api;
