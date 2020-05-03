import React from 'react';
import { Link } from 'dva/router';
import { ActivityIndicator, WingBlank, Button } from 'antd-mobile';
import Footer from './Footer';

const ChapterDisplay = ({ content }) => {
  if (content.loading) {
    return (
      <ActivityIndicator toast text="正在加载" />
    );
  }
  else {
    const title = content.title;
    const body = content.body;
    const prev = content.prev;
    const succ = content.succ;

    const paragraphGenerator = (para, index) => (
      <p
        key={'paragraph' + index}
        style={{ fontSize: '140%' }}
      >
        {para}
      </p>
    );
    const linkToOtherChapter = id => '/chapter/' + id;
    const prevButton = () => {
      if (prev) {
        return (
          <Link to={linkToOtherChapter(prev)}>
            <Button
              inline
              style={{ margin: '20px', float: 'left' }}
            >
              上一章
            </Button>
          </Link>
        );
      }
    };
    const succButton = () => {
      if (succ) {
        return (
          <Link to={linkToOtherChapter(succ)}>
            <Button
              inline
              style={{ margin: '20px' }}
            >
              下一章
            </Button>
          </Link>
        );
      }
    };

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <WingBlank>
          <div id='article'>
            {body.map(paragraphGenerator)}
          </div>
        </WingBlank>
        <div style={{ textAlign: 'right' }}>
          {prevButton()}
          {succButton()}
        </div>
        <Footer />
      </div>
    );
  }
};

export default ChapterDisplay;
