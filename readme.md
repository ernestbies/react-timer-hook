## react-timer-hook

React timer hook is a custom [react hook](https://reactjs.org/docs/hooks-intro.html), built to handle timer, stopwatch, and time logic/state in your react component.

1. `useTimer`: Timers (countdown timer)
2. `useStopwatch`: Stopwatch (count up timer)
3. `useTime`: Time (return current time)

---

## Setup

`yarn add react-timer-hook` OR `npm install --save react-timer-hook`

---

## `useTimer` - [Demo](https://amrlabib.github.io/react-timer-hook/)

### Example

```javascript
import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
```

### Settings

| key | Type | Required | Description |
| --- | --- | --- | ---- |
| expiryTimestamp | Date object | YES | this will define for how long the timer will be running   |
| autoStart | boolean | No | flag to decide if timer should start automatically, by default it is set to `true` |
| onExpire | Function | No | callback function to be executed once countdown timer is expired |


### Values

| key | Type | Description |
| --- | --- | ---- |
| seconds | number | seconds value |
| minutes | number | minutes value |
| hours | number | hours value |
| days | number | days value |
| totalSeconds | number | total number of seconds left in timer NOT converted to minutes, hours or days |
| isRunning | boolean | flag to indicate if timer is running or not |
| pause | function | function to be called to pause timer |
| start | function | function if called after pause the timer will continue based on original expiryTimestamp |
| resume | function | function if called after pause the timer will continue countdown from last paused state |
| restart | function | function to restart timer with new expiryTimestamp, accept 2 arguments first is the new `expiryTimestamp` of type Date object and second is `autoStart` of type boolean to decide if it should automatically start after restart or not, default is `true` |


---

## `useStopwatch` - [Demo](https://amrlabib.github.io/react-timer-hook/)

### Example

```javascript
import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
```

### Settings

| key | Type | Required | Description |
| --- | --- | --- | ---- |
| autoStart | boolean | No | if set to `true` stopwatch will auto start, by default it is set to `false` |
| offsetTimestamp | Date object | No | this will define the initial stopwatch offset example: `const stopwatchOffset = new Date(); stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + 300);` this will result in a 5 minutes offset and stopwatch will start from 0:0:5:0 instead of 0:0:0:0 |

### Values

| key | Type | Description |
| --- | --- | ---- |
| seconds | number | seconds value |
| minutes | number | minutes value |
| hours | number | hours value |
| days | number | days value |
| totalSeconds | number | total number of seconds in stopwatch NOT converted to minutes, hours or days |
| isRunning | boolean | flag to indicate if stopwatch is running or not |
| start | function | function to be called to start/resume stopwatch |
| pause | function | function to be called to pause stopwatch |
| reset | function | function to be called to reset stopwatch to 0:0:0:0, you can also pass offset parameter to this function to reset stopwatch with offset, similar to how `offsetTimestamp` will offset the initial stopwatch time, this function will accept also a second argument which will decide if stopwatch should automatically start after reset or not default is `true` |


---


## `useTime` - [Demo](https://amrlabib.github.io/react-timer-hook/)

### Example

```javascript
import React from 'react';
import { useTime } from 'react-timer-hook';

function MyTime() {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour'});

  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Current Time Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyTime />
    </div>
  );
}
```

### Settings

| key | Type | Required | Description |
| --- | --- | --- | ---- |
| format | string | No | if set to `12-hour` time will be formatted with am/pm |

### Values

| key | Type | Description |
| --- | --- | ---- |
| seconds | number | seconds value |
| minutes | number | minutes value |
| hours | number | hours value |
| ampm | string | am/pm value if `12-hour` format is used |


---

### Deprecation Warning:

Starting from `v1.1.0` and above default export `useTimer` is deprecated, your old code will still work but it is better to start using named exports `{ useTimer, useStopwatch, useTime }`
