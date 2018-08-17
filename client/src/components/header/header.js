import React, { Component } from 'react'
import { Button,Grid } from 'semantic-ui-react'
import SideNavComp from './sidenav'

export default class HeaderComp extends Component {
    render() {
        return (
            <div style={{'border':'1px solid #e8e8e8','backgroundColor':'#fcfcfc'}}>
                <Grid verticalAlign='middle'>
                    <Grid.Column textAlign='left' width={3}>
                        <SideNavComp/> 
                    </Grid.Column>
                    <Grid.Column  
                        textAlign='center' 
                        width={9}
                        style={{'fontSize':'16px','fontWeight':'500'}}
                    >
                        The book Review  
                    </Grid.Column>
                </Grid>
            </div>
            
        )
    }
}
