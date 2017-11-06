import ApiClient from '../../api/client'
import { loading } from '../loading'
import { showError } from '../loading'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    dispatch(loading(true))

    api.get('/games')
      .then(res => {
        dispatch(loading(false))
        dispatch({ type: FETCHED_GAMES, payload: res.body })
      })
      .catch(err => {
        console.error(err)
        dispatch(loading(false))
        dispatch(showError(err))
      })
  }
}
