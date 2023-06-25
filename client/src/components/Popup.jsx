import React from 'react'
import './Popup.css'
import FlexBetween from './FlexBetween';
import CloseIcon from '@mui/icons-material/Close';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <CloseIcon  sx={{ "&:hover": { cursor: "pointer" } }} 
                className="close-btn" onClick={() => props.setTrigger(false)} />
                { props.children }
                <div class="wrapper">
                    <h1 className="text-center">FAQ's</h1>
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
                        </p>
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
                        </p>
                        </div>
                    </div>
                    <div class="faq">
                        <button class="accordion">
                        3. What is a donation event?
                        <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="panel">
                        <p>
                        A donation event is an organized gathering or campaign aimed at
                        raising funds or collecting resources for a specific cause or charity. 
                        These events can take various forms, such as online fundraisers, charity auctions, 
                        charity runs, or donation drives.</p>
                        </div>
                    </div>
                    <div class="faq">
                        <button class="accordion">
                        4. How can I donate to an event?
                        <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="panel">
                        <p>
                        Donating to an event can typically be done through various channels. Most donation events have specific instructions on their websites or social media pages. Common methods include online platforms, direct bank transfers, mobile payment apps, or physical drop-off locations.</p>
                        </div>
                    </div>

                    <div class="faq">
                        <button class="accordion">
                        5. How can I stay updated about events?
                        <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="panel">
                        <p>
                        To stay updated about donation events, it's recommended to follow the event's official social media accounts, subscribe to their newsletters if available, and regularly check their website for any announcements or upcoming initiatives.</p>
                        </div>
                    </div>

                    <div class="faq">
                        <button class="accordion">
                        6. Can I volunteer at a donation event?
                        <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="panel">
                        <p>
                        Most donation events welcome volunteers who want to contribute their time and effort. Reach out to the event organizers and express your interest in volunteering. They will provide you with information on available roles, responsibilities, and any requirements.       </p>                 </div>
                    </div>

                    

                    
                </div>
            </div>
        </div>
    ) : "";
}


export default Popup