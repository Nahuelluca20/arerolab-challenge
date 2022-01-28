import axios from "axios";

import {Product} from "./types";

const requester = axios.create({
  baseURL: "https://coding-challenge-api.aerolab.co",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVmZWFkZWJlNDYyODAwMjE4ZjJiZTUiLCJpYXQiOjE2NDMxMTMxODJ9.qYxTkuPkjHxYNmdwzPz1hEuVRKsKZrNZGI6902gGs_4`,
  },
});

requester.interceptors.response.use((response) => response.data);

export default {
  list: (): Promise<Product[]> => requester.get(`/products`, {}),
  redeem: (product: Product): Promise<string> =>
    Promise.resolve(`You have redeem the product succesfully (${product.name})`),
};
