import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("Please enter your First Name!"),
    email: Yup.string().email().required("Please enter your Email!"),
    password: Yup.string().min(5).max(30).required("Please enter your First Name!"),

});