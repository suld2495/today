type RequestOption = Omit<Partial<RequestInit>, 'method'>;

const get = (url: string, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'GET',
    ...options
  };

  return fetch(url, requestOptions);
};

const post = (url: string, body: any, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...options
  };

  return fetch(url, requestOptions);
};

const put = (url: string, body: any, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...options
  };

  return fetch(url, requestOptions);
};

const _delete = (url: string, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'DELETE',
    ...options
  };

  return fetch(url, requestOptions);
};

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
}