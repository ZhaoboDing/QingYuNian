import request from '../utils/request';

const loadChapterTitle = async chapterId => {
  const url = 'http://api.qingyunian.dingzhaobo.net/chaptertitle/';
  return request(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'id': chapterId })
  });
};

export default loadChapterTitle;
