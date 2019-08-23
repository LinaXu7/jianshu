import React, { Component } from 'react';
import { ListInfo, ListItem, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class List extends Component {
    render() {
        const { list, getMoreList } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className="pic" src={item.get('imgUrl')} alt=""></img>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="info">{item.get('info')}</p>
                                </ListInfo>
                            </ListItem>
                        );
                    })
                }
                <LoadMore onClick={getMoreList}>更多文字</LoadMore>
            </div> 
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('articleList')
});

const mapDispatch = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreators.getMoreList())
    }
});

export default connect(mapState, mapDispatch)(List);