import React from 'react';
import { Card, Icon, Grid} from 'semantic-ui-react'
const BookUI = (props) => {
    console.log(props)
    return (
        props.book?
            <Card
                centered
                fluid
                header = {props.book.name}
                meta = {`reviewd by : ${props.reviewer.name} ${props.reviewer.lastname}`}
                description = {props.book.review}
                extra={
                    <Grid>
                            <Grid.Column width={3}>
                                <div style={{"fontSize":"16px"}}>
                                    <Icon name='book' /> {props.book.page}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div style={{"fontSize":"16px"}}>
                                    <Icon  name='dollar sign' /> {props.book.price}
                                </div>
                            </Grid.Column>
                        </Grid>
                }
            >
            </Card>
            :<div></div>
    );
};

export default BookUI;