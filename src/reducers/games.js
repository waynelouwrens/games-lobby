import { CREATE_GAME } from '../actions/games/create'
import { FETCHED_GAMES } from '../actions/games/fetch'



export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case CREATE_GAME:
      return [...payload]
    case FETCHED_GAMES:
      return [...payload]

    default:
      return currentState
  }
}
