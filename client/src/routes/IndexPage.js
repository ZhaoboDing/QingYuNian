import React from 'react';
import { connect } from 'dva';
import 'antd-mobile/dist/antd-mobile.css';
import Index from '../components/Index';

const IndexPage = ({ dispatch, indexInfo }) =>  {
  return (
    <Index info={indexInfo} />
  );
};

export default connect(({ indexInfo }) => ({
  indexInfo
}))(IndexPage);
