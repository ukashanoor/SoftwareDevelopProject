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
import { setDonations } from "state";
import { useNavigate } from "react-router-dom";
import PopupDonate from "components/PopupDonate";
import PopupRequest from "components/PopupRequest";
// import ListOfDonations from "components/ListOfDonations";

const DonationWidget = ({ userId }) => {
    const dispatch = useDispatch();
    const donations = useSelector((state) => state.donations);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const light = palette.neutral.light;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const [buttonPopupDonate, setButtonPopupDonate] = useState(false);
    const [buttonPopupRequest, setButtonPopupRequest] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getDonation = async () => {
        debugger;
        const response = await fetch("http://localhost:3001/donations", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setDonations({ donations: data }));
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
        getDonation();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!donations) {
        return null;
    }

    const {
        donorFullName,
        donorLocation,
        donorEmail,
        donationCategory,
        donationType,
        donationDescription,
        pickupRequired,
        pickupDate,
        additionalDetails,
    } = donations;

    return (
        <>
        

    

            <WidgetWrapper>
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
                                Donate Zone
                            </Typography>
                        </Box>
                    </FlexBetween>
                </FlexBetween>

                {/* SECOND ROW */}
                <Box display="flex" justifyContent="space-between">
                    <Button variant="contained"
                        //   disabled={!post}

                        onClick={openModal}
                        sx={{
                            color: palette.background.alt,
                            backgroundColor: palette.primary.main,
                            borderRadius: "1rem",
                            mt: '10px',
                            mb: '15px',
                            marginRight: '0.5rem'
                        }}
                    >
                        Donate
                    </Button>
                    <PopupDonate isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} userId={userId} />
                    <Button variant="contained"
                        //   disabled={!post}
                        onClick={() => setButtonPopupRequest(true)}
                        sx={{
                            color: palette.background.alt,
                            backgroundColor: palette.primary.main,
                            borderRadius: "1rem",
                            mr: '100px',
                            mt: '10px',
                            mb: '15px'
                        }}
                    >
                        Request
                    </Button>
                </Box>

                <Divider />

                {/* THIRD ROW */}
                <Box p="1rem 0">
                    <Box display="flex" borderRadius="3rem" alignItems="center" gap="2.5rem" mb="0.5rem" bgcolor={light}>
                        <Box>Name</Box>
                        <Box>Description</Box>
                        <Box>Location</Box>

         
                        {donations.map(
                ({
                    donorFullName,
                    donorLocation,
                    donorEmail,
                    donationCategory,
                    donationType,
                    donationDescription,
                    pickupRequired,
                    pickupDate,
                    additionalDetails,
                }) => (
                    <Typography color={main}> {donorFullName} </Typography>
                
                    
                ))}
                        {/* <Typography  color={main} pl="0.5rem">{donorFullName}</Typography>
                    <Typography color={main}>{donorFullName}</Typography>
                    <Typography color={main}>{donorFullName}</Typography>      */}
                    </Box>
                </Box>


                {/* Popup donate button */}
                <PopupDonate trigger={buttonPopupDonate} setTrigger={setButtonPopupDonate}>
                </PopupDonate>

                {/* Popup Request button */}
                <PopupRequest trigger={buttonPopupRequest} setTrigger={setButtonPopupRequest}>
                </PopupRequest>

            </WidgetWrapper>
            </>

    );
};

export default DonationWidget;


