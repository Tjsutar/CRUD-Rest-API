const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) => {
    try{
            console.log("get request")
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.get('/', (req, res) => {
    // res.json({"message": "Welcome."});
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/register', (req, res) => {
    
    res.sendFile(path.join(__dirname+'/register.html'));
});

router.get('/dashboard', (req, res) => {
    
    res.sendFile(path.join(__dirname+'/dashboard.html'));
});

router.get('/login', (req, res) => {
    // Insert Login Code Here
   
    res.sendFile(path.join(__dirname+'/login.html'));
  });

module.exports = router