import { useState } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const Input = ({...props}) => {
    
    const { label, placeholder, ...inputAttributes } = props;
    const [value, setValue] = useState(props.value ?? "")

    const handleChange = (e) => {
        setValue(e.target.value);
        if (props.onChange) props.onChange(e);
    }

    return (
        <>
        {label && 
            <fieldset>
                <label className="settings-label" >{label}</label>
                <input  {...inputAttributes} value={value} placeholder={placeholder} onChange={handleChange} />
            </fieldset>
        }
        </>
    );

}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default Input;