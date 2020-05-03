import request from '../utils/request';

const loadChapterList = async () => {
  const url = 'http://api.qingyunian.dingzhaobo.net/chapterlist';
  return request(url);
};

export default loadChapterList;
