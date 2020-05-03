import React from 'react';
import { connect } from 'dva';
import ChapterDisplay from '../components/ChapterDisplay';

const Chapter = ({ dispatch, content }) => {
  return (
    <ChapterDisplay content={content} />
  );
};

export default connect(({ content }) => ({
  content
}))(Chapter);
