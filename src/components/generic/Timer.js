import { useContext } from 'react';
import {  AppContext } from '../../platform/AppProvider';
import PropTypes from 'prop-types';
import Card from "./Card/Card";
import Display from "./Display/Display";
import Input from "./Input/Input";
import Button  from "./Button/Button";
// import * as utils from "../../utils/helpers";

const Timer = ({ settings }) => {

  const { setDisplayTime, timerCounting, toggleCounting, toggleSide, resetTimer} = useContext(AppContext);

  // Toggle the counter and hand-off to parent timer
  const toggleCount = (e) => {
    toggleCounting();
  }

  // Flips the card to display settings
  const flipSide = () => {
      toggleSide();
      const card = document.querySelector("#timer_panel");
      if (card) card.classList.toggle('is-flipped');
  }

  // Save settings
  const saveSettings  = (e) => {
    setDisplayTime(document.querySelector("#startTime")?.value 
    || document.querySelector("#rest")?.value 
    || null);

    flipSide();
    
  }

  // Reset the counter
  const reset = () => {
    resetTimer();
  }


  return (
    <>
      <Card side="front">
        <Display  />

        <div className="btn_bar">
            {timerCounting  &&
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
                              id={setting.id}
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
  displayTime: PropTypes.string,
  onChange: PropTypes.func
}

export default Timer;
