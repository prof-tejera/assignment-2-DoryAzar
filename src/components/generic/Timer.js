import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from "./Card/Card";
import Display from "./Display/Display";
import Input from "./Input/Input";
import Button  from "./Button/Button";

const Timer = ({...props}) => {

  const { settings = null } = props;
  const [timerCounting, setTimerCounting] = useState(false);
  const [isFrontSide, setFront] =  useState(true);
  const [statusMessage] = useState(props.statusMessage ||  "");
  const [counter, setCounter] = useState(props.startTime || "00:00:00");

  // Toggle the counter and hand-off to parent timer
  const toggleCount = (e) => {
      setTimerCounting(!timerCounting);
      if (props.onChange) props.onChange(e);
  }

  // Flips the card to display settings
  const flipSide = () => {
      setFront(!isFrontSide);
      const card = document.querySelector("#timer_panel");
      if (card) card.classList.toggle('is-flipped');
  }

  // Save settings
  const saveSettings  = (e) => {
    console.log(e.target);
  }

  // Reset the counter
  const reset = (e) => {
    setCounter(props.startTime || "00:00:00");
    console.log("reset");
  }

  return (
    <>
      <Card side="front">
        <Display isStarted={timerCounting} 
                 status = { statusMessage}
                 value={counter} />

        <div className="btn_bar">
            {timerCounting &&
                  <Button 
                      id = "pause_btn"
                      value="pause"
                      classifiers="primary" 
                      isIconButton={true} 
                      onClick={toggleCount} 
                      iconName="pause"
                  />
            }
            {!timerCounting && 
                  <Button 
                      id = "start_btn"
                      value="start"
                      classifiers="primary" 
                      isIconButton={true} 
                      onClick={toggleCount} 
                      iconName="play"
                  />
            
            }

            <Button 
              id = "reset_btn"
              value="reset"
              classifiers = "primary"
              isIconButton = {true}
              onClick={reset}
              iconName="refresh-outline"
            />
          
            {settings && <Button 
              id = "settings_btn"
              value="settings"
              classifiers = "secondary"
              isIconButton = {true}
              onClick={flipSide}
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
                  onClick={flipSide}
                  iconName="arrow-back-outline"
              />
              <Button onClick={saveSettings}>
                Save
              </Button>
            </div>
      </Card>
    </>
  );


  
}

Timer.propTypes = {
  settings: PropTypes.array,
  statusMessage: PropTypes.string,
  startTime: PropTypes.string,
  onChange: PropTypes.func
}

export default Timer;
