const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const controller = {}

/**
 * @route GET /api/contacts
 * @desc Get all users contacts
 * @access Private
 */
controller.getContacts = asyncHandler(async (req ,res) => {
  res.json({message: "Get users contacts"});
});

/**
 * @route POST /api/contacts
 * @desc Set new Contact
 * @access Private
 */
controller.setContact = asyncHandler(async (req ,res) => {
  // console.log(req.body);
  // if (!req.body.name){
  //   throw new Error("name is required!")
  // }
      
  res.status(201).json({message: "Set new contact"});
})

/**
 * @route PUT /api/contacts/:id
 * @desc Update contact
 * @access Private
 */
controller.updateContact = asyncHandler(async (req ,res) => {
  res.json({message: `Contact ${req.params.id} updated` });
});

/**
 * @route DELETE /api/contacts/:id
 * @desc Delete contact
 * @access Private
 */
controller.deleteContact = asyncHandler(async (req ,res) => {
  res.json({message: `Contact ${req.params.id} deleted`});
});

module.exports = controller;