import React, { useState } from 'react'
import { ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required.')
    .min(3, 'Minimum 3 characters required')
    .max(23,"Max 23 characters required")
    
 
});
export default function MyForm() {




 

    const formik = useFormik(
        {
        initialValues: {
          firstName: '',
          lastName: '',
          emailId: '',
          mobileNumber: "",
          gender: '',
          address: ''
        },
        onSubmit: values => {
          alert(
            'Registration Form Submitted \n ' + JSON.stringify(values, null, 2)
          );
          formik.resetForm();
        },
        validationSchema: validationSchema
      });
    
      const renderErrorMessage = field => {
        return (
          formik.touched[field] && (
            <div class="text-error">{formik.errors[field]}</div>
          )
        );
      };
    
      console.log(formik);
      return (
        <div class="root">
          <div class="form">
            <h1> Registration </h1>
            <form onSubmit={formik.handleSubmit}>
              <div class="form-group">
                <label> First Name </label>
                <div>
                  <input type="text"  
                  {...formik.getFieldProps('firstName')} style={} />
                  {renderErrorMessage('firstName')}
                  
                </div>
              </div>
             
              <div>
                <button type="submit" class="btn-primary">
                  Submit
                </button>
                <button
                  type="reset"
                  class="btn-secondary"
                  onClick={formik.resetForm}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div class="form-state">
            <h4>Form State</h4>
            <h5>Dirty: {JSON.stringify(formik.dirty)}</h5>
            <h5>isValid: {JSON.stringify(formik.isValid)}</h5>
            <h5>values:</h5>
            <code>
              <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            </code>
            <h5>Errors:</h5>
            <code>
              <pre>{JSON.stringify(formik.errors,null,)}</pre>
            </code>
            <h5>Touched:</h5>
            
          </div>
        </div>
      );
}