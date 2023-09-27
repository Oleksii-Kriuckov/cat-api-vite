import { selector } from "recoil";
import { voteResponse$ } from "./atoms";

export const voteResponseData$ = selector({
  key: "voteResponseDataS",
  get: ({ get }) => {
    const voteResp = get(voteResponse$);
    const isObject = (value: any): value is { url: string; id: string } =>
      typeof value === "object" &&
      typeof value.url === "string" &&
      typeof value.id === "string";

    if (isObject(voteResp)) {
      return { url: voteResp.url, id: voteResp.id };
    }
  },
});
