/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:57:35
 * @LastEditTime: 2019-09-09 15:14:31
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { DetailWrapper, DetailTitle, Content } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators   from '../../store/actionCreators';
import axios from 'axios';

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <DetailTitle>{this.props.title}</DetailTitle>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const reslut = res.data.data;
      dispatch(actionCreators.changeDetail(reslut.title, reslut.content));
    })
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));