import React from "react";
import { View, Text } from 'react-native';

import FastImageLoader from "../components/FastImageLoader";
import { logo, bg } from "../components/Icon";
import { normalize } from "../components/Utils";


export default function LandingPage() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingLeft: 25, paddingTop: 31 }}>
                <FastImageLoader source={logo} style={{ height: normalize(77), width: normalize(211) }} contain={true} />
            </View>
            <View style={{ top:normalize(60),right : normalize(150) }} >
                <FastImageLoader source={bg} style={{ height: normalize(329), width: normalize(750) }} contain={true} />
            </View>
        </View>
    )
}