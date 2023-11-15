import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Post, apiInstance } from '../config/apimethod';



const Login = () => {

    const [model, setmodel] = useState<any>({})
    const endpoint = "/auth/login"

    const navigate = useNavigate();

    const loginUser = () => {
        console.log(model);
        Post(endpoint, model)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("authToken", res.data?.data?.token);
          navigate('/')
        })
        .catch((err) => {
          console.log(err.message);
        });

    }
 
    const signup = () => {
        navigate('../Signup')
    }



    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <MDBInput onChange={(e: any) => setmodel({ ...model, userName: e.target.value })}
                                wrapperClass='mb-4 w-100' label='User Name' id='formControlLg' type='userName' size="lg" />

                            <MDBInput onChange={(e: any) => setmodel({ ...model, password: e.target.value })}
                                wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                            <MDBBtn size='lg' onClick={loginUser}>
                                Login
                            </MDBBtn>

                            <hr className="my-4" />
                            <p>Don't Have a Account <Link to='/signup'>Click Here</Link></p>


                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login
