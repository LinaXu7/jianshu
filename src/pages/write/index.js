/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 14:48:21
 * @LastEditTime: 2019-09-19 17:51:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import { 
	WriteWrapper,
	WriteLeft,
	A,
	Ul,
	Li,
	LeftFooter,
	WriteTitle,
	CreatArticle,
	ArticleList,
	WriteRight
} from './style';
import * as actionCreators   from '../../store/actionCreators';
import axios from 'axios';

class Write extends Component {
	mdParser = null
	constructor(props) {
		super(props);
		this.mdParser = new MarkdownIt(/* Markdown-it options */);
	}
	
	render() {
		const { loginStatus, list, editContent } = this.props;
		if(loginStatus) {
			return (
				<WriteWrapper>
					<WriteLeft>
						<A>回首页</A>
						<Ul>
							<Li className="active">日记本</Li>
							<Li>随笔</Li>
						</Ul>
						<LeftFooter>
							<i className="set">设置</i>
							<i className="issue">遇到问题</i>
						</LeftFooter>
					</WriteLeft>
					<WriteTitle>
						<CreatArticle>
							<i className="iconfont">&#xe659;</i>
							<span>新建文章</span>
						</CreatArticle>
						<ArticleList>
							{
								list.map((item) => {
									return (
										<Li className="list" key={item.get('id')} onClick={() => {this.props.handleListClick(item.get('info'))}}>
											<i className="articleIcon"></i>
											<span className="title">{item.get('title')}</span>
											<span className="content">{item.get('content')}</span>
										</Li>
									)
								})
							}
						</ArticleList>
					</WriteTitle>
					<WriteRight>
						<MdEditor
							value={editContent}
							renderHTML={(text) => this.mdParser.render(text)}
							onChange={this.handleEditorChange} 
						/>
					</WriteRight>
				</WriteWrapper>
			)
		}else {
			return <Redirect to='/login'/>
		} 
	}

	componentDidMount() {
		this.props.ArList();
	}
}

const mapState = (state) => ({
	loginStatus: state.login.get('login'),
	list: state.write.get('writeList'),
	editContent: state.write.get('editContent')
});

const mapDispatch = (dispatch) => ({
	ArList() {
		axios.get('/api/articleList.json').then((res) => {
			const reslut = res.data.list;
			dispatch(actionCreators.changeWriteList(reslut));
		});
	},
	handleListClick(info) {
		dispatch(actionCreators.changeEditors(info));
	}
});

export default connect(mapState, mapDispatch)(Write);