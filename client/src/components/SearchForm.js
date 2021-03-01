import React, { useState } from 'react';
import defaultImage from '../assets/image.jpg';
import Output from './Output';
import axios from 'axios';
import {
    Row,
    Col,
    Form,
    InputGroup,
    Button
} from 'react-bootstrap';

/* I had to name this component as SearchForm as opposed to "Form" 
because that name was already being used by the React Bootstrap 
library located in the return statement below*/

export default function SearchForm(){
    //The first state object holds the users input
    //The second holds the payload sent back from the server
    let [id, setId] = useState();
    let [productPayload, setProductPayload] = useState()

    //This function updates the users input in real-time
    function handleChange(event){
        id = event.target.value;
        setId(id);
    }

    /*This function handles each submission and 
    if the submission is valid will send a post request to
    the server */
    function handleSubmit(event){
        event.preventDefault();

        if(isNaN(id)){
            alert("Please enter a number!")
        } else {
            axios.post('http://localhost:3001/product/',{id})
            .then((res)=>{
                productPayload = res.data;
                setProductPayload(productPayload)
                console.log(productPayload)
            })
            .catch((err) =>{
                console.log(err)
                alert(err)
            })
        }
    }

    /*Upon a succuessful post request a payload object will initialize
    If this object exist a new view with the correct attributes will appear.
    These attributes will appear inside the Output component and are passed through 
    the productPayload.image, productPayload.title, and productPayload.link properties. 
    And if the productPayLoad object has not be initialized, like when the page first loads
    the default image and blank title will appear.
    */
    if(productPayload){
        return(
            <>
            <Row className="mt-5 mb-5">
                <Col lg={{ span: 8, offset: 2}}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-lg">🔍</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Search by product id#" className="font-italic" onChange={handleChange} value={id || ''} />
                                <InputGroup.Append id="inputGroup-sizing-lg">
                                    <Button type="submit" variant="outline-primary" className="text-uppercase">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Output image={productPayload.image} title={productPayload.title} link={productPayload.link}/>
        </> 
        )
    } else {
        return(
            <>
            <Row className="mt-5 mb-5">
                <Col lg={{ span: 8, offset: 2}}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-lg">🔍</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Search by product id#" className="font-italic" onChange={handleChange} value={id || ''} />
                                <InputGroup.Append id="inputGroup-sizing-lg">
                                    <Button type="submit" variant="outline-primary" className="text-uppercase">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                    <Col className="text-center">
                            <img src={defaultImage} alt="img" />
                    </Col>
                    <Col>
                        <Row>
                            <h1>Title</h1>
                        </Row>
                        <Row>
                            <span>Link</span>
                        </Row>
                    </Col>
            </Row>
            </>
        )
    }
}