import { useRef } from "react";
import { Animated } from "react-native";

type useSwipeAnimationReturnType = {
    swipeData: Animated.Value;
    swipeLeft: () => void;
    swipeRight: () => void;
}

export function useSwipeAnimation(initValue: number, toValue: number, duration: number, startAnimationValue: number): useSwipeAnimationReturnType {
    const swipeData = useRef(new Animated.Value(initValue)).current;

    const swipeLeft = () => {
        swipeData.setValue(startAnimationValue)
        Animated.timing(swipeData,  {
            toValue: toValue,
            duration: duration,
            useNativeDriver: false,
        }).start();
    }
    const swipeRight = () => {
        swipeData.setValue(-startAnimationValue)
        Animated.timing(swipeData,  {
            toValue: toValue,
            duration: duration,
            useNativeDriver: false,
        }).start();
    }

    return {swipeLeft, swipeRight, swipeData};
}