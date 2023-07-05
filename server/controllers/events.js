import User from "../models/User.js";
import Event from "../models/Event.js";
import emailHelper from "../emailHelper.js";


/* CREATE */
export const createEvent = async (req, res) => {
    try {
      const {
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
      } = req.body;
      const user = await User.findById(userId);
      const newEvent = new Event({
        userId,
        eventName: eventName,
        eventLocation: eventLocation,
        eventDate: eventDate,
        eventDescription: eventDescription,
        organizerName: organizerName,
        organizerPhone: organizerPhone,
        donationCategory: donationCategory,
        donationType: donationType,
        noOfAttendees: noOfAttendees
      });
      await newEvent.save();
      console.log("hi");
      await emailHelper(
        `Event Created: ${eventName}`,
        `Dear ${user.firstName}<br><br>We are excited to inform you that an event has been created on our website.<br><br>Event Title: ${eventName}<br>Date: ${eventDate}<br>Location: ${eventLocation}<br>Description: ${eventDescription}<br><br>We hope you can join us for this exciting event. Feel free to invite your friends and family!<br><br>If you have any questions or need further information, please don't hesitate to contact us. We look forward to seeing you there!<br><br>Best regards,<br>DonateHope`,
        "ukashanoor@gmail.com"
      );
      const events = await Event.find();
      res.status(201).json(events);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };

  export const getEvents = async (req, res) => {
    try {
      const events = await Event.find().sort({ createdAt: -1 });
      res.status(200).json(events);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };