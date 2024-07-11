const Contact = require("../Models/Contact")

exports.AddContact=async(req,res)=>{
    try {

        const found = await Contact.findOne({email : req.body.email})

        if (found) {
            return res.status(400).send("Email already exists")
        }
        const ContactNew = await new Contact(req.body)

        await ContactNew.save()

        res.status(200).send({msg : "Contact Added",ContactNew})
    } catch (error) {
        res.status(500).send("Could not add Contact")
    }
}

exports.GetContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg : "Contact List",contacts})
    } catch (error) {
        res.status(500).send("Could not get Contacts")
    }
}

exports.GetOneContact=async(req,res)=>{
    try {
        const {id} = req.params

        const oneContact = await Contact.findById(id)

        res.status(200).send({msg :"Contact", oneContact})
    } catch (error) {
        res.status(500).send("Could not get Contact")    
    }
}

exports.DeleteContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send("Contact Deleted")
    } catch (error) {
        res.status(500).send("Could not delete Contact")   
    }
}

exports.UpdateContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send("Contact Updated")
    } catch (error) {
        res.status(500).send("Could not update Contact")   
    }
}