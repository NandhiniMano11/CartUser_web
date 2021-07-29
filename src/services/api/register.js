import { common, common_multipart } from './utils/core';

export const _createproduct = async (payloads, callbacks) => {
  console.log(payload);
  try {
    let request = {
      reqmethod: 'POST',
      url: 'users/sellerregister',
      param: {},
      reqdata: payload,
    };
    common_multipart(request)
      .then((response) => {
        response.data.statusCode == 200 &&
          callback(null, response.data.responseContents);
      })
      .catch((error) => {
        console.log('error', error);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};
