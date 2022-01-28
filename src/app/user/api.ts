import axios from "axios";

import {User} from "./types";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVmZWFkZWJlNDYyODAwMjE4ZjJiZTUiLCJpYXQiOjE2NDMxMTMxODJ9.qYxTkuPkjHxYNmdwzPz1hEuVRKsKZrNZGI6902gGs_4";
const config = {
  headers: {Authorization: `Bearer ${token}`},
};

const url = "https://coding-challenge-api.aerolab.co/user/me";

export default {
  fetch: (): Promise<User> =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          axios
            .get(url, config)
            .then((res) =>
              resolve({
                id: res.data._id,
                name: res.data.name,
                points: res.data.points,
                redeemHistory: res.data.redeemHistory,
                createDate: res.data.createDate,
              }),
            )
            .catch((err) => console.log(err)),
        500,
      ),
    ),
  points: {
    add: (amount: number): Promise<number> => Promise.resolve(amount),
  },
};
