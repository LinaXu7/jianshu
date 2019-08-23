import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
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
        <Logo href='/'></Logo>
        <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem> 
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
              <i className={props.focused ? 'iconfont focused': 'iconfont'}>&#xe60d;</i>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className='wrtting'>
              <i className="iconfont">&#xe62d;</i>
              写文章
            </Button>
            <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.SearchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.SearchBlur());
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);