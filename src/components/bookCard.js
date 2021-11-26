import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


export const BookCard = props => {
    let link = '/books/' + props.value.key;
    return (
        <div>
            <Card sx={{ marginBottom: 2 }}>
                {props.value.image !== '' && <CardMedia
                    component="img"
                    height="140"
                    image={props.value.image}
                />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link to={link}>{props.value.title}</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.value.authors}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default BookCard;