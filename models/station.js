const mongoose = require('mongoose');

// station
const Station = mongoose.model('Station', new mongoose.Schema({
    stationUID: {
        type:Number
    },
    stationType: {
        type:String
    },
    stationLevel: {
        type:Number
    },
    parentID: {
        type:Number
    },
    nameArabic: {
        type:String
    },
    nameLatin: {
        type:String
    },
    descriptionArabic: {
        type:String
    },
    descriptionLatin: {
        type:String
    },
    tribeUID: {
        type:String
    },
    era: {
        type:String
    },
    timelinetype: {
        type:String
    },
    timelinevalue: {
        type:String
    },
    DOB: {
        type:String
    },
    DOD: {
        type:String
    },
    hasMedia: {
        type:Boolean
    }
}));

exports.Station = Station;