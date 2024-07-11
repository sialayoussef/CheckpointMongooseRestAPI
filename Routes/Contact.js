const express = require("express")
const Contact = require("../Models/Contact")
const { AddContact, GetContacts, GetOneContact, DeleteContact, UpdateContact } = require("../Controllers/Contact")

const contactRouter = express.Router()

contactRouter.post("/addContact",AddContact)

contactRouter.get("/getContacts",GetContacts)

contactRouter.get("/getContact/:id",GetOneContact)

contactRouter.delete("/deleteContact/:id",DeleteContact)

contactRouter.put("/updateContact/:id",UpdateContact)



module.exports = contactRouter