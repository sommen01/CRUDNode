const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    title: String,
    description: String,
    videoUrl: String,
    nextVideo: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Video', VideoSchema);
