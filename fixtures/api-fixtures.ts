import { test as base } from '@playwright/test';
import { createApiContext } from '../utils/apiClient';

type ApiFixtures = {
  api: ReturnType<typeof createApiContext>;
};

export const test = base.extend<ApiFixtures>({
  api: async ({ request }, use) => {
    const api = createApiContext(request);
    await use(api);
  },
});

export const expect = test.expect;