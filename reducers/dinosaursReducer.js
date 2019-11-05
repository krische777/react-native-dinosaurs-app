import { GET_DINOSAURS} from "../actions"
export default function (state = [], action = {}) {
  switch (action.type) {
    case GET_DINOSAURS:
      return action.payload;

    default:
      return state
  }
}