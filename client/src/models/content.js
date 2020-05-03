import { pathToRegexp } from 'path-to-regexp';
import loadChapter from '../services/LoadChapter';
import loadNeighbourChapter from "../services/LoadNeighbourChapter";

export default {

  namespace: 'content',

  state: {
    loading: true,
    title: "",
    body: [],
    prev: null,
    succ: null
  },

  subscriptions: {
    read({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/chapter/:id').exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({
            type: 'query',
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

      const [data, neighbour] = yield [
        call(loadChapter, payload),
        call(loadNeighbourChapter, payload)
      ];

      if (data && Array.isArray(neighbour)) {
        yield put({
          type: 'queryComplete',
          payload: {
            title: data.title,
            body: data.body,
            prev: neighbour[0],
            succ: neighbour[1]
          }
        });
      }
      else {
        yield put({
          type: 'queryComplete',
          payload: {
            title: null,
            body: null,
            prev: null,
            succ: null
          }
        });
      }
    }
  },

  reducers: {
    queryComplete(state, { payload }) {
      return {
        loading: false,
        title: payload.title,
        body: payload.body,
        prev: payload.prev,
        succ: payload.succ
      }
    },
    queryBegin(state) {
      return {
        loading: true
      }
    }
  }
};
