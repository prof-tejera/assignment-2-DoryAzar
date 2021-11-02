import { useContext } from 'react';
import {  TimerContext } from '../platform/TimerProvider'; 
import { useTimerStarter, useTimerInitializer  } from './timerhooks';
import { TIMER_SETTINGS } from '../utils/helpers';

export const useTimer = () => {

    const { ...context } = useContext(TimerContext);
    const { selectedTimer } = context;

    useTimerInitializer(TIMER_SETTINGS.settings[selectedTimer], context);

    useTimerStarter(context);

  
}