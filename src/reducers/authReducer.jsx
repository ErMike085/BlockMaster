import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.displayName,
      };
    case types.registro:
      return {
        email: action.payload.email,
        name: action.payload.name,
        password: action.payload.password,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
