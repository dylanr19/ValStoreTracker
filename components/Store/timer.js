import {Text} from "react-native";
import { useEffect, useState} from "react";

const Timer = ({ timerState, setTimerState }) => {

    const [timeFormat, setTimeFormat] = useState('00:00:00:00'); // saves the state in time format

    const updateTimer = () => {
        setTimerState(prevTimerState => {
            if (prevTimerState !== 0) {
                return prevTimerState - 1;
            }
        });
    };

    const convertSecondsToTime = () => {

        const durationInSeconds = timerState;

        const days = Math.floor(durationInSeconds / (60 * 60 * 24));
        const hours = Math.floor((durationInSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
        const seconds = durationInSeconds % 60;

        const formattedTime = `${days}:${hours}:${minutes}:${seconds}`;
        setTimeFormat(formattedTime);
    }

    // This will start the timer
    useEffect(() => {

        // update the timer state per 1000ms
        const interval = setInterval(() => {
            updateTimer();
        }, 1000);

        // avoid memory leaks
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        convertSecondsToTime();
    }, [timerState]);

    return(
        <Text style={{color: "#71FF5A"}}>{timeFormat}</Text>
    );
}

export default Timer;