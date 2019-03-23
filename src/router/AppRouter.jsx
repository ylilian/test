import React from 'react'
import { HashRouter } from 'react-router-dom'
import Layout from '../containers/layout'
import Subpage from './Subpage'

export default class AppRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <Layout>
                    <Subpage />
                </Layout>
            </HashRouter>
        )
    }
}