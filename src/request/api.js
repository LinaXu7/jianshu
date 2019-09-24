/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 09:30:45
 * @LastEditTime: 2019-09-24 10:53:43
 * @LastEditors: Please set LastEditors
 */
//import axios from '../axios/axios.reques';
import axios from 'axios';

export const userLoginStatus = (params) => {
  return axios.request({
      url: `/api/login.json?account=${params.account}&password=${params.password}`,
      method: 'get'
  })
}

export const hotSearch = () => {
  return axios.request({
    url: `/api/hotSearch.json`,
    method: 'get'
  })
}

export const changHot = (page) => {
  return axios.request({
    url: `/api/changeHot.json?page=${page}`,
    method: 'get'
  })
}