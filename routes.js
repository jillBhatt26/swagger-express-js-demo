const os = require('os');
const { Router } = require('express');
const appData = require('./data');

const router = Router();

let data = [...appData];

router.get('/info', (req, res) => {
    return res.status(200).json({
        success: true,
        os: os.hostname()
    });
});

router.get('/data', (req, res) => {
    return res.status(200).json({
        success: true,
        data
    });
});

router.post('/data', (req, res) => {
    const newData = {
        ...req.body,
        id: data.length + 1
    };

    data = [...data, newData];

    return res.status(201).json({
        success: true,
        data: {
            newData
        }
    });
});

router.get('/data/:id', (req, res) => {
    const dataByID = data.find(d => d.id === parseInt(req.params.id));

    if (!dataByID) return res.status(400).json({ success: false });

    return res.status(200).json({
        success: true,
        data: dataByID
    });
});

router.put('/data/:id', (req, res) => {
    const dataIdx = data.findIndex(d => d.id === parseInt(req.params.id));

    if (dataIdx < 0) return res.status(400).json({ success: false });

    data[dataIdx] = {
        ...data[dataIdx],
        ...req.body
    };

    return res.status(200).json({
        success: true,
        data: data[dataIdx]
    });
});

router.delete('/data/:id', (req, res) => {
    const dataByID = data.find(d => d.id === parseInt(req.params.id));

    if (!dataByID) return res.status(400).json({ success: false });

    data = data.filter(d => d.id !== parseInt(req.params.id));

    return res.status(200).json({ success: true });
});

module.exports = router;
