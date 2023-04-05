import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createContact, updateContact, unsetCurrent } from '../features/contacts/contactSlice';

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        type: 'personal'
    });

    const {name, email, phone, type} = contact;
    const { current } = useSelector(state => state.contact);

    const dispatch = useDispatch();

   
    const onChange = e => setContact({...contact, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
          dispatch(createContact({name, email, phone, type}));
          setContact({
              name: "",
              email: "",
              phone: "",
              type: 'personal'
          });
        } else {
          console.log("update contact")
          dispatch(updateContact(contact))
        }
        clearAll();
        
    };

    const clearAll = () => {
        dispatch(unsetCurrent());
    }

    useEffect(() => {
        if (current !== null) {
            setContact(current)
        } else {
            setContact({
                name: "",
                email: "",
                phone: "",
                type: 'personal'
              })
        }
    }, [current])
    
  return (
    <form onSubmit={onSubmit} className="mb-3">
        <h2>{current ? 'Update' : 'Add'}  Contact</h2>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={onChange}
          id="name"
          aria-describedby="emailHelp"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={onChange}
          id="email"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={phone}
          onChange={onChange}
          id="phone"
          aria-describedby="emailHelp"
          placeholder="Phone"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="radio"
          name="type"
          value="professional"
          className="form-check-input"
          checked={type === 'professional'}
          onChange={onChange}
        />
        Professional
      </div>
      <div className="mb-3 form-check">
        <input
          type="radio"
          name="type"
          value="personal"
          className="form-check-input"
          checked={type === 'personal'}
          onChange={onChange}
        />
        Personal
      </div>
      <div className="d-grid gap-2 mb-3">
        <button type='submit' className="btn btn-primary">{current ? 'Update' : 'Add'} Contact</button>
      </div>
      {current && <div className="d-grid gap-2">
        <button type='button' className="btn btn-light" onClick={ () => clearAll()}>Clear</button>
      </div>}
    </form>
  )
}

export default ContactForm