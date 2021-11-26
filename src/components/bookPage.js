import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import parse from 'html-react-parser';


const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};


class Bookpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            imageLinks: {
                extraLarge: "",
                large: "",
                medium: "",
                small: "",
                smallThumbnail: "",
                thumbnail: "",
            }
        }
    }

    componentDidMount() {
        let url = 'https://www.googleapis.com/books/v1/volumes/' + this.props.params.id;

        fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        }).then(data => this.setState(data.volumeInfo)).catch(function (e) {
            console.log(e);
        });

    }

    render() {
        return (
            <div>
                <Card sx={{ minWidth: 275, paddingTop: 5 }}>
                    <CardHeader
                        title={this.state.title}
                        subheader={this.state.authors.join(', ')}
                    />
                    <CardMedia
                        component="img"
                        image={this.state.imageLinks.thumbnail}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {parse((this.state.description === undefined ? "" : this.state.description))}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ textDecoration: 'underline', paddingTop: 1 }}>
                            {this.state.categories}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/'><Button>Back to Search Page</Button></Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withRouter(Bookpage);