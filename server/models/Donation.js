import mongoose from "mongoose";

const donationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    donorFullName: {
      type: String,
      required: true,
    },
    donorLocation: {
        type: String,
        required: true,
    },
    donorEmail: {
        type: String,
        required: true
    },
    donationCategory: {
        type: Array,
        required: true
    },
    donationType: {
        type: String,
        required: true
    },
    donationDescription: String,
    pickupRequired: Boolean,
    pickupDate: {
        type: Date
    },
    additionalDetails: String
  },
  { timestamps: true }
);

const Donation = mongoose.model("Event", donationSchema);

export default Donation;
