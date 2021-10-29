// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

export function readCollection(arr, keyName)  {
    return arr.map((item) => {
        return item[keyName];
    });
}



export function getTimer(timerName, arr)  {
    function isTimer(timer) {
        return timer.title === timerName;
    }
    return arr.find((isTimer)).C;
}
