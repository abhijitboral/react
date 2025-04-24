import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
const SignupForm = () => {

    //form handel using useState hook.
    /* const [validated, setValidated] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''

    });
    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValidated((prev) => {
            return {...prev, [name]: value};
        });
        console.log(validated);
        
    }; */

    // form handle using formik and form validation using yup.
    const signUpSchema = Yup.object({
        firstName: Yup.string().min(2).max(30).required("Please enter your First Name!"),
        lastName: Yup.string().min(2).max(30).required("Please enter your Last Name!"),
        email: Yup.string().email().required("Please enter your Email!"),
        phone: Yup.number().required("Please enter your Phone Number!"),
        password: Yup.string().min(5).max(30).required("Please enter your Password!"),
        confirm_password: Yup.string()
                        .required('Confirm password is required')
                        .test('passwords-match', 'Passwords must match', function (value) {
                        return this.parent.password === value;
                        }),
    });
    const form_field = {
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        password: '',
        confirm_password:''
    };
    const { values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: form_field,
        validationSchema:signUpSchema,
        onSubmit: (values,action) => {
            console.log(values);
            action.resetForm();
        },
    });
    return (
        <>
            <div>
                <h3 className="fw-semibold" style={{ textAlign: "center" }}>Signup Form</h3>
                <div className="col-md-6">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="inputFirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                            <span className="text-danger">
                                {errors.firstName && touched.firstName ? errors.firstName : null}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                            <span className="text-danger">
                                {errors.lastName && touched.lastName ? errors.lastName : null}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            <span className="text-danger">
                                {errors.email && touched.email ? errors.email : null}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="inputPhone" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                            <span className="text-danger">
                                {errors.phone && touched.phone ? errors.phone : null}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            <span className="text-danger">
                                {errors.password && touched.password ? errors.password : null}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="inputConfirmPassword" name="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                            <span className="text-danger">
                                {errors.confirm_password && touched.confirm_password ? errors.confirm_password : null}
                            </span>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupForm;