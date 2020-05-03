import React from 'react';
import {ActivityIndicator, Button, WhiteSpace, WingBlank} from 'antd-mobile';
import {Link} from 'dva/router';
import Footer from './Footer';

const Index = ({info}) => {
  if (info.loading) {
    return (
      <ActivityIndicator toast text="正在加载"/>
    );
  }
  else {
    const first = info.first;
    const last = info.last;
    return (
      <div>
        <WhiteSpace/>
        <div>
          <img
            src={require('../assets/Logo.jpg')}
            style={{
              maxWidth: '80%',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>

        <WhiteSpace/>
        <WingBlank>
          <Link to={'/chapter/' + first}>
            <Button type="primary">
              开始阅读
            </Button>
          </Link>
          <WhiteSpace/>
          <Link to={'/chapter/' + last}>
            <Button type="primary">
              继续阅读
            </Button>
          </Link>
          <WhiteSpace/>
          <Link to={'/chapterlist/'}>
            <Button type="primary">
              自选章节
            </Button>
          </Link>
        </WingBlank>
        <Footer/>
      </div>
    );
  }
};

export default Index;
