import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

import FastImageLoader from "../components/FastImageLoader";
import { logo, bg, arrow, blue_arrow, man, phone, round, hotspot, star, book, flag, mouse, fb, insta, horizontal_logo, copyrights } from "../components/Icon";
import { Collector, Copyrights, Description, Medium, Register, Title, Track } from "../components/Typography";
import { colors, normalize } from "../components/Utils";
import { BOOKTEXT, DESCRIPTION, MANTEXT, ROUNDTEXT } from "../constants";
import styles from "../assets/styles";


export default function LandingPage({ navigation, }) {

    const getdetails = (img, text, style) => {
        return (
            <>
                <View style={{ paddingTop: normalize(60), left: normalize(40) }}>
                    <FastImageLoader source={img} style={style} contain={true} />
                    <Title style={{ paddingTop: normalize(30) }} >{"lorem ipsum \n is used"}</Title>
                </View>
                <View style={{ paddingHorizontal: normalize(40), paddingTop: normalize(20) }}>
                    <Description>{text}</Description>
                </View>
            </>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>
            <StatusBar
                backgroundColor="#d8d8d8"
                hidden={false} />
            <View style={{ paddingLeft: normalize(25), paddingTop: normalize(35) }}>
                <FastImageLoader source={logo} style={{ height: normalize(77), width: normalize(211) }} contain={true} />
            </View>
            <View style={{ top: normalize(60), right: normalize(150) }} >
                <FastImageLoader source={bg} style={{ height: normalize(329), width: normalize(750) }} contain={true} />
            </View>
            <View style={{ paddingTop: normalize(70), alignSelf: 'center', paddingHorizontal: normalize(50) }} >
                <Description style={{ textAlign: "center" }} >{DESCRIPTION}</Description>
            </View>
            <View style={{ paddingTop: normalize(40), flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.button, { flexDirection: 'row' }]} onPress={() => navigation.navigate("Profile")} >
                    <View style={{ left: normalize(10) }}>
                        <FastImageLoader source={arrow} style={{ width: normalize(20), height: normalize(18) }} contain={true} justify={true} align={true} />
                    </View>
                    <View style={{ left: normalize(18) }} >
                        <Register style={{ textAlign: 'center' }} >{'register'}</Register>
                    </View>
                </TouchableOpacity>
                <View style={{ paddingLeft: normalize(60) }} >
                    <Collector>{'me as a collector'}</Collector>
                </View>
            </View>
            <View style={{ paddingTop: normalize(30) }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
                    <View>
                        <FastImageLoader source={blue_arrow} style={{ height: normalize(11), width: normalize(12) }} justify={true} align={true} />
                    </View>
                    <View>
                        <Track>{'track my application'}</Track>
                    </View>
                </View>
            </View>
            {getdetails(man, MANTEXT, { height: normalize(94), width: normalize(90) })}
            {getdetails(phone, MANTEXT, { height: normalize(82), width: normalize(50) })}
            {getdetails(round, ROUNDTEXT, { height: normalize(80), width: normalize(77) })}
            {getdetails(hotspot, ROUNDTEXT, { height: normalize(77), width: normalize(75) })}
            {getdetails(star, ROUNDTEXT, { height: normalize(80), width: normalize(83) })}
            {getdetails(book, BOOKTEXT, { height: normalize(64), width: normalize(74) })}
            {getdetails(flag, ROUNDTEXT, { height: normalize(69), width: normalize(36) })}
            {getdetails(mouse, ROUNDTEXT, { height: normalize(79), width: normalize(43) })}
            <View style={{ paddingVertical: normalize(50), flexDirection: 'row', alignSelf: 'center' }}>
                <View>
                    <FastImageLoader source={fb} style={{ height: normalize(32), width: normalize(33) }} align={true} justify={true} />
                </View>
                <View style={{ paddingLeft: normalize(15) }} />
                <View>
                    <FastImageLoader source={insta} style={{ height: normalize(32), width: normalize(32) }} align={true} justify={true} />
                </View>
            </View>
            <View style={{ borderTopWidth: 2, borderColor: colors.white2, borderBottomWidth: 2, marginHorizontal: normalize(21) }}>
                <View style={{ paddingTop: normalize(20) }}>
                    <FastImageLoader source={horizontal_logo} style={{ height: normalize(35), width: normalize(260) }} align={true} contain={true} />
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: normalize(47), justifyContent: 'space-between', paddingTop: normalize(25) }}>
                    <Medium>{'About Us.'}</Medium>
                    <Medium>{'Affiliattions.'}</Medium>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: normalize(47), justifyContent: 'space-between', paddingTop: normalize(15) }}>
                    <Medium>{'Team.'}</Medium>
                    <Medium>{'Disclaimers.'}</Medium>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: normalize(47), justifyContent: 'space-between', paddingTop: normalize(15), paddingBottom: normalize(25) }}>
                    <Medium>{'Reach us.'}</Medium>
                    <Medium>{'Privacy Policy'}</Medium>
                </View>
            </View>

            <View style={{ flexDirection: 'row', paddingVertical: normalize(30),alignSelf:'center' }}>
                <View>
                    <FastImageLoader source={copyrights} style={{ height: normalize(25), width: normalize(25)}} contain={true} />
                </View>
                <View style={{ top: 3, left:5 }}>
                    <Copyrights>{'Content Copyright reserved'}</Copyrights>
                </View>
            </View>

        </ScrollView>
    )
}