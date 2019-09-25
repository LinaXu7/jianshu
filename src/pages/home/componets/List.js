/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 11:13:58
 * @LastEditTime: 2019-09-02 17:20:28
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { ListInfo, ListItem, LoadMore } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { moreList } from '../../../request/api';
import * as actionCreators from '../../../store/actionCreators';

class List extends Component {
    render() {
        const { list, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem key={item.get('id')}>
                                    <img className="pic" src={item.get('imgUrl')} alt=""></img>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="info">{item.get('info')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link> 
                        );
                    })
                }
                <LoadMore onClick={() => this.props.getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('articleList'),
    page: state.home.get('articlePage')
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        moreList(page).then((res) => {
            const reslut = res.data;
            dispatch(actionCreators.moreList(reslut.articleList, page + 1));
        })
    }
});

export default connect(mapState, mapDispatch)(List);