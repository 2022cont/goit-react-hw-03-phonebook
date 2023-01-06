import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id} >{name}:
                <span className={css.textNumber}>
                    {number}
                </span>
                <button
                    type='button'
                    onClick={() => onDeleteContact(id)}
                    className={css.btnDel}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
);


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    DeleteContactews: PropTypes.func,
}
