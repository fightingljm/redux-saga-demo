import { takeLatest } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

import { fetchPosts } from '../actions'

function * mySaga() {
    yield takeLatest(types.FETCH_POSTS_REQUEST, fetchPosts)
}

export default mySaga
