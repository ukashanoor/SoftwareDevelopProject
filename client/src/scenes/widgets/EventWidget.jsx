import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme, Button } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setEvents } from "state";
import { useNavigate } from "react-router-dom";
import PopupEvent from "components/PopupEvent";
import DatePicker from 'react-datepicker'
// import ListOfDonations from "components/ListOfDonations";

const EventWidget = ({ userId, _id }) => {
    const [user, setUser] = useState(null);
    const [date, setDate] = useState(null);
    const dispatch = useDispatch();
    let events = useSelector((state) => state.events);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const light = palette.neutral.light;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so we add 1
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
      };

    const getEvents = async (flag) => {
        const response = await fetch("http://localhost:3001/events", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setEvents({ events: data }));
        if (flag) {
            events = data;
        }

    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (values) => {
        // Handle form submission

        console.log(values);
    };

    useEffect(() => {
        getEvents(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!events) {
        getEvents(true);
        return events;
    }


    return (
        <>

            <WidgetWrapper >
                {/* FIRST ROW */}
                <FlexBetween
                    gap="0.5rem"
                    pb="0.1rem"
                >
                    <FlexBetween gap="1rem">
                        <Box>
                            <Typography
                                variant="h4"
                                color={dark}
                                fontWeight="500"
                                sx={{
                                    "&:hover": {
                                        color: palette.primary.light,
                                        cursor: "pointer",
                                    },
                                }}
                            >
                                Event
                            </Typography>
                        </Box>
                    </FlexBetween>
                </FlexBetween>

                {/* SECOND ROW */}
                <Box display="flex" justifyContent="space-between">
                    <DatePicker
                        className="date-event"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="Pickup Date"

                    />
                    <PopupEvent isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} userId={userId} />
                    <Button variant="contained"
                        //   disabled={!post}
                        onClick={openModal}
                        sx={{
                            color: palette.background.alt,
                            backgroundColor: palette.primary.main,
                            borderRadius: "1rem",
                            mr: '50px',
                            mt: '10px',
                            mb: '15px'
                        }}
                    >
                        Create
                    </Button>
                </Box>

                {/* THIRD ROW */}
                <Box
                    p="1rem"
                    borderRadius="1rem"
                    bgcolor={light}
                    display="flex"
                    width="100%"
                    height="200px"
                    overflow="auto" // Add this CSS property to make the box scrollable
                    justifyContent="center" // Center the table horizontally
                   >
                    

                    <table display="flex" borderRadius="3rem" alignItems="center" gap="2.5rem" mb="1rem" bgcolor={light}>
                        <thead>
                            <tr >
                                <th style={{textAlign: "center" , padding:"0.5rem"}} >Event</th>
                                <th style={{textAlign: "center" , padding:"0.5rem"}}>Location</th>
                                <th style={{textAlign: "center" , padding:"0.5rem"}}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(
                                ({
                                    userId,
                                    eventName,
                                    eventLocation,
                                    eventDate,
                                    eventDescription,
                                    organizerName,
                                    organizerPhone,
                                    donationCategory,
                                    donationType,
                                    noOfAttendees,
                                }) => {
                                    const formattedDate = formatDate(eventDate);
                                return (
                                  <tr key={userId}>
                                    <td style={{textAlign: "center" }}>{eventName}</td>
                                    <td style={{textAlign: "center" }}>{eventLocation}</td>
                                    <td style={{textAlign: "center" }}>{formattedDate}</td>
                                  </tr>
                                );
                              }
                            )}
                        </tbody>
                    </table>


                </Box>



            </WidgetWrapper>

        </>


    );
};

export default EventWidget;


