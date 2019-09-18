/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:52:14
 * @LastEditTime: 2019-09-03 16:56:08
 * @LastEditors: Please set LastEditors
 */
import styled from 'styled-components';

export const WriteWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-heigth: 895px;
    background: #eee;
`;

export const WriteLeft = styled.div`
    width: 17%;
    min-height: 890px;
    position: relative;
    overflow-y: auto;
    background-color: #404040;
    color: #f2f2f2;
    z-index: 100;
`;

export const A = styled.a`
    width: 86%;
    height: 24px;
    text-align: center;
    font-size: 16px;
    padding: 9px 0;
    color: #ec7259;
    border: 1px solid rgba(236,114,89,.8);
    border-radius: 20px;
    display: block;
    cursor: pointer;
    margin: 16px auto;
`;

export const Ul = styled.ul`
    .active {
        background-color: #666;
        border-left: 3px solid #ec7259;
        padding-left: 12px;
    }
`;

export const Li = styled.li`
    line-height: 40px;
    list-style: none;
    font-size: 15px;
    color: #f2f2f2;
    background-color: #404040;
    padding: 0 15px;
    cursor: pointer;
`;

export const LeftFooter = styled.div`
    line-height: 50px;
    font-size: 15px;
    padding-left: 15px;
    padding-bottom: 15px;
    color: #999;
    position: fixed;
    .set {
        margin-left: 15px;
        display: inline-block;
        cursor: pointer;
        position: fixed;
        left: 15px;
        bottom: 15px;
    }
    .set:hover {
        color: #fff;
    }
    .issue {
        float: right;
        margin-right: 15px;
        cursor: pointer;
        left: 170px;
        bottom: 15px;
        position: fixed;
    }
`;

export const WriteTitle = styled.div`
    overflow-y: scroll;
    height: 90%;
    min-height: 750px;
    width: 30%;
    position: absolute;
    top: 75px;
    left: 18%;
    border-right: 1px solid #d9d9d9;
`;

export const CreatArticle = styled.div`
    line-height: 20px;
    font-size: 15px;
    font-weight: 400;
    padding: 20px 0 20px 25px;
    cursor: pointer;
    color: #595959;
    i {
        padding-right: 3px;
        font-size: 18px;
        vertical-align: bottom;
        display: inline-block;
    }
`;

export const ArticleList = styled.div`
    position: relative;
    margin-bottom: 0;
    background-color: #efe9d9;
    border-top: 1px solid #d9d9d9;
    .articleIcon {
        position: absolute;
        top: 30px;
        left: 20px;
        width: 22px;
        height: 30px;
        background: url(http://cdn2.jianshu.io/writer/static/img/sprite.9d24217.png) no-repeat -50px -25px;
        background-size: 250px;
    }
    .list {
        position: relative;
        height: 90px;
        color: #595959;
        background-color: #fff;
        margin-bottom: 0;
        padding: 15px 10px 15px 60px;
        -webkit-box-shadow: 0 0 0 1px #d9d9d9;
        box-shadow: 0 0 0 1px #d9d9d9;
        border-left: 5px solid transparent;
        list-style: none;
        line-height: 60px;
        cursor: pointer;
    }
    .list:hover {
        background-color: #e6e6e6;
    }
    .title, .content {
        display: block;
        height: 30px;
        line-height: 30px;
        margin-right: 40px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title {
        font-size: 20px;
    }
`;

export const WriteRight = styled.div`
    width: 51.4%;
    height: 90%;
    min-height: 750px;
    position: absolute;
    top: 66.5px;
    right: 10px;
`;