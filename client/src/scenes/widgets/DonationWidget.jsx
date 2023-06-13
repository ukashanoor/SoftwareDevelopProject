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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends,
    } = user;

    return (
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
                    //   onClick={}
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "1rem",
                        mt: '10px',
                        mb: '15px'
                    }}
                >
                    Donate
                </Button>
                <Button variant="contained"
                    //   disabled={!post}
                    //   onClick={}
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
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <Typography color={main}>{location}</Typography>
                    <Typography color={main}>{location}</Typography>
                    <Typography color={main}>{location}</Typography>
                    <Typography color={main}>{location}</Typography>
                    <Typography color={main}>{location}</Typography>
                </Box>
            </Box>
        </WidgetWrapper>
    );
};

export default DonationWidget;
