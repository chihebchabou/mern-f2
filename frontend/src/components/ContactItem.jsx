import React from 'react'
import {FaEnvelopeOpen, FaPhone} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact, setCurrent, unsetCurrent } from '../features/contacts/contactSlice';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch()
    const {_id, name, email, phone, type, createdAt} = contact;

    const onEdit = () => dispatch(setCurrent(contact))
    const onDelete = () => {
        dispatch(deleteContact(_id))
        dispatch(unsetCurrent())
    }

  return (
    <div className="card mt-3" style={{ width: '100%'}}>
        <div className="card-body">
            <h5 className="card-title">
                {name}
                <br />
                <small style={{color: "#c8c8c8"}} className='fs-6'>
                    <span className='text-secondary'>created at: </span>
                    {new Date(createdAt).toDateString()} at {new Date(createdAt).toLocaleTimeString()}
                </small>
            </h5>
            <span style={{float: "right"}} className={`badge ${type === 'professional' ? 'bg-success' : 'bg-primary'} `}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            <p className="card-text">
                {email && (
                    <span>
                        <FaEnvelopeOpen /> {email}
                    </span>
                )}
            </p>
            <p className="card-text">
                {phone && (
                    <span>
                        <FaPhone /> {phone}
                    </span>
                )}
            </p>
            <button className="btn btn-secondary me-3" onClick={onEdit}>Edit</button>
            <button className="btn btn-danger me-3" onClick={onDelete}>Delete</button>
        </div>
    </div>
  )
}

export default ContactItem