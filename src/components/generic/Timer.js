import { useContext  } from 'react';
import {  TimerContext } from '../../platform/TimerProvider';
import { TIMER_SETTINGS } from '../../utils/helpers';
import PropTypes from 'prop-types';
import Card from "./Card/Card";
import Display from "./Display/Display";
import Input from "./Input/Input";
import Button  from "./Button/Button";
import className from 'classnames';

const Timer = () => {

  const { ...context } = useContext(TimerContext);
  const { resetTimer, timerCounting, toggleCounting, toggleSide, completeTimer, selectedTimer, isComplete, setSettings } = context;
  const settings = TIMER_SETTINGS.schema[selectedTimer];


  const playButtonStyle = [{
    "primary": true,
    "disabled": isComplete
  }];


  // Flips the card to display settings
  const flipSide = () => {
      toggleSide();
      const card = document.querySelector("#timer_panel");
      if (card) card.classList.toggle('is-flipped');
  }

  // Save settings
  const saveSettings  = () => {
    const inputSettings = {};
    settings.forEach((setting) => {
      const input = document.querySelector(`#${setting.id}`)?.value;
      inputSettings[setting.id] = input;

    });
    setSettings(inputSettings);
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
            {timerCounting &&
                  <Button 
                      id = "pause_btn"
                      value="pause"
                      classifiers="primary"
                      isIconButton={true} 
                      onClick={toggleCounting} 
                      iconName="pause"
                  />
            }

            {!timerCounting &&
                  <Button 
                      id = "start_btn"
                      value="start"
                      classifiers={className(playButtonStyle)}
                      isIconButton={true} 
                      onClick={toggleCounting} 
                      iconName="play"
                  />
            
            }

            {timerCounting && 
              <Button 
              id = "complete"
              value="complete"
              classifiers = "primary"
              isIconButton = {true}
              onClick={completeTimer}
              iconName="play-forward-outline"
            />
            
            }
            {!timerCounting &&
              <Button 
                id = "reset_btn"
                value="reset"
                classifiers = "primary"
                isIconButton = {true}
                onClick={reset}
                iconName="refresh-outline"
              />
            }
          
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
              <div className="settings-form" id="inputs">
                  {settings.map((setting, index) => 
                      <Input key={index}
                             label={setting.label} 
                              placeholder={setting.placeholder} 
                              value={context[setting.id]}
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
