import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

function ColorfulText({children}) {
    return <span style={{color: 'grey'}}>{children}</span>;
  }

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{
        getMovieData(movieId);
        console.log(getMovieData(movieId));
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;
        // console.log(rev);

        try
        {


            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});
            console.log(response);
            console.log('Current reviews state:', reviews);
            const updatedReviews = [...reviews || [], {body:rev.value}];
    
            rev.value = '';
    
            setReviews(updatedReviews);
            console.log('Updated reviews state:', updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
        
    }

  return (
    <Container>
        <Row>
            <Col><h3><ColorfulText>Reviews</ColorfulText></h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                
                
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = <ColorfulText>"Write a Review?"</ColorfulText> />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                
                
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <div>
                                    <Col> <ColorfulText>"Created on: {r.created}</ColorfulText ></Col>
                                </div>
                                <div>
                                    <Col> <ColorfulText>{r.body}</ColorfulText ></Col>
                                </div>
                                <Row>
                                    <Col>
                                    <hr
        style={{
          background: 'grey',
          color: 'white',
          borderColor: 'white',
          height: '1px',
        }}
      />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews