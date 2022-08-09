export const isHandlerEnabled = (config: { handlerEnabled?: boolean } = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request: any) => {
  if (isHandlerEnabled(request)) {
    // Modify request here

  }
  return request;
};

export const successHandler = (response: any) => {
  if (isHandlerEnabled(response)) {
    // Hanlde Response

  }
  return response;
};

export const errorHandler = (error: any) => {
  if (isHandlerEnabled(error.config)) {
    // handle errors here  .
    // error.response.status === 401 && Auth.signOut();
  }
  return Promise.reject({ ...error });
};
