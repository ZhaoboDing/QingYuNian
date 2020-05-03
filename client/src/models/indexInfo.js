import { pathToRegexp } from 'path-to-regexp';
import cookie from 'react-cookies';
import loadFirstChapter from '../services/LoadFirstChapter';

export default {

  namespace: 'indexInfo',

  state: {
    loading: true,
    first: "",
    last: ""
  },

  subscriptions: {
    indexInit({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/').exec(pathname);
        if (match) {
          dispatch({
            type: 'query'
          })
        }
      });
    },
    record({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/chapter/:id').exec(pathname);
        if (match) {
          const id = match[1];
          cookie.save('last', id, { path: "/" });
          cookie.save('ID-' + id, 'true', { path: '/' });
          dispatch({
            type: 'updateLastTime',
            payload: id
          })
        }
      });
    }
  },

  effects: {
    *query({ payload }, { call, put }) {
      yield put({
        type: 'queryBegin'
      });

      const lastChapter = cookie.load('last');
      const firstChapter = yield call(loadFirstChapter);

      yield put({
        type: 'queryComplete',
        payload: {
          first: firstChapter,
          last: lastChapter
        }
      });
    }
  },

  reducers: {
    queryComplete(state, { payload }) {
      return {
        loading: false,
        first: payload.first,
        last: payload.last
      }
    },
    queryBegin(state) {
      return {
        loading: true
      }
    },
    updateLastTime(state, { payload }) {
      return {
        loading: false,
        first: state.first,
        last: payload.last
      }
    }
  }
};
