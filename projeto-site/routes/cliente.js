var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Cliente = require('../models').Cliente;

router.get('/', function (req, res, next) {
	
	console.log(`Rota cliente`);

	const instrucaoSql = `select nome, cnpj, telefone, email from cliente`;

    sequelize.query(instrucaoSql, {
            model: Cliente
        }).then(resultado => {
            res.json(resultado[0]);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
    });
  
});

module.exports = router;