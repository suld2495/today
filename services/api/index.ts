type RequestOption = Omit<Partial<RequestInit>, 'method'>;

const handleResponse = (response: Response) => response.json();

const get = (url: string, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'GET',
    ...options,
  };

  return fetch(url, requestOptions).then(handleResponse);
};

const post = (url: string, body: any, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...options,
  };

  return fetch(url, requestOptions).then(handleResponse);
};

const put = (url: string, body: any, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...options,
  };

  return fetch(url, requestOptions).then(handleResponse);
};

const deleteMethod = (url: string, options: RequestOption = {}) => {
  const requestOptions = {
    method: 'DELETE',
    ...options,
  };

  return fetch(url, requestOptions).then(handleResponse);
};

export const setAuthorization = (token: string) => {
  localStorage.setItem('token', token);
};

export const getAuthorization = () => {
  localStorage.getItem('token');
};

export const fetchWrapper = {
  get,
  post,
  put,
  delete: deleteMethod,
};

export default {};
