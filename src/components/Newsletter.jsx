import { useFormik } from "formik";
import * as Yup from "yup";
const Newsletter = () => {
	const signUpSchema = Yup.object({
		email: Yup.string().email().required("Please enter your Email!"),
	});
	const form_field = {
		email: "",
	};
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: form_field,
			validationSchema: signUpSchema,
			onSubmit: (values, action) => {
				console.log(values);
				action.resetForm();
			},
		});
	return (
		<>
			<div className="col-lg-4 col-md-6">
				<div
					className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-5"
					style={{ background: "#111111" }}>
					<h3 className="text-white mb-4">Newsletter</h3>
					<h6 className="text-uppercase text-light mb-2">
						Subscribe Our Newsletter
					</h6>
					<p className="small text-secondary">
						Amet justo diam dolor rebum lorem sit stet sea justo kasd
					</p>
					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<input
								type="text"
								className="form-control border-white p-3"
								placeholder="Your Email"
								name="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<button type="submit" className="btn btn-primary">
								Sign Up
							</button>
						</div>
						<span className="text-danger">
							{errors.email && touched.email ? errors.email : null}
						</span>
					</form>
				</div>
			</div>
		</>
	);
};

export default Newsletter;
