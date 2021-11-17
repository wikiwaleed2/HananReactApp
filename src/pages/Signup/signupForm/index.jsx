import React, { useEffect, useState } from 'react';
import './index.less';
import PhoneInput from 'react-phone-input-2';
import Eye from '@/_assets/images/eye.svg';
import eyeSlash from '@/_assets/images/eye-slash-solid.svg';
import countries from '@/_assets/js/countries.json';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CountryCodeField } from '@/_shared/CountryCodeField/CountryCodeField';
import { accountService, alertService } from '@/_services';

function SignUpForm({ callback }) {

    const [showPassword, setShowPassword] = useState(false);
    const [countryCode, setCountrycode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // useEffect(() => {

    //     let nationalities = [];
    //     countries.map((c) => {
    //         nationalities.push({nationality: c.nationality})
    //         console.log("nationalites", JSON.stringify(nationalities));
    //     })

    // }, [])

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    function onSubmit(fields, { setSubmitting }) {
        alertService.clear();
        console.log("fields", fields);
        // accountService.create(fields).then((resp) => {
        //     console.log("resp", resp);
        //     history.push('/home');

        // }).catch(error => {
        //     setSubmitting(false);
        //     alertService.error("Email or password is incorrect.");
        // });
    }

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="formCont">
                            <div className="subscription-form">
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <span>First Name</span>
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="subscription-form">
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <span>Last Name</span>
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="subscription-form">
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <span>Email</span>
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="forminput">
                                <div className="subscription-form">
                                    <Field name="nationality" component="select" className={'form-control' + (errors.nationality && touched.nationality ? ' is-invalid' : '')} >
                                        <option>Select Nationality</option>
                                        {countries.length > 0 ?
                                            countries.map((c) => {
                                                return (
                                                    <option value={c.nationality} key={c.alpha_2_code}>{c.nationality}</option>
                                                )
                                            })

                                            :
                                            <option>Select Nationality1</option>
                                        }
                                    </Field>
                                    <span>Nationality</span>
                                    <ErrorMessage name="nationality" component="div" className="invalid-feedback" />
                                </div>
                                <div className="subscription-form">
                                    <Field name="country" component="select" className={'form-control' + (errors.country && touched.country ? ' is-invalid' : '')} >
                                        <option>Select Country</option>
                                        {countries.length > 0 ?
                                            countries.map((c) => {
                                                return (
                                                    <option value={c.en_short_name} key={c.en_short_name}>{c.en_short_name}</option>
                                                )
                                            })

                                            :
                                            <option>Select Country</option>
                                        }
                                    </Field>
                                    <span>Country of Residence</span>
                                    <ErrorMessage name="country" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="formSelect">
                                {/* <div> */}
                                    <Field component="div" name="gender" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}>
                                        <input
                                            type="radio"
                                            id="radioMale"
                                            // defaultChecked={values.gender === "male"}
                                            checked
                                            name="gender"
                                            value="male"
                                        />
                                        <span>Male</span>

                                        <input
                                            type="radio"
                                            id="radioFemale"
                                            // defaultChecked={values.gender === "female"}
                                            name="gender"
                                            value="female"
                                        />
                                        <span>Female</span>
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                    {/* <div>
                                        <Field name="gender" type="radio" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')} />
                                        <span>Male</span>
                                        <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                    </div>
                                    <div>
                                        <Field name="gender" type="radio" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')} />
                                        <span>Female</span>
                                        <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                    </div> */}
                                {/* </div> */}
                            </div>
                            <div className="subscription-form">
                                <Field name="password" type={showPassword ? "text" : "password"} className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <span>Password</span>
                                <img className="eyeImg" src={showPassword ? eyeSlash : Eye} alt="Eye" onClick={() => setShowPassword(!showPassword)} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="subscription-form">
                                <Field name="confirmPass" type={showPassword ? "text" : "password"} className={'form-control' + (errors.confirmPass && touched.confirmPass ? ' is-invalid' : '')} />
                                <span>Confirm Password</span>
                                <img className="eyeImg" src={showPassword ? eyeSlash : Eye} alt="Eye" onClick={() => setShowPassword(!showPassword)} />
                                <ErrorMessage name="confirmPass" component="div" className="invalid-feedback" />
                            </div>
                            <div className="subscription-form">
                                <CountryCodeField label="Country Code" callback={(data, type) => {
                                    if (type == "code") {
                                        setCountrycode(data);
                                    }
                                    else {
                                        setPhoneNumber(data);
                                    }
                                    console.log("country code", data, type);
                                }} />
                            </div>
                            <div className="subscription-form">
                                <Field name="invitationCode" type="text" className={'form-control' + (errors.invitationCode && touched.invitationCode ? ' is-invalid' : '')} />
                                <span>Invitation Code</span>
                                <ErrorMessage name="invitationCode" component="div" className="invalid-feedback" />
                            </div>
                            <div className="terms">
                                {/* <div> */}
                                <input type="radio" name="fav_language" value="CSS" />
                                <label className="m-0">I accept the Terms & Conditions. <a href="/">Read</a></label>
                                {/* </div> */}
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn btn-default signupBtn" >
                                {isSubmitting ? <span className="spinner-border spinner-border-sm mr-1"></span> : 'Sign Up'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export { SignUpForm };