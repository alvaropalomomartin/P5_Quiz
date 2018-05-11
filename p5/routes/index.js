
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const sequelize = require('../models/index');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Quiz' });
});


/* GET credits page. */
router.get('/credits', function(req, res, next) {
    res.render('credits', { title:'Quiz', name: 'Alvaro Palomo' });
});


/* GET quizzes page. */
router.get('/quizzes', function(req, res, next) {
    sequelize.models.quiz.findAll().
    then( quizzes => {
        res.render('quizzes', {quizzes});
})
.catch(Sequelize.ValidationError, error => {

    })
.catch(error => {
    });
});

module.exports = router;