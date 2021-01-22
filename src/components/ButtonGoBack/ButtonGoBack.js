import PropTypes from "prop-types";
import s from './ButtonGoBack.module.css';

export default function ButtonGoBack({ onClick }) {
    
  return (
        <button
            className={s.btn}
            onClick={onClick}
        >
            <span className={s.btnText}>
                return to previous page
            </span>
        </button>
    );
}

ButtonGoBack.propTypes = {
    onClick: PropTypes.func.isRequired,
}


