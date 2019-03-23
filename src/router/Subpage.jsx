import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

//引入页面组件
import Home from '../containers/Home'
import Shop from '../containers/Shop'
import Life from '../containers/Lifeserver'
import Mine from '../containers/Mine'
import City from '../containers/City'
import NotFound from '../containers/NotFound'

export default class Subpage extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={ Home }></Route>
                    <Route path='/shop' component={ Shop }></Route>
                    <Route path='/life' component={ Life }></Route>
                    <Route path='/mine' component={ Mine }></Route>
                    {/* 选择城市页面添加至路由中 */}
                    <Route path='/city' component={ City }></Route>
                    <Route path='*' component={ NotFound }></Route>
                </Switch>
            </HashRouter>
        )
    }
}