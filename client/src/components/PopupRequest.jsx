import React from 'react';
import './Popup.css';
import FlexBetween from './FlexBetween';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


import Dropzone from "react-dropzone";

const requestSchema = yup.object().shape({
    donorFullName: yup.string().required("required"),
    donorLocation: yup.string().required("required"),
    donorEmail: yup.string().email("invalid email").required("required"),
    donationCategory: yup.string().required("required"),
    donationType: yup.string().required("required"),
    donationDescription: yup.string().required("required"),
    pickupRequired: yup.string().required("required"),
    pickupDate: yup.string().required("required"),

});

const donateSchema = yup.object().shape({
    donorFullName: yup.string().required("required"),
    donorLocation: yup.string().required("required"),
    donorEmail: yup.string().email("invalid email").required("required"),
    donationCategory: yup.string().required("required"),
    donationType: yup.string().required("required"),
    donationDescription: yup.string().required("required"),
    pickupDate: yup.string().required("required"),

});

const initialValuesDonate = {
    donorFullName: "",
    donorLocation: "",
    donorEmail: "",
    donationCategory: "",
    donationType: "",
    donationDescription: "",
    pickupDate: "",
    additionalDetails: "",
};

const initialValuesRequest = {
    donorFullName: "",
    donorLocation: "",
    donorEmail: "",
    donationCategory: "",
    donationType: "",
    donationDescription: "",
    pickupDate: "",
    additionalDetails: "",
};


function PopupRequest(props) {

    const [pageType, setPageType] = useState("donate");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const request = async (values, onSubmitProps) => {
        // this allows us to send form info with image
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("DonatePicPath", values.picture.name);



        const savedDonateResponse = await fetch(
            "http://localhost:3001/donate/post",
            {
                method: "POST",
                body: formData,
            }
        );
        const savedDonate = await savedDonateResponse.json();
        onSubmitProps.resetForm();

        if (savedDonate) {
            setPageType("/home");
        }
    };


    const handleFormSubmit = async (values, onSubmitProps) => {

    };


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <CloseIcon sx={{ "&:hover": { cursor: "pointer" } }}
                    className="close-btn" onClick={() => props.setTrigger(false)} />
                {props.children}
                <div class="wrapper">


                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={ initialValuesDonate }
                        validationSchema={ donateSchema }
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                            resetForm,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <h1 className="text-center text-success py-2">Donation Request Form</h1>

                                <p className='py-3'>Fill out the donation request form below with all information. 
                                    Your donation request must be submitted at least four(4) weeks before your event date.
                                    We will contact you as soon as we have evaluated your request.</p>
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                    }}
                                >
                                   
                                        <>

                                            <TextField
                                                label="Name of the event"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.pickupRequired}
                                                name="pickupRequired"
                                                error={Boolean(touched.pickupRequired) && Boolean(errors.pickupRequired)}
                                                helperText={touched.pickupRequired && errors.pickupRequired}
                                                sx={{ gridColumn: "span 4" }}
                                            />

                                            <TextField
                                                label="Event Location"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.donationDescription}
                                                name="donationDescription"
                                                error={Boolean(touched.donationDescription) && Boolean(errors.donationDescription)}
                                                helperText={touched.donationDescription && errors.donationDescription}
                                                sx={{ gridColumn: "span 4" }}
                                            />

                                            <TextField
                                                label="Full Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.donorFullName}
                                                name="donorFullName"
                                                error={Boolean(touched.donorFullName) && Boolean(errors.donorFullName)}
                                                helperText={touched.donorFullName && errors.donorFullName}
                                                sx={{ gridColumn: "span 4" }}
                                            />

                                            <TextField
                                                label="Email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.donorEmail}
                                                name="donorEmail"
                                                error={Boolean(touched.donorEmail) && Boolean(errors.donorEmail)}
                                                helperText={touched.donorEmail && errors.donorEmail}
                                                sx={{ gridColumn: "span 4" }}
                                            />
                                            <TextField
                                                label="Donation amount requested"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.donationCategory}
                                                name="donationCategory"
                                                error={Boolean(touched.donationCategory) && Boolean(errors.donationCategory)}
                                                helperText={touched.donationCategory && errors.donationCategory}
                                                sx={{ gridColumn: "span 2" }}
                                            />


                                            <TextField
                                                label="Description"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.additionalDetails}
                                                name="additionalDetails"
                                                error={Boolean(touched.additionalDetails) && Boolean(errors.additionalDetails)}
                                                helperText={touched.additionalDetails && errors.additionalDetails}
                                                sx={{ gridColumn: "span 4" }}
                                            />

                                            

                                        </>

                          


                                    {/* BUTTONS */}
                                    <Box>
                                        <Button type="submit" 
                                                variant="contained">Submit
                                        </Button>
                                        <Typography
                                            onClick={() => {
                                                setPageType("Donate");
                                                resetForm();
                                            }}
                                            sx={{
                                                textDecoration: "underline",
                                                color: palette.primary.main,
                                                "&:hover": {
                                                    cursor: "pointer",
                                                    color: palette.primary.light,
                                                },
                                            }}
                                        >
                                        </Typography>
                                    </Box>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>


    ) : "";
}

export default PopupRequest;











