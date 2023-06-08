import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTheme, Button } from "@mui/material";
import { MarginRounded } from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";

const MyAudioPlayer = ({audioPath}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <FlexBetween sx={{ marginTop: "10px"}}>
      
      <audio src={`http://localhost:3001/assets/${audioPath}`} 
      style={{ width: "100%", height: "50px" }}
      controls={true} autoPlay={false} />

    </FlexBetween>
  );
};

export default MyAudioPlayer;
