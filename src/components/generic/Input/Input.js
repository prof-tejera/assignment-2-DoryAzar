import { Component } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value?? ""
        }
    }

    handleChange = (e) => {
        this.setState(() => {
            return {
                value: e.target.value 
            };
        });
        if (this.props.onChange) this.props.onChange(e);
    }

    render() {
        const { label, placeholder, ...inputAttributes } = this.props;
        return (
            <>
            {label && 
                <fieldset>
                    <label className="settings-label" >{label}</label>
                    <input  {...inputAttributes} value={this.state.value} placeholder={placeholder} onChange={this.handleChange} />
                </fieldset>
            }
            </>
        );
    }

}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default Input;