import { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "./Card/Card";
import Display from "./Display/Display";
import Input from "./Input/Input";
import Button  from "./Button/Button";

class Timer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timerCounting: false,
      isFrontSide: true,
      statusMessage: props.statusMessage || "",
      counter: props.startTime || "00:00:00"
    };
  }

  // Toggle the counter and hand-off to parent timer
  toggleCount = (e) => {
    this.setState(({ timerCounting }) => {
      return {
        timerCounting: !timerCounting
      };
    });
    if (this.props.onChange) this.props.onChange(e);
  } 

  // Flips the card to display settings
  flipSide = () => {
    this.setState(({ isFrontSide }) => {
      return {
        isFrontSide: !isFrontSide
      };
    });
    const card = document.querySelector("#timer_panel");
    if (card) card.classList.toggle('is-flipped');
  }

  // Save settings
  saveSettings  = (e) => {
    console.log(e.target);
  }

  // Reset the counter
  reset = (e) => {
    this.setState(() => {
      return {
        counter: this.props.startTime || "00:00:00"
      };
    });
    console.log("reset");
  }

  render() {
    
    const { settings = null } = this.props; 

    return (
      <>
        <Card side="front">
          <Display isStarted={this.state.timerCounting} 
                   status = { this.state.statusMessage}
                   value={this.state.counter} />

          <div className="btn_bar">
              {this.state.timerCounting &&
                    <Button 
                        id = "pause_btn"
                        value="pause"
                        classifiers="primary" 
                        isIconButton={true} 
                        onClick={this.toggleCount} 
                        iconName="pause"
                    />
              }
              {!this.state.timerCounting && 
                    <Button 
                        id = "start_btn"
                        value="start"
                        classifiers="primary" 
                        isIconButton={true} 
                        onClick={this.toggleCount} 
                        iconName="play"
                    />
              
              }

              <Button 
                id = "reset_btn"
                value="reset"
                classifiers = "primary"
                isIconButton = {true}
                onClick={this.reset}
                iconName="refresh-outline"
              />
            
              {settings && <Button 
                id = "settings_btn"
                value="settings"
                classifiers = "secondary"
                isIconButton = {true}
                onClick={this.flipSide}
                iconName="settings"
              />}
          </div>
        </Card>
        <Card side="back">
              <h1>Settings</h1>
              {settings && 
                <div className="settings-form">
                    {settings.map((setting, index) =>  
                        <Input key={index} 
                               label={setting.label} 
                                placeholder={setting.placeholder} 
                                value={setting.value} 
                                id={`settings${index}`}
                        />)
                    }
                </div>
                }
              <div className="btn_bar">
                <Button 
                    id = "back_btn"
                    value="back"
                    isIconButton = {true}
                    onClick={this.flipSide}
                    iconName="arrow-back-outline"
                />
                <Button onClick={this.saveSettings}>
                  Save
                </Button>
              </div>
        </Card>
      </>
    );
  }
}

Timer.propTypes = {
  settings: PropTypes.array,
  statusMessage: PropTypes.string,
  startTime: PropTypes.string,
  onChange: PropTypes.func
}

export default Timer;
