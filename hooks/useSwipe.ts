import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

export function useSwipe(onSwipeLeft?: () => void, onSwipeRight?: () => void, rangeOffSet = 4) {
    let firstTouch = 0;

    function onTouchStart(e: any) {
        firstTouch = e.nativeEvent.pageX;
    }

    function onTouchEnd(e: any) {
        const positionX = e.nativeEvent.pageX;
        const range = windowWidth / rangeOffSet;

        if(positionX - firstTouch > range) {
            onSwipeRight && onSwipeRight();
            return;
        }

        if(firstTouch - positionX > range) {
            onSwipeLeft && onSwipeLeft();
            return;
        }

    }

    return {onTouchStart, onTouchEnd}
}