import rootReducer from "./rootReducer";
import { Map } from "immutable";

describe("rootReducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    });
  });
});
