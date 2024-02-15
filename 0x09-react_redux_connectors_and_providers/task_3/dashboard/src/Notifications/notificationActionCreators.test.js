import { fetchNotifications, markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe("fetchNotifications action creator", () => {
  it("should dispatch FETCH_NOTIFICATIONS_SUCCESS with the correct data", () => {
    const data = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };

    expect(fetchNotifications(data)).toEqual(expectedAction);
  });
});

describe("markAsRead action creator", () => {
  it("should dispatch MARK_AS_READ with the correct index", () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };

    expect(markAsRead(index)).toEqual(expectedAction);
  });
});

describe("setNotificationFilter action creator", () => {
  it("should dispatch SET_TYPE_FILTER with the correct filter", () => {
    const filter = "urgent";
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };

    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
