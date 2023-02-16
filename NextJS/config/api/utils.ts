import { ApiResponse } from 'apisauce';

import { ApiErrorI, Nullable } from '~utils/types';

type ErrorResponse = Nullable<ApiErrorI>;

// TODO: Change for your current api error response standard
export const getError = (response: ApiResponse<any, ApiErrorI>): ErrorResponse => {
  if (response?.ok === false && response.data) {
    return { code: response.data.code, description: response.data.description };
  }
  return { code: response.problem as string, description: response.problem as string };
};
