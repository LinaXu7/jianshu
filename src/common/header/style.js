/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-25 15:38:34
 * @LastEditTime: 2019-09-12 15:43:21
 * @LastEditors: Please set LastEditors
 */
import styled from 'styled-components';
import logoPic from '../../statics/img/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f7a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background-color: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 280px;
    height: 38px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 15px;
    border: none;
    outline: none;
    border: 1px solid #eee;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 345px;
    }
    &.slide-enter {
        width: 280px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 345px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 280px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    &.reg {
        color: #ec6149;
    }
    &.wrtting {
        font-size: 16px;
        color: #fff;
        background:#ec6149;
    }
`;
// visibility: hidden;
// opacity: 0;
export const Search = styled.div`
    width: 250px;
    height: 190px;
    position: absolute;
    left: 29.5%;
    top: 100%;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    .before {
        position: absolute;
        left: 20px;
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        top: -5px;
        z-index: -1;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
    }
`;

export const SearchItem = styled.div`
    padding: 20px 20px 10px;
`;

export const SearchInfo = styled.div`
    line-height: 20px;
    float: left;
    margin-top: 5px;
    .hot_item {
        margin: 4px 3px;
        display: inline-block;
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
`;

export const SearchTitle = styled.div`
    height: 20px;
    line-height: 20px;
    .hotSearch {
        float: left;
        font-size: 14px;
        color: #969696;
    }
    .refresh {
        background-color: transparent;
        padding-right: 2px;
    }
    .change_hotName {
        float: right;
        font-size: 13px;
        color: #969696;
        cursor: pointer;
    }
    .change_hotName:hover {
        color: #000;
    }
`;