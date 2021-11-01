import { useContext } from 'react';
import {  TimerContext } from '../platform/TimerProvider'; 
import { useTimerStarter,useTimerInitializer  } from './common';

export const useTimer = (settings) => {

    const { ...context } = useContext(TimerContext);

    useTimerInitializer(settings, context)
    useTimerStarter(context);
  
}