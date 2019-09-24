/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-25 15:32:37
 * @LastEditTime: 2019-09-18 17:37:46
 * @LastEditors: Please set LastEditors
 */

import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import SearchCard from './compoents/SearchCard';
import * as actionCreators   from '../../store/actionCreators';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <Logo></Logo>
      </Link>  
      <Nav>
      <Link to='/'>
        <NavItem className='left active'>首页</NavItem>
      </Link>            
          <NavItem className='left'>下载App</NavItem>
          {props.login ? <NavItem onClick={props.logout} className='right'>退出</NavItem> :
              <Link to='/login'><NavItem className='right'>登录</NavItem> </Link>
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                className={props.focused ? 'focused': ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'iconfont search_t focused': 'iconfont'}>&#xe629;</i>
          </SearchWrapper>
      </Nav>
      <Addition>
        <Link to='/write'>
          <Button className='wrtting'>
            <i className="iconfont">&#xe62d;</i>
            写文章
          </Button>
        </Link>
          <Button className='reg'>注册</Button>
      </Addition>
      {
        props.focused || props.isEnter ? <SearchCard /> : ''
      }
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.searchFocus.get('focused'),
    login: state.login.get('login'),
    isEnter: state.hotSearch.get('isEnter')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.SearchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.SearchBlur());
    },
    logout() {
      dispatch(actionCreators.logout());
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);