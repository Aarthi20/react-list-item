import {Component} from 'react';
import './index.css';

class ReviewComponent extends Component {

    state = {activeReviewIndex:0}

    getReview = reviewsList =>{
        const {activeReviewIndex} = this.state;
        const {imgUrl,name, companyName, description} = reviewsList[activeReviewIndex];

        return(
        <div>
            <div className="review-container">
                <h1 className="heading">Reviews</h1>
                <img src={imgUrl} alt={name} className="person-img"/>
                <p className="name">{name}</p>
                <p className="company-name">{companyName}</p>
                <p className="description">{description}</p>
            </div>
        </div>
        )
    }

    onLeftArrow = () => {
        const {activeReviewIndex} = this.state;
        if(activeReviewIndex>0){
            this.setState(prevState => ({
                activeReviewIndex: prevState.activeReviewIndex - 1
            }))
        }
    }

    onRightArrow = () => {
        const {activeReviewIndex} = this.state;
        const {reviewsList} = this.props;
        if(activeReviewIndex < reviewsList.length-1){
            this.setState(prevState => ({
                activeReviewIndex: prevState.activeReviewIndex + 1
            }))
        }
    }

    render(){
        const {reviewsList} = this.props;

        return(
            <div className = "container">
                <button className="button" data-testid = "leftArrow"
                onClick = {this.onLeftArrow}
                type="button">
                    <img
                    src="https://tinyurl.com/mpsxc76e"
                    alt="left arrow"
                    className="img"
                    />
                </button>
                {this.getReview(reviewsList)}
                <button className="button" data-testid = "rightArrow"
                onClick = {this.onRightArrow} type="button">
                    <img
                        src="https://tinyurl.com/5n7zxvs8"
                        alt="right arrow"
                        className="img"
                    />
                </button>
            </div>
            
        )
    }
    
}
export default ReviewComponent;