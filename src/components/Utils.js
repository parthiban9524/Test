import { Dimensions, Platform, PixelRatio } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;


export const normalize = (size) => {
    const scale = screenWidth / 375;
    const newSize = size * scale;
    if (Platform.OS == 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

export const colors = {
    purpleBrown: "#231f20",
    windowsblue: "#3a8ec1",
    conflowerblue: "#597ddf",
    midGreen: "#44a33d",
    warmGrey: "#878787",
    black: "#000000",
    white: "#FFFFFF",
    white2:"#d8d8d8",
    tealblue: "#007db2",
    softblue: "#6083e0",
    cherry: "#d90034",
    yellow: "#ffb500",
    purple: "#97448f",
    red: "#ff0000",
    tomoto: "#ec5151",
    blue: "#6385e1",
    darkgrey : "#5f0d47",
    darkred : "#9e023d"
}

export const fonts = {
    extralight: "BarlowCondensed-ExtraLight",
    light: "BarlowCondensed-Light",
    medium: "BarlowCondensed-Medium",
    extra: "Barlow-ExtraLight",
    med:"Barlow-Medium"
}

export const size = { 
    huge : normalize(36),
    big : normalize(32),
    medium: normalize(28),
    average : normalize(24),
    regular : normalize(18),
    normal: normalize(16),
    little : normalize(14)
};