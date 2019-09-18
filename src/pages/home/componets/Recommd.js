import React, { Component } from 'react';
import { RecommdWrapper, RecommdItem } from '../style';
import { connect } from 'react-redux';

class Recommd extends Component {
    render() {
        return (
            <RecommdWrapper>
                {
                    this.props.list.map((item) => {
                        return <RecommdItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                } 
            </RecommdWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('recommendList')
});

export default connect(mapState, null)(Recommd);