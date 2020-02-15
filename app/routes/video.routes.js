module.exports = (app) => {
    const notes = require('../controllers/video.controller.js');

    // Create a new Note
    app.post('/videos', notes.create);

    // Retrieve all Notes
    app.get('/videos', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/videos/:videoId', notes.findOne);

    // Update a Note with noteId
    app.put('/videos/:videoId', notes.update);

    // Delete a Note with noteId
    app.delete('/videos/:videoId', notes.delete);
}
