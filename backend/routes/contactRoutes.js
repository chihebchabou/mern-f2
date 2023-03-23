const { getContacts, setContact, updateContact, deleteContact } = require('../controllers/contactController');

const router = require('express').Router();

// router.get('/', getContacts);
// router.post('/', setContact);
// router.put('/:id', updateContact);
// router.delete('/:id', deleteContact);

router.route('/').get(getContacts).post(setContact);
router.route('/:id').put(updateContact).delete(deleteContact);

module.exports = router