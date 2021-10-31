import React from 'react';
import { useTimer } from '../hooks/useTimer';
import { T_STOPWATCH } from '../utils/helpers';

export const AppContext = React.createContext({});


export const AppProvider = ({ timer = T_STOPWATCH, children }) => {
    const { initializeTimer, ...settings }  = useTimer(timer);

    return <AppContext.Provider 
            value={{ ...settings}}>
            {children}
        </AppContext.Provider>;
};

export default AppProvider;