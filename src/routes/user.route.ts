import express from 'express'
import User from '../models/user.model'

const router = express.Router()

// Get all USER in db.
router.get('/user', async (request: express.Request, response: express.Response) => {
    console.log('++++++++++ USER GET CALL ++++++++++')
    try {
        const user = await User.find()
        console.log(user)
        if (user != null && user.length > 0) {
            response.send({ message: 'User Found', status: 'success', result: user })
        } else {
            return response.status(404).send({ message: 'User Not Found', status: 'failure', result: {} })
        }
    } catch (exception) {
        console.log(exception)
        return response.status(500).send({ message: 'User Not Found', status: 'error', result: exception })
    }
})

// Save a User.
router.post('/user', async (request: express.Request, response: express.Response) => {
    console.log('++++++++++ USER POST CALL ++++++++++')
    try {
        const user = new User({
            username: request.body.username,
            email: request.body.email, 
            password: request.body.password
        })
        await user.save()
        return response.status(201).send({ message: 'New User Created', status: 'success', result: user })
    } catch (exception) {
        console.log(exception)
        return response.status(400).send({ message: 'User Not Created', status: 'error', result: exception })
    }
})


// Get USER deatils in db.
router.post('/user/auth', async (request: express.Request, response: express.Response) => {
    console.log('++++++++++ GET USER DETAILS ++++++++++')
    try {
        const user = await User.findOne({username: request.body.username, password: request.body.password})
        console.log(user)
        if (user != null) {
            response.send({ message: 'User Found', status: 'success', result: user })
        } else {
            return response.status(404).send({ message: 'User Not Found', status: 'failure', result: {} })
        }
    } catch (exception) {
        console.log(exception)
        return response.status(500).send({ message: 'User Not Found', status: 'error', result: exception })
    }
})

export default router