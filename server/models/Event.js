import mongoose from "mongoose";
const eventSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
    eventLocation: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventDescription: {
      type: String
    },
    organizerName: {
        type: String,
        required: true
    },
    organizerPhone: {
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
    volunteerOpportunity: String,
    supplies: String,
    paymentMethod: String
  },
  { timestamps: true }
);
const Event = mongoose.model("Event", eventSchema);
export default Event;
