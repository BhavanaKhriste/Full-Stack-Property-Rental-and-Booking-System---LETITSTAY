const { url } = require("inspector");
const mongoose = require("mongoose");
const { URL } = require("url");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: {
            type: String,
            default: "https://unsplash.com/photos/coconut-tree-on-beach-DH_u2aV3nGM"
        },
        filename: {
            type: String,
            default: "default"
        }
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }, ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});
listingSchema.post("findOneAndDelete", async(listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;