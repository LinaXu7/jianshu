import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Topic from './componets/Topic';
import List from './componets/List';
import Recommd from './componets/Recommd';
import Writer from './componets/Writer';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends Component {
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
      </HomeWrapper>
    )
	}
	
	componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		axios.get('/api/home.json').then((res) => {
			const result = res.data;
			const action = {
					type: 'change_home_data',
					topicList: result.topicList,
					articleList: result.articleList,
					recommendList: result.recommendList,
					writerList: result.writerList
			}
			dispatch(action);
		})
	}
});

export default connect(null, mapDispatch)(Home);