/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 16:43:08
 * @LastEditTime: 2019-09-19 09:49:22
 * @LastEditors: Please set LastEditors
 */
import * as constants from './constants';
import { fromJS } from 'immutable';

//搜索框聚焦时
export const SearchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

//搜索框失去焦点
export const SearchBlur = () => ({
    type: constants.SEARCH_BLUR
});

//详情页的信息
export const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
});

//首页信息
export const changeHomeData = (topicList, articleList, recommendList, writerList) => ({
    type: constants.CHANGE_HOME_DATA,
	topicList,
	articleList,
	recommendList,
	writerList
});

//更多新闻列表
export const moreList = (articleList, nextPage) => ({
    type: constants.MORE_LIST,
    articleList: fromJS(articleList),
    nextPage
});

//回到顶部
export const goBackTop = (show) => ({
    type: constants.GO_BACK_TOP,
    show
});

//校验用户登录
export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

//退出登录
export const logout = () => ({
    type: constants.LOGOUT,
    value: false
});

//个人的文章列表
export const changeWriteList = (list) => ({
    type: constants.WRITE_LIST,
    list: fromJS(list)
});

//更改编辑器的内容
export const changeEditors = (info) => ({
    type: constants.EDITOR_CONTENT,
    info: fromJS(info)
});

//热点搜索
export const changeHotSearch = (hotList) => ({
    type:constants.HOT_SEARCH,
    hotList: fromJS(hotList)
});

//换一批
export const moreHotSearch = (moreList, nextPage) => ({
    type: constants.MORE_HOT_LIST,
    moreList: fromJS(moreList),
    nextPage
});

//移入热门搜索
export const SearchEnter = () => ({
    type: constants.MOUSE_ENTER
});

// 热门搜索鼠标移出
export const SearchLeave = () => ({
    type: constants.MOUSE_LEAVE
});