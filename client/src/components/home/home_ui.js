import React from 'react'
import { List, Segment, Rating, Grid, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
function HomeUI(props) {
    console.log(props)
    const renderBooks = (items)=>(
        items.list?
        items.list.map((item,i)=>(
            <List.Item key={i}>
                <Link to={`book/${item._id}`}>
                    <List.Content>
                        <List.Header style={{
                                            'fontSize':'19px',
                                            'fontWeight': '500'
                                        }}
                        >
                            {item.name}
                        </List.Header>
                        <div style={{
                            'fontSize':'15px',
                             'color':'gray',
                             'fontWeight':'300',
                             'padding':'9px'
                            }}
                        >
                            Author : {item.author}
                        </div>
                    </List.Content>
                    <List.Content >
                        <Grid>
                            <Grid.Column width={5}>
                                <div style={{'color':'#343434',
                                            "fontSize":"16px"
                                        }}
                                >
                                    <Icon name='book' /> {item.page}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div style={{'color':'green',
                                            "fontSize":"16px"
                                        }}
                                >
                                    <Icon  name='dollar sign' /> {item.price}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Rating defaultRating={item.rating} maxRating={5} disabled />
                            </Grid.Column>
                        </Grid>
                    </List.Content>
                </Link>
            </List.Item>
        ))
        :null
    )
    return (
        <Segment style={{'margin':'auto','width':'500px'}}>
            <List divided animated relaxed>
                {renderBooks(props)}
            </List> 
            <Button fluid onClick={()=>props.loadMore()}>
                Load More
            </Button>
        </Segment>
       
    )
}

export default HomeUI
