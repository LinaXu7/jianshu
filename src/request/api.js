/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 09:30:45
 * @LastEditTime: 2019-09-24 11:24:00
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';

//登录
export const userLoginStatus = (params) => {
  return axios.request({
      url: `/api/login.json?account=${params.account}&password=${params.password}`,
      method: 'get'
  })
}

//热门搜索
export const hotSearch = () => {
  return axios.request({
    url: `/api/hotSearch.json`,
    method: 'get'
  })
}

//换一批
export const changHot = (page) => {
  return axios.request({
    url: `/api/changeHot.json?page=${page}`,
    method: 'get'
  })
}

// 写文章
export const writeArticleList = () => {
  return axios.request({
    url: '/api/articleList.json',
    method: 'get'
  })
}

//首页
export const home = () => {
  return axios.request({
    url: '/api/home.json',
    method: 'get'
  })
}

//更多新闻列表
export const moreList = (page) => {
  return axios.request({
    url: `/api/moreList.json?page=${page}`,
    method: 'get'
  })
}

export const detail = (id) => {
  return axios.request({
    url: `/api/detail.json?id=${id}`,
    method: 'get'
  })
}