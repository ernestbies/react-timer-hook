import useTimer from "./useTimer";
import useStopwatch from "./useStopwatch";
import useTime from "./useTime";

export { useTimer, useStopwatch, useTime };

// This deprecated default export is just to avoid breaking old versions code before v1.1.0
export default function useTimerDeprecated(settings) {
    // didMount effect

    if (settings.expiryTimestamp) {
        const values = useTimer(settings); // eslint-disable-line
        return {
            ...values,
            startTimer: values.start,
            stopTimer: values.pause,
            resetTimer: () => {},
        };
    }

    const values = useStopwatch(settings); // eslint-disable-line
    return {
        ...values,
        startTimer: values.start,
        stopTimer: values.pause,
        resetTimer: values.reset,
    };
}
