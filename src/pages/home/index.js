/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:48:48
 * @LastEditTime: 2019-09-02 17:19:43
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import { home } from '../../request/api';
import Topic from './componets/Topic';
import List from './componets/List';
import Recommd from './componets/Recommd';
import Writer from './componets/Writer';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackToTop
} from './style';

class Home extends Component {

  handleBackTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt="" src='//upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
            <Topic />
            <List />
        </HomeLeft>
        <HomeRight>
          <Recommd />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackToTop onClick={this.handleBackTop}>回到顶部</BackToTop> : null}
      </HomeWrapper>
    )
	}
	
	componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
});

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		home().then((res) => {
			const result = res.data;
			dispatch(actionCreators.changeHomeData(result.topicList, result.articleList, result.recommendList, result.writerList));
		})
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 100 ) {
      dispatch(actionCreators.goBackTop(true));
    } else {
      dispatch(actionCreators.goBackTop(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);