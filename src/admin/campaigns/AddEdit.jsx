import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { alertService } from '@/_services';
import { campaignsService } from '@/_services/campaigns.service';
import moment from 'moment';

function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;

    const initialValues = {
        name: '',
        title: '',
        description: '',
        highlights: '',
        code: '',
        type: '',
        status: '',
        totalCoupons: 0,
        soldCoupons: 0,
        perEntryCoupons: 0,
        couponPrice: 0,
        startDate: '2020-06-24 22:57:36',
        drawDate: '2020-06-24 22:57:36',
        createdDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        updatedDate: null
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        title: Yup.string()
            .required('Title is required'),
        description: Yup.string()
            .required('Description is required'),
        highlights: Yup.string()
            .required('Highlights is required'),
        code: Yup.string()
            .required('Code is required'),
        type: Yup.string()
            .required('type is required'),
        status: Yup.string()
            .required('Status is required'),
        totalCoupons: Yup.number()
            .required('Total Coupons is required'),
        soldCoupons: Yup.number()
            .required('Sold Coupons is required'),
        perEntryCoupons: Yup.number()
            .required('Per Entry Coupons is required'),
        couponPrice: Yup.number()
            .required('Coupon Price is required'),
        startDate: Yup.string()
            .required('Start Date is required'),
        drawDate: Yup.string()
            .required('Draw Date is required'),

    });

    function onSubmit(fields, { setStatus, setSubmitting }) {

        setStatus();
        if (isAddMode) {
            createCampaign(fields, setSubmitting);
        } else {
            updateCampaign(id, fields, setSubmitting);
        }
    }

    function createCampaign(fields, setSubmitting) {
        console.log("fields", fields);
        console.log("setSubmitting", setSubmitting);
        campaignsService.create(fields)
            .then(() => {
                alertService.success('Campaign added successfully', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    function updateCampaign(id, fields, setSubmitting) {
        campaignsService.update(id, fields)
            .then(() => {
                alertService.success('Update successful', { keepAfterRouteChange: true });
                history.push('..');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {
                useEffect(() => {
                    if (!isAddMode) {
                        // get user and set form fields
                        let obj = {
                            "limit": 5,
                            "offset": 0,
                            "order": [["id", "ASC"], ["name", "DESC"]],
                            "where": {"id": id }
                        }
                        campaignsService.getById(obj).then(campaign => {
                            console.log("campaign",campaign);
                            const fields = ['name', 'title', 'description', 'highlights', 'code', 'type', 'status', 'totalCoupons', 'soldCoupons', 'perEntryCoupons', 'couponPrice', 'startDate', 'drawDate'];
                            fields.forEach(field => setFieldValue(field, campaign.rows[0][field], false));
                        });
                    }
                }, []);

                return (
                    <Form>
                        <h1>{isAddMode ? 'Add Campaign' : 'Edit Campaign'}</h1>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>Name</label>
                                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>Title</label>
                                <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-12">
                                <label>Description</label>
                                <Field name="description" type="text" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                                <ErrorMessage name="description" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-12">
                                <label>Highlights</label>
                                <Field name="highlights" type="text" className={'form-control' + (errors.highlights && touched.highlights ? ' is-invalid' : '')} />
                                <ErrorMessage name="highlights" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-4">
                                <label>Code</label>
                                <Field name="code" type="text" className={'form-control' + (errors.code && touched.code ? ' is-invalid' : '')} />
                                <ErrorMessage name="code" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-4">
                                <label>Type</label>
                                <Field name="type" type="text" className={'form-control' + (errors.type && touched.type ? ' is-invalid' : '')} />
                                <ErrorMessage name="type" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-4">
                                <label>Status</label>
                                <Field name="status" type="text" className={'form-control' + (errors.status && touched.status ? ' is-invalid' : '')} />
                                <ErrorMessage name="status" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-3">
                                <label>Total Coupons</label>
                                <Field name="totalCoupons" type="text" className={'form-control' + (errors.totalCoupons && touched.totalCoupons ? ' is-invalid' : '')} />
                                <ErrorMessage name="totalCoupons" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-3">
                                <label>Sold Coupons</label>
                                <Field name="soldCoupons" type="text" className={'form-control' + (errors.soldCoupons && touched.soldCoupons ? ' is-invalid' : '')} />
                                <ErrorMessage name="soldCoupons" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-3">
                                <label>Per Entry Coupons</label>
                                <Field name="perEntryCoupons" type="text" className={'form-control' + (errors.perEntryCoupons && touched.perEntryCoupons ? ' is-invalid' : '')} />
                                <ErrorMessage name="perEntryCoupons" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-3">
                                <label>Coupon Price</label>
                                <Field name="couponPrice" type="text" className={'form-control' + (errors.couponPrice && touched.couponPrice ? ' is-invalid' : '')} />
                                <ErrorMessage name="couponPrice" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>Start Date</label>
                                <Field name="startDate" type="text" className={'form-control' + (errors.startDate && touched.startDate ? ' is-invalid' : '')} />
                                <ErrorMessage name="startDate" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>Draw Date</label>
                                <Field name="drawDate" type="text" className={'form-control' + (errors.drawDate && touched.drawDate ? ' is-invalid' : '')} />
                                <ErrorMessage name="drawDate" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Save
                            </button>
                            <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

export { AddEdit };