import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
	constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish){
    	return(
    		<div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
    	);
    };

    renderComments(comments){
    	const comment = comments.map((comment) => {
            return (
            	<span>
	            	<p>{comment.comment}</p>
	            	<p>-- {comment.author}, {comment.date} </p>
            	</span>
            );
        });
        return(
        	<div className="col-12 col-md-5 m-1 text-left">
        		<h4>Comments</h4>
        		<ul className="list-unstyled">
            		{comment}
            	</ul>
            </div>
        );
    }

    render() {
        if (this.props.dish != null)
            return(
            	<div className="row">
	            	{this.renderDish(this.props.dish)}
	                {this.renderComments(this.props.dish.comments)}
	            </div>
            );
        else
            return(
                <div></div>
            );
    }
}

export default Dishdetail;