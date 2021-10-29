import { Component } from 'react';
import './Button.css';
import className from 'classnames';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    
		const { 
                id,
                value = "",
                isIconButton = false, 
                iconName = "", 
                classifiers = "btn_primary", 
                iconVisible = true,
                children, 
                ...buttonAttributes} = this.props;
		
        const buttonStyle = [{
            "icon_btn": isIconButton,
            "btn": !isIconButton
        }];

        const iconVisibility = [{
            "show": iconVisible,
            "hide": !iconVisible
        }];
        
		return (   

            // Returns a stylized text or icon button
            <div id={id} value={value} className={className(buttonStyle, classifiers)} { ...buttonAttributes} >
                { isIconButton && 
                    <ion-icon value={value} class={className(iconVisibility)} name={iconName}></ion-icon>
                }
                {!isIconButton && children}
            </div>
		);
	}
}

Button.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    isIconButton:  PropTypes.bool,
    iconName: PropTypes.string,
    classifiers: PropTypes.string,
    iconVisible: PropTypes.bool,
	onClick: PropTypes.func.isRequired
}

export default Button;
