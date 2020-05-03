import { pathToRegexp } from 'path-to-regexp';
import loadChapterList from '../services/LoadChapterList';
import loadChapterTitle from '../services/LoadChapterTitle';

export default {

  namespace: 'chapterList',

  state: {
    loading: false,
    list: []
  },

  subscriptions: {
    load({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/chapterlist/').exec(pathname);
        if (match) {
          dispatch({
            type: 'query'
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

      const chapterId = yield call(loadChapterList);
      const chapterTitle = yield call(loadChapterTitle, chapterId);
      const data = chapterId.map((id, index) => ({
        id: id,
        title: chapterTitle[index]
      }));

      if (data) {
        yield put({
          type: 'queryComplete',
          payload: {
            list: data
          }
        });
      }
      else {
        yield put({
          type: 'queryComplete',
          payload: {
            list: null
          }
        });
      }
    }
  },

  reducers: {
    queryComplete(state, { payload }) {
      return {
        list: payload.list,
        loading: false,
      }
    },
    queryBegin(state) {
      return {
        ...state,
        loading: true,
      }
    },
  }
};
