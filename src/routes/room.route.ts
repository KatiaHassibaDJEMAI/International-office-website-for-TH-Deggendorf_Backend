import express from 'express'
import Room from '../models/room.model'

const router = express.Router()

// Get all USER in db.
router.get('/room', async (request: express.Request, response: express.Response) => {
    console.log('++++++++++ USER GET CALL ++++++++++')
    try {
        const user = await Room.find()
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
router.post('/room', async (request: express.Request, response: express.Response) => {
    console.log('++++++++++ USER POST CALL ++++++++++')
    try {
        const user = new Room({
            room: request.body.username,
            contact: request.body.email, 
            available: request.body.password,
            from: request.body.email, 
            to: request.body.password
        })
        await user.save()
        return response.status(201).send({ message: 'New User Created', status: 'success', result: user })
    } catch (exception) {
        console.log(exception)
        return response.status(400).send({ message: 'User Not Created', status: 'error', result: exception })
    }
})


// Get USER deatils in db.
router.put('/room/auth', async (request: express.Request, response: express.Response) => {
    console.log('++++++++++ GET USER DETAILS ++++++++++')
    try {
        const user = await Room.findOne({room: request.body.room})
        console.log(user)
        if (user != null) {
            response.send({ message: 'Room Found', status: 'success', result: user })
            //code for updating room details
        } else {
            return response.status(404).send({ message: 'User Not Found', status: 'failure', result: {} })
        }
    } catch (exception) {
        console.log(exception)
        return response.status(500).send({ message: 'User Not Found', status: 'error', result: exception })
    }
})

export default router