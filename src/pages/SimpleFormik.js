import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';


const validateEmployee = empData => {

    console.log(empData);
    const errors = {};
  
    if (!empData.firstName) {

        errors.firstName = "first name is required";

    }

    return errors;

}

const validationSchema = yup.object().shape({

    firstName : yup.string().required("Please enter firstname").min(3,"Please Entert atlest 3 char"),
    password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
    terms: yup.bool().oneOf([true], 'Accept Terms is required'),

});

export default function SimpleFormik() {

    const m = ["cricket","workout","reading","music"];
  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        terms: false,
        hobbies: [],
        radio: '',
        color: '',
        password: "",
        confirmPassword:""
      }}

    //   validationSchema={validationSchema}
    validate={validateEmployee}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <ErrorMessage name='firstName' component="div"  className=''/>

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

<label htmlFor="email">terns and con</label>
        <Field
          id="terms"
          name="terms"
    
          type="checkbox"
        />

<ErrorMessage name='terms' component="div"  className=''/>

<label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
         
          type="password"
        />

<ErrorMessage name='password' component="div"  className=''/>
<label htmlFor="email">ConfirmPassword</label>
        <Field
          id="confirmPassword"
          name="confirmPassword"
         
          type="password"
        />

<ErrorMessage name='confirmPassword' component="div"  className=''/>

<div role="group" aria-labelledby="checkbox-group">

    {
        m.map((value)=> {

           return (<label>
            <Field type="checkbox" name="hobbies" value={value} />
            {value}
          </label>)


        })

    }
           

    </div>


    <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
        
          </div>

          <Field name="color" as="select">
   <option value="red">Red</option>
   <option value="green">Green</option>
   <option value="blue">Blue</option>
 </Field>




        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  )
}
