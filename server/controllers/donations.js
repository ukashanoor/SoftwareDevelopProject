import User from "../models/User.js";
import Donation from "../models/Donation.js";

/* CREATE */
export const createDonation = async (req, res) => {
    try {
      const {
        userId,
        donorFullName,
        donorLocation,
        donorEmail,
        donationCategory,
        donationType,
        donationDescription,
        pickupRequired,
        pickupDate,
        additionalDetails,
      } = req.body;
      const user = await User.findById(userId);
      const newDonation = new Donation({
        userId,
        donorFullName: donorFullName,
        donorLocation: donorLocation,
        donorEmail: donorEmail,
        donationCategory: donationCategory,
        donationType: donationType,
        donationDescription: donationDescription,
        pickupRequired: pickupRequired,
        pickupDate: pickupDate,
        additionalDetails: additionalDetails
      });
      await newDonation.save();
  
      const donation = await Donation.find();
      res.status(201).json(donation);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };

  export const getDonations = async (req, res) => {
    try {
      const donation = await Donation.find().sort({ createdAt: -1 });
      res.status(200).json(donation);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };