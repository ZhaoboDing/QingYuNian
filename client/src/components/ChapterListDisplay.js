import React from 'react';
import { Link } from 'dva/router';
import cookie from 'react-cookies';
import { ActivityIndicator, List, Icon } from 'antd-mobile';
import Footer from './Footer';

const ChapterListDisplay = ({ list }) => {
  if (list.loading) {
    return (
      <ActivityIndicator toast text="正在加载" />
    );
  }
  else {
    const chapterList = list.list;
    const hasReadIcon = id => {
      if (cookie.load('ID-' + id)) {
        return (<Icon type={'check-circle-o'} />);
      }
    };
    const catalogGenerator = item => (
      <Link to={'/chapter/' + item.id}>
        <List.Item
          extra={hasReadIcon(item.id)}
          key={item.id}
        >
          {item.title}
        </List.Item>
      </Link>
    );

    return (
      <div>
        <List renderHeader={() => '目录'}>
          {chapterList.map(catalogGenerator)}
        </List>
        <Footer />
      </div>
    );
  }
};

export default ChapterListDisplay;
