/* eslint-disable default-case */
export function userReducer(state = null, action) {
  switch (action.type) {
    case "Logged_In":
      return action.payload
    case "Logged_Out":
      return action.payload
    default:
      return state
  }
}
