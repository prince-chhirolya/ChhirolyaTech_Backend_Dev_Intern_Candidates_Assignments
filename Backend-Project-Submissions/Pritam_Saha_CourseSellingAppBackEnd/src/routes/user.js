const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require("../config")
const {User, Course} = require('../db/index')
const jwt = require('jsonwebtoken')

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {username, password}= req.body
//console.log("hello")
    try{
        await User.create({
            username: username,
            password: password
        })
        res.json({
            msg: "User created successfully"
        })
    }catch(err){
        res.json({
            msg: "Oops something gone wrong",
            error: err.message 
        })
    }
    
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const validuser = await User.find({
        username: username,
        password: password
    })
    if(validuser){
        const token = jwt.sign({
            username
        }, JWT_SECRET)

        res.json({ token })
    }else{
        res.status(411).json({
            msg: "Incorrect email and pass"
        })
    }
    
        
    
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username);
    const courseId = req.params.courseId

    await User.updateOne({
        username: username
    },{
        $push : {
            purchasedCourses: courseId
        }
    })
    res.json({
        msg: "Purchased Successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    
   // console.log(user.purchasedCourses)

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router