const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/swap-faces', upload.fields([{ name: 'sourceImage', maxCount: 1 }, { name: 'targetImage', maxCount: 1 }]), async (req, res) => {
    const sourceImagePath = req.files.sourceImage[0].path;
    const targetImagePath = req.files.targetImage[0].path;

    try {
        const form = new FormData();
        form.append('source_image', fs.createReadStream(sourceImagePath));
        form.append('target_image', fs.createReadStream(targetImagePath));

        const response = await axios.post('https://ai-face-swapper1.p.rapidapi.com/v1', form, {
            headers: {
                ...form.getHeaders(),
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                'x-rapidapi-host': 'ai-face-swapper1.p.rapidapi.com'
            }
        });

        console.log('Result Image URL:', response.data.image_url); // Debug log
        res.render('result', { resultImageUrl: response.data.image_url });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        if (error.response && error.response.status === 403) {
            res.status(403).send('Access Forbidden: Check your API key and permissions.');
        } else {
            res.status(500).send(`Error: ${error.message}`);
        }
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
