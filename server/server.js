const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://huyphkgcs220701:Y6b0Ndsejhi7uoeU@fgwweb2.4fa7f.mongodb.net/?retryWrites=true&w=majority&appName=FGWWeb2', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});
