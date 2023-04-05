import axios from "axios";

const API_URL = "/api/contacts/";

// Create new contact service
const createContact = async (contactData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.post(API_URL, contactData, config);
    return response.data;
};

// Get user contacts service
const getContacts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.get(API_URL, config);
    return response.data;
};

const contactService = {
    createContact,
    getContacts
};
export default contactService