const mysql = require('mysql');

const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

const pool = mysql.createPool({
    'user': 'root', 'password': 'root',
    'database': 'crud_paciente',
    'host': 'localhost',
    'port': '3307'
});

app.get('/pacientes', function (req, res) {

    pool.query("Select * from pacientes", (err, pacientes) => {
        res.send(pacientes);
    });
});

app.post('/pacientes', function (req, res) {

    pool.query(`Insert into pacientes (nome, data_nascimento, cpf, celular) values(?, ?, ?, ?)`, [
        ...req.body
    ] , (err, pacientes) => {
        res.send(pacientes);
    });
});


//app.use(req, res, next) => {
//}

app.listen(3000);
