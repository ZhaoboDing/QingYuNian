import React from 'react';
import { connect } from 'dva';
import 'antd-mobile/dist/antd-mobile.css';
import ChapterListDisplay from "../components/ChapterListDisplay";

const ChapterList = ({ dispatch, chapterList }) =>  {
  return (
    <ChapterListDisplay list={chapterList} />
  );
};

export default connect(({ chapterList }) => ({
  chapterList
}))(ChapterList);
