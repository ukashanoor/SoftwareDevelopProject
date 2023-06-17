import React from 'react'
import './Popup.css'
import FlexBetween from './FlexBetween';
import CloseIcon from '@mui/icons-material/Close';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-overlay">
        <div className="popup">  
            <div className="popup-inner">
                <CloseIcon  sx={{ "&:hover": { cursor: "pointer" } }} 
                className="close-btn" onClick={() => props.setTrigger(false)} />
                { props.children }
                <div class="wrapper">
                    <h1>FAQ's</h1>
                    <div class="faq">
                        <button class="accordion">
                        1. What’s the best time to post on social media?
                        <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="panel">
                        <p>
                        The best time to post on social media depends on several factors. 
                        While your choice of platform and your industry both matter, your audience activity plays the biggest role. 
                        So ideally, you should look at your post performance to get valuable data about the perfect 
                        post timing for your business.
                        .</p>
                        </div>
                    </div>
                    <div class="faq">
                        <button class="accordion">
                        2. How often should I post on social media?
                        <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="panel">
                        <p>
                        Again, this largely depends on your audience. While you definitely should publish at least one post every day, you should see if posting more often will make any difference in your performance. 
                        Once you find a posting frequency that works for you, create a publishing calendar, and follow it consistently.
                        .</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    ) : "";
}


export default Popup
