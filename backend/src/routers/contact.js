const express = require('express')
const Contact = require('../models/contact')
const auth = require('../middleware/auth')
const app = express()

const router = new express.Router()


router.post('/Contacts', auth, async (req, res) => {
    const contact = new Contact({
        ...req.body
    })

    try {
        await contact.save()
        console.log(contact)

        res.status(201).send(contact)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/Contacts', auth, async (req, res) => {
    const _id = +req.query.page - 1
     var len
console.log(req.query)
    if (_id >= 0) {
        try {
            const filter = {};
            if(req.query.Address){filter.Address=req.query.Address
            }
      
            if(req.query.Name){
                filter.Name=req.query.Name
                
            }
         
            if(req.query.Phone){filter.Phone=req.query.Phone
                
            }
            if(req.query.Notes){
                filter.Notes=req.query.Notes
                
            }
        
            const all = await Contact.find(
                filter
            )
            .skip(_id * 5).limit(5); 
            len=await Contact.find(
                    filter
                )  ;
    all[all.length]=Object.keys(len).length
                 res.send(all)
                 console.log(all)
               
        }
        catch (e) {
            res.status(500).send()
        }
    }
    else {

        res.status(500).send()

    }
})


router.patch('/Contacts/:id', auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['Notes', 'Address','Name']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const contact = await Contact.findOne({ _id: req.params.id})

        if (!contact) {
            return res.status(404).send()
        }

        
        updates.forEach((update) => contact[update] = req.body[update])
        await contact.save()
        res.send(contact)
        console.log(contact)

    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/Contacts/:id', auth, async (req, res) => {
   
    console.log(req.params.id);

    try {
        const contact = await Contact.findOneAndDelete({ _id: req.params.id})

        if (!contact) {
            res.status(404).send()
        }
        console.log(contact)

        res.send(contact)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router