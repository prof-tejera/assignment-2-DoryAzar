import { useContext } from 'react';
import {  TimerContext } from '../platform/TimerProvider'; 
import { useTimerStarter,useTimerInitializer  } from './common';

export const useTimer = (settings) => {

    const { dispatchSettings, ...context } = useContext(TimerContext);

    useTimerInitializer(settings, context)
    useTimerStarter(context);
  
}