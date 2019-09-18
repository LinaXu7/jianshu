/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 11:14:08
 * @LastEditTime: 2019-09-02 17:20:08
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { WriterWrapper, WriterItem, WriterInfo } from '../style';
import { connect } from 'react-redux';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <img className="header-pic" src={item.get('imgUrl')} alt=""/>
                                <WriterInfo>
                                    <span className="name">{item.get('name')}</span>
                                    <span className="desc">{item.get('desc')}</span>
                                </WriterInfo>
                                <i className="follow">+关注</i>
                            </WriterItem>
                        );
                    })
                }  
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('writerList')
});

export default connect(mapState)(Writer);