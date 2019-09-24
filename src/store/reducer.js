/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-30 11:25:40
 * @LastEditTime: 2019-09-17 12:26:07
 * @LastEditors: Please set LastEditors
 */
import { combineReducers } from 'redux';
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    login: false,
    topicList: [],     
    articleList: [],     //首页文章列表
    recommendList: [],   
    writerList: [],      //首页作者列表
    articlePage: 1,
    showScroll: false,     //回到顶部
    title: '',
    content: '',
    writeList: [],           //写文章下面的列表
    editContent: '',
    hotList: [],             //热门搜索列表
    hotPage: 1,
    isEnter: false
});

// header搜索聚焦动画和热点搜索
const searchFocus = (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        default:
            return state;
    }
}

//登录状态
const login = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN: 
            return state.set('login', action.value);
        case constants.LOGOUT: 
            return state.set('login', action.value);
        default:
            return state;
    }
}

//首页的四个主要内容
const home = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge ({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList), 
                writerList: fromJS(action.writerList)
            });
        case constants.MORE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.articleList),
                'articlePage': action.nextPage
            });
        case constants.GO_BACK_TOP:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
}

//新闻列表的详情
const detail = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL: 
            return state.merge({
                title: action.title,
                content: action.content
            });
        default:
            return state;
    }
}

//写文章部分
const write = (state = defaultState, action) => {
    switch(action.type) {
        case constants.WRITE_LIST: 
          return state.set('writeList', action.list);
        case constants.EDITOR_CONTENT:
            return state.set('editContent', action.info);
        default:
          return state;
    }
}

const hotSearch = (state = defaultState, action) => {
    switch(action.type) {
        case constants.HOT_SEARCH:
            return state.set('hotList', action.hotList);
        case constants.MORE_HOT_LIST:
            return state.merge({
                hotList: action.moreList,
                hotPage: action.nextPage
            });
        case constants.MOUSE_ENTER:
            return state.set('isEnter', true);
        case constants.MOUSE_LEAVE:
            return state.set('isEnter', false);
        default:
            return state;
    }
}

export default combineReducers({
    searchFocus,
    home,
    detail,
    login,
    write,
    hotSearch
});
