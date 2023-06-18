import React from 'react';
import './Popup.css';
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
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import { useSelector } from "react-redux";
import { setEvents } from "state";

const eventSchema = yup.object().shape({
    eventName: yup.string().required("required"),
    eventLocation: yup.string().required("required"),
    eventDate: yup.date().required("required"),
    organizerName: yup.string().required("required"),
    organizerPhone: yup.string().required("required"),
    donationCategory: yup.string().required("required"),
    donationType: yup.string().required("required"),
    noOfAttendees: yup.number().required("required"),
});

const initialValues = {
    eventName: "",
    eventLocation: "",
    eventDate: null,
    eventDescription: "",
    organizerName: "",
    organizerPhone: "",
    donationCategory: "",
    donationType: "",
    noOfAttendees: 0,
};

function PopupEvent({ isOpen, onClose, onSubmit, userId }) {
    const [date, setDate] = useState(null);
    const [pageType, setPageType] = useState("event");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const token = useSelector((state) => state.token);

    const createEvent = async (values) => {
   
        console.log(values);
        try {
            const eventResponse = await fetch("http://localhost:3001/events/add", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(values),
                
            });
            const event = await eventResponse.json();
            dispatch(setEvents({ event }));
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    const handleFormSubmit = (values) => {

        let v = values.target;
        const formValues = {};
        formValues["userId"] = userId;
        for (let i = 0; i < 15; i += 1) {
            if (v[i].name !== '') {
                formValues[v[i].name] = v[i].value;
            }
        }
        createEvent(formValues);
        onSubmit(formValues);
        onClose();
    };

    return (
        <Modal className="popup" isOpen={isOpen} onRequestClose={onClose}>
            <div className="popup-inner">
                <div className="wrapper">
                    <Button className="close-btn" onClick={onClose}>
                        <CloseIcon />
                    </Button>

                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={eventSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                        }) => (
                            <form onSubmit={handleFormSubmit}>
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                    }}
                                >
                                    <div className="popup-header">
                                        <h1>Event</h1>
                                    </div>

                                    <TextField
                                        label="Event Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.eventName}
                                        name="eventName"
                                        error={Boolean(touched.eventName) && Boolean(errors.eventName)}
                                        helperText={touched.eventName && errors.eventName}
                                        sx={{ gridColumn: "span 4" }}
                                    />

                                    <TextField
                                        label="Event Location"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.eventLocation}
                                        name="eventLocation"
                                        error={Boolean(touched.eventLocation) && Boolean(errors.eventLocation)}
                                        helperText={touched.eventLocation && errors.eventLocation}
                                        sx={{ gridColumn: "span 4" }}
                                    />

                                    <div>
                                        <DatePicker
                                            selected={date}
                                            onBlur={handleBlur}
                                            value={values.eventDate}
                                            name="eventDate"
                                            onChange={(date) => setDate(date)}
                                            className={"date-picker"}
                                            error={Boolean(touched.eventDate) && Boolean(errors.eventDate)}
                                            helperText={touched.eventDate && errors.eventDate}
                                            placeholderText="Event Date"
                                        />
                                    </div>

                                    <TextField
                                        label="Event Description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.eventDescription}
                                        name="eventDescription"
                                        error={Boolean(touched.eventDescription) && Boolean(errors.eventDescription)}
                                        helperText={touched.eventDescription && errors.eventDescription}
                                        sx={{ gridColumn: "span 4" }}
                                    />

                                    <TextField
                                        label="Organizer Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.organizerName}
                                        name="organizerName"
                                        error={Boolean(touched.organizerName) && Boolean(errors.organizerName)}
                                        helperText={touched.organizerName && errors.organizerName}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        label="Organizer Phone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.organizerPhone}
                                        name="organizerPhone"
                                        error={Boolean(touched.organizerPhone) && Boolean(errors.organizerPhone)}
                                        helperText={touched.organizerPhone && errors.organizerPhone}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        label="Donation Category"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.donationCategory}
                                        name="donationCategory"
                                        error={Boolean(touched.donationCategory) && Boolean(errors.donationCategory)}
                                        helperText={touched.donationCategory && errors.donationCategory}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        label="Donation Type"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.donationType}
                                        name="donationType"
                                        error={Boolean(touched.donationType) && Boolean(errors.donationType)}
                                        helperText={touched.donationType && errors.donationType}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        label="Number of Attendees"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.noOfAttendees}
                                        name="noOfAttendees"
                                        error={Boolean(touched.noOfAttendees) && Boolean(errors.noOfAttendees)}
                                        helperText={touched.noOfAttendees && errors.noOfAttendees}
                                        type="number"
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    {/* BUTTONS */}
                                    <Box>
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
                                    </Box>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </Modal>
    );
}

export default PopupEvent;
