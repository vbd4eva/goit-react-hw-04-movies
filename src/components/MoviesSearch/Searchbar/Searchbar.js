import { useState } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './Searchbar.module.css';

const text = {
    EMTY_ALERT: "to finds some, needs type some",
    PLACEHOLDER: "Type to search movies"
}

export default function Searchbar({onSubmit}) {

    const [searchQuery, setSearchQuery] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const searchFormQuery = searchQuery.trim();

        // searchQuery - is emty
        if (!searchFormQuery) {
            toast(text.EMTY_ALERT);
            setSearchQuery('');
            return;
        }


        onSubmit(searchFormQuery.toLowerCase());
    }

     return (
        <>
            <div className={s.Searchbar} id="searchbar">
                <form className={s.form}
                     onSubmit={submitForm}
                 >
                    <button type="submit" className={s.button}>
                        <span className={s.label}>Search</span>
                    </button>

                    <input
                        className={s.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder={text.PLACEHOLDER}
                        onChange={e=>setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                </form>
            </div>
            <ToastContainer/>
         </>
         
        )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}