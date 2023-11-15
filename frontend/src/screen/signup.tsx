import React from 'react'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Post, apiInstance, baseUrl } from '../config/apimethod';





const Signup = () => {

    const [model, setmodel] = useState<any>({})

    const navigate = useNavigate()

    const signupuser = () => {
        console.log(model);
        console.log("Base URL:", baseUrl);
        apiInstance.post("/auth/signup", model)
          .then((res) => {
            console.log("Response from server:", res.data);
            // navigate('/');
            // localStorage.setItem("authToken", res.data?.data?.token);
          })
          .catch((err) => {
            console.error("Error:", err.message);
          });
        
        
    }

    const login = () => {
        navigate('../login')
    }


    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign Up</h2>


                            <MDBInput onChange={(e: any) => setmodel({ ...model, userName: e.target.value })}
                                wrapperClass='mb-4 w-100' label='User Name' id='formControlLg' type='userName' size="lg" />

                    
                            <MDBInput onChange={(e: any) => setmodel({ ...model, password: e.target.value })}
                                wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                    
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                            <MDBBtn size='lg' onClick={()=>signupuser()}>
                                Signup
                            </MDBBtn>

                            <hr className="my-4" />
                            
                            <p>Already Have an Account? <Link to='/login'>Click Here</Link></p>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Signup
