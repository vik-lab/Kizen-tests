export function createApiContext(request: import('@playwright/test').APIRequestContext) {
  const defaultHeaders: Record<string, string> = {};
  if (process.env.CAT_API_KEY) defaultHeaders['x-api-key'] = process.env.CAT_API_KEY;

  return {
    get: (url: string, options?: Parameters<import('@playwright/test').APIRequestContext['get']>[1]) =>
      request.get(url, { headers: { ...defaultHeaders, ...(options?.headers || {}) }, ...options }),
    post: (url: string, data?: any, options?: Parameters<import('@playwright/test').APIRequestContext['post']>[1]) =>
      request.post(url, { data, headers: { ...defaultHeaders, ...(options?.headers || {}) }, ...options }),
    // add put/delete as needed
  } as const;
}