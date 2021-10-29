import { useState } from 'react';
import { Fragment } from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

const Tabs = ({...props}) => {
    const { tabItems = []  } = props;
    const [tabSelected, setTabSelected] = useState(tabItems? tabItems[0] : "");
    
    const handleChange =  (e) => {
        const value = e.target.value || tabSelected;
        setTabSelected(value)
        if (props.onChange) props.onChange(e.target.value);
    }

    return  (
        <div className="btn_bar">
            <div className="tab_control">
                { tabItems.length <= 4 && tabItems.map((tabItem, index) =>
                    <Fragment key={index}>
                        <input  type="radio" 
                                name={"radio" + (index + 1)} 
                                value={tabItem} 
                                id={"tab-" + (index + 1)} 
                                checked={tabSelected === tabItem} 
                                onChange={handleChange}
                        />
                        <label htmlFor={"tab-" + (index + 1)} 
                                className={"tab_control_" + (index+1)}>
                            <p>{tabItem}</p>
                        </label>
                    </Fragment>
                )}
                <div className="tab_control_color"></div>
            </div>
        </div>
    );
}


Tabs.propTypes = {
    tabItems: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
}

export default Tabs;