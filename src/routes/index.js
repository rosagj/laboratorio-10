const {Router} = require ('express');
const router = Router();
const tasks = require('../models/task.json');
const _ = require('underscore');

router.get('/',(req,res)=>{
    res.render('index',{
        tasks
    });
});

router.post('/add',(req,res)=>{
    const {name, mark, price, category, description} = req.body;
    if (name && mark && price && category && description){
        const id = tasks.length + 1;
        const newTask = {id,...req.body};
        console.log(newTask);
        tasks.push(newTask)
        res.render('index',{tasks});
        res.redirect('/');
    }else {
        res.status(500).json({error:'There was an error'});
    }
    res.redirect('/');
});

router.get('/en',(req,res)=>{
    res.render('indexen',{
        tasks
    });
});

router.post('/add/en',(req,res)=>{
    const {name, mark, price, category, description} = req.body;
    if (name && mark && price && category && description){
        const id = tasks.length + 1;
        const newTask = {id,...req.body};
        console.log(newTask);
        tasks.push(newTask)
        res.render('index',{tasks});
        res.redirect('/');
    }else {
        res.status(500).json({error:'There was an error'});
    }
    res.redirect('/');
});

module.exports = router;