import request from "../utils/request";

const loadNeighbourChapter = async chapterId => {
  const url = 'http://api.qingyunian.dingzhaobo.net/neighbour/' + chapterId;
  return request(url);
};

export default loadNeighbourChapter;
