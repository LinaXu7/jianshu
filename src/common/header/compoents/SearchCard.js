/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-11 14:31:31
 * @LastEditTime: 2019-09-24 10:52:08
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { Search, SearchItem, SearchInfo, SearchTitle } from '../style';
import { connect } from 'react-redux';
import { hotSearch, changHot } from '../../../request/api';
import * as actionCreators from '../../../store/actionCreators';

class SearchCard extends Component {
    render() {
        const { list, page } = this.props;
        return (
            <Search 
                onMouseEnter={this.props.onMouseEnter} 
                onMouseLeave={this.props.onMouseLeave}
            >
                <i className="before"></i>
                <SearchItem> 
                    <SearchTitle>
                        <i className="hotSearch">热门搜索</i>
                        <div className="change_hotName" onClick={() => this.props.changeHot(page)}>
                            <i className="iconfont refresh">&#xe600;</i>
                            <span>换一批</span>
                        </div>
                    </SearchTitle>
                    {
                        list.map((item) => {
                            return (
                                <SearchInfo key={item.get('id')}>
                                    <a href='#' className="hot_item">{item.get('hotName')}</a>
                                </SearchInfo>
                            )
                        })
                    }
                </SearchItem>
            </Search>    
        )
    }
    componentDidMount() {
        this.props.getHotList();
    }
}

const mapState = (state) => ({
    list: state.hotSearch.get('hotList'),
    page: state.hotSearch.get('hotPage')
});

const mapDispatch = (dispatch) => ({
    getHotList() {
        hotSearch().then((res) => {
            const reslut = res.data.data;
            dispatch(actionCreators.changeHotSearch(reslut));
        });
    },
    changeHot(page) {
        changHot(page).then((res) => {
            const reslut = res.data.data;
            dispatch(actionCreators.moreHotSearch(reslut, page + 1));
        });
    },
    onMouseEnter() {
        dispatch(actionCreators.SearchEnter());
    },
    onMouseLeave() {
        dispatch(actionCreators.SearchLeave());
    }
});

export default connect(mapState, mapDispatch)(SearchCard);