import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik';
export default function Student() {

    const initialValues = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
      };

      const handleSubmit = (e)=> {

        console.log(e);
      }


  return (
    <Formik
    initialValues={initialValues}

    onSubmit={handleSubmit}
    >

<Form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <Field name="fullname" type="text"
                     className="form-control" />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="username"> Username </label>
                    <Field name="username" type="text" className="form-control" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group form-check">
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <button type="submit" 
                    className="btn btn-primary">
                      Register
                    </button>
                    <button
                      type="button"
                  
                      className="btn btn-warning float-right"
                    >
                      Reset
                    </button>
                  </div>
                </Form>


    </Formik>
  )
}
