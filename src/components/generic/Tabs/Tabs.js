import { Component } from 'react';
import { Fragment } from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

class Tabs extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tabSelected: props.tabItems? props.tabItems[0] : ""
        }
    }

    handleChange =  (e) => {
        const value = e.target.value || this.state.tabSelected;
        this.setState(() => { 
            return {
                tabSelected: value
            }
        });
        if (this.props.onChange) this.props.onChange(e.target.value);
    }
    
    render() {

        const { tabItems = []  } = this.props;

        return  (
            <div className="btn_bar">
                <div className="tab_control">
                    { tabItems.length <= 4 && tabItems.map((tabItem, index) =>
                        <Fragment key={index}>
                            <input  type="radio" 
                                    name={"radio" + (index + 1)} 
                                    value={tabItem} 
                                    id={"tab-" + (index + 1)} 
                                    checked={this.state.tabSelected === tabItem} 
                                    onChange={this.handleChange}
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
        )


    }

}


Tabs.propTypes = {
    tabItems: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
}

export default Tabs;