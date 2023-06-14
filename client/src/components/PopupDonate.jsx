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
import Dropzone from "react-dropzone";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


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



const initialValuesRequest = {
    donorFullName: "",
    donorLocation: "",
    donorEmail: "",
    donationCategory: "",
    donationType: "",
    donationDescription: "",
    pickupDate: null,
    additionalDetails: "",
};

function PopupDonate(props) {
    const [date, setDate] = useState(null);

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
                        initialValues={initialValuesRequest}
                        validationSchema={requestSchema}
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
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                    }}
                                >
                                    <h1>Donate</h1>

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
                                        label="Category"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.donationCategory}
                                        name="donationCategory"
                                        error={Boolean(touched.donationCategory) && Boolean(errors.donationCategory)}
                                        helperText={touched.donationCategory && errors.donationCategory}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        label="Type"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.donationType}
                                        name="donationType"
                                        error={Boolean(touched.donationType) && Boolean(errors.donationType)}
                                        helperText={touched.donationType && errors.donationType}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        label="Description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.donationDescription}
                                        name="donationDescription"
                                        error={Boolean(touched.donationDescription) && Boolean(errors.donationDescription)}
                                        helperText={touched.donationDescription && errors.donationDescription}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        label="Location"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.donorLocation}
                                        name="donorLocation"
                                        error={Boolean(touched.donorLocation) && Boolean(errors.donorLocation)}
                                        helperText={touched.donorLocation && errors.donorLocation}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        label="Additional Details"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.additionalDetails}
                                        name="additionalDetails"
                                        error={Boolean(touched.additionalDetails) && Boolean(errors.additionalDetails)}
                                        helperText={touched.additionalDetails && errors.additionalDetails}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <div>
                                        
                                        <DatePicker
                                            selected={date}
                                            onBlur={handleBlur}
                                            value={values.pickupDate}
                                            onChange={(date) => setDate(date)}
                                            className={"date-picker"}
                                            error={Boolean(touched.pickupDate) && Boolean(errors.pickupDate)}
                                            helperText={touched.pickupDate && errors.pickupDate}
                                            placeholderText="Pickup Date"
                                        />
                                    </div>



                                    {/* BUTTONS */}
                                    <Box >
                                        <Button
                                            fullWidth
                                            type="submit"
                                            sx={{
                                                width: "100%",
                                                m: "5rem",
                                                p: "1rem",
                                                mt: "7rem",
                                                backgroundColor: palette.primary.main,
                                                color: palette.background.alt,
                                                "&:hover": { color: palette.primary.main },
                                            }}
                                        >
                                            {"SUBMIT"}
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

export default PopupDonate;











