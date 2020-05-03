import request from '../utils/request';

const loadChapter = async chapterId => {
  const url = 'http://api.qingyunian.dingzhaobo.net/chapter/' + chapterId;
  return request(url);
};

export default loadChapter;
