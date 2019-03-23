import React from 'react'
import CityNav from '../../components/CityNav'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/Citylist'

//引入redux组件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCity from '../action'
import { withRouter } from 'react-router-dom'

class City extends React.Component{
    constructor(){
        super();
        this.state = {
            city: ''
        }
    }
    changeHandler(data){
        /* // console.log(data);
        this.setState({
            city: data
        })
        console.log(this.state.city); */
        //更改redux状态中的cityName
        this.props.ActionCity.updateCity({
            cityName: data
        })
    }
    render(){
        return(
            <div>
                <CityNav title='选择城市'history={this.props.history} />
                {/* <CurrentCity title={this.state.city} /> */}
                <CurrentCity title={this.props.changeCity.cityName} />
                <CityList history={this.props.history} customEvent={this.changeHandler.bind(this)} />
            </div>
        )
    }
}

//----------redux---------
function mapStateToProps(state) {
    return {
        changeCity: state.changeCity
    }
}
//写入操作
function mapDispatchToProps(dispatch) {
    return {
        ActionCity: bindActionCreators(ActionCity, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))


