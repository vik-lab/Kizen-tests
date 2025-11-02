import { pathToFileURL } from 'url';
import { test, expect } from '../fixtures/api-fixtures';

test('GET /breeds returns list', async ({ api }) => {
  const res = await api.get('https://api.thecatapi.com/v1/breeds');
  expect(res.status()).toBe(200);
  const body = await res.json();
  //confirm the body is an array
  expect(Array.isArray(body)).toBeTruthy();
  //assert on the first breed's details to ensure data integrity
  expect(body[0].name).toBe("Abyssinian");
//using aaray method to check if there is at least one breed with country_code 'US'
  const hasUSBreed = body.some((breed: any) => breed.country_code === 'US');
  expect(hasUSBreed).toBeTruthy();

//using aaray method find to get a specific breed by id and assert its name
  const hasId = body.find((cat: any) => cat.id === 'ycho');
  expect(hasId.name).toBe('York Chocolate');
});

