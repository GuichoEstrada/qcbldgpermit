const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1Seb2Svs3Kmi',
    database: 'BPTest',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const sqlSELECT = "SELECT * FROM application_details WHERE Application_Number = 'AT3678-00654'";
    db.query(sqlSELECT, (err, result) => {
        res.send(result)
    });
})

app.listen(3306, () => {
    console.log("Running on port 3306");
})