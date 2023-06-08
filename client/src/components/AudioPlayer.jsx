import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTheme, Button } from "@mui/material";
import { MarginRounded } from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";

const MyAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  
  //Fix
  const file =  Math.floor(Math.random() * 5) + 1;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <FlexBetween sx={{ marginTop: "10px"}}>
      <audio src={`http://localhost:3001/assets/${file}.mp3`} controls={true} autoPlay={false} />
      <Button sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",        
          }} 
          nClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}
      </Button>
    </FlexBetween>
  );
};

export default MyAudioPlayer;
