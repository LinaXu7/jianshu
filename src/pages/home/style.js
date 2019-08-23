import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 300px;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px;
    overflow: hidden;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    font-size: 14px;
    color: #000;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
        margin-top: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        display: inherit;
        font-size: 18px;
        font-weight: bold;
    }
    .info {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommdWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommdItem = styled.div`
    width: 280px;
    min-height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 280px;
    margin-top: 20px;
`;

export const WriterItem = styled.div`
    width: 280px;
    height: 47px;
    margin-top: 15px;
    .header-pic {
        width: 48px;
        height: 48px;
        margin-right: 20px;
        display: block;
        float: left;
        border-radius: 50%;
        border: 1px solid #ddd;
    }
    .follow {
        float: right;
        margin-top: -42px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`;

export const WriterInfo = styled.div`
    width: 220px;
    height: 48px;
    text-align: left;
    list-style: none;
    margin-left: 15px;
    .name {
        display: inherit;
        font-size: 14px;
        line-height: 23px;
        padding-top: 5px;
    }
    .desc {
        margin-top: 2px;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    text-align: center;
    background: #dcdcdc;
    color: #fff;
    border-radius: 20px;
    couser: pointer;
`;