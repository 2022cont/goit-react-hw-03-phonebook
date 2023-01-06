import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './Form.module.css';

class Form extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        onSubmit: PropTypes.func,
    };

    state = {
        name: '',
        number: '',
    };

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddSubmit = event => {
        event.preventDefault();
        if (this.props.contacts.find(element => element.name === this.state.name)) {
            this.reset();
            return alert(this.state.name + " is already in contacts")
        } else {
            this.props.onSubmit({ id: nanoid(4), name: this.state.name, number: this.state.number });
        }

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form className={css.form} onSubmit={this.handleAddSubmit}>
                <label className={css.labelForm}>Name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // className={css.inputForm}
                        required

                        onChange={this.handleInput}
                    />
                
                <label className={css.labelForm}>Number</label>
                    <input
                        value={this.state.number}
                        type="text"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        // className={css.inputForm}
                        required

                        onChange={this.handleInput}
                    />
                

                <button type='submit' className={css.btnSubmit} >ADD contact</button>
            </form>)
    }
};

export default Form;