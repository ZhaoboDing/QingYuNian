const loadFirstChapter = async () => {
  const url = 'http://api.qingyunian.dingzhaobo.net/firstchapter/';
  return await (await fetch(url)).json();
};

export default loadFirstChapter;
