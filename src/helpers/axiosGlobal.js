import axios from "axios";
import nprogress from "nprogress";

nprogress.configure({
  trickle: false,
  showSpinner: false
});

const isProduction = process.env.NODE_ENV === "production" ? true : false;

const baseURL = isProduction
  ? "https://cab.optimuscp.io/"
  : "http://localhost:3000/";

const globalHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const apiClient = axios.create({
  baseURL: baseURL,
  withCredentials: false, // This is the default
  headers: {
    ...globalHeaders
  },
  timeout: 10000
});

apiClient.interceptors.request.use(
  config => {
    nprogress.start();
    nprogress.set(0.25);
    return config;
  },
  function(error) {
    nprogress.set(0.75);
    nprogress.done();
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function(response) {
    nprogress.set(0.75);
    nprogress.done();
    return response;
  },
  function(error) {
    nprogress.set(0.5);
    if (error.response && error.response.status === 403) {
      nprogress.set(0.75);
    }
    nprogress.done();
    return Promise.reject(error);
  }
);

export { requester, apiClient };

// I am keeping this right now as a lot of functionalities are based on this requester,
// I'll eventually shift everything to the new API client and the remove this off.
const requester = ({
  method = "GET",
  url,
  data = {},
  params = {},
  headers = {}
}) =>
  new Promise((resolve, reject) => {
    axios({
      method,
      url,
      baseURL,
      data,
      params,
      headers: { ...globalHeaders, ...headers }
    })
      .then(({ status, data }) => resolve({ status, data }))
      .catch(err =>
        err.response
          ? reject({ status: err.status, data: err.response })
          : reject({ status: 500, data: { msg: err.message } })
      );
  });
