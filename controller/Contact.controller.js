const Contact = require('../models/Contact.model');

const AddContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const result = await newContact.save();
    res.status(200).json({
      message: 'Contact was added successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        msg: 'Unknown error occured!',
      },
    });
  }
};

const GetContact = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.status(200).json({
      message: 'Contact read successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteContact = (req, res) => {
  res.send('DeleteContact!');
};

const UpdateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const newContact = req.body;

    const result = await Contact.findOneAndUpdate({ _id: id }, { $set: newContact }, { new: true });
    res.status(200).json({
      message: 'Contact was added successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        msg: 'Unknown error occured!',
      },
    });
  }
};

const GetContactList = (req, res) => {
  res.send('GetContactList!');
};

module.exports = {
  AddContact,
  GetContact,
  DeleteContact,
  UpdateContact,
  GetContactList,
};
