import React from "react";
import { View, ScrollView } from 'react-native';

import FastImageLoader from "../components/FastImageLoader";
import { header_logo, user, plus, menu, upload, photo, edit, round_button, share, curser, heart, gallery, upload_black, revenue, image1, image2, image3, image4, image5, image6 } from "../components/Icon";
import { Color, Followers, Little, ProfileName, Regular, TabName } from "../components/Typography";

import { colors, normalize } from "../components/Utils";

export default function Profile() {
    return (
        <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false} >
            {/* <View style={{ flexDirection: 'row', paddingTop: normalize(25), justifyContent: 'space-between' }} >
                <View style={{ left: normalize(25) }} >
                    <FastImageLoader source={header_logo} style={{ height: normalize(28), width: normalize(86) }} justify={true} align={true} />
                </View>
                <View style={{ alignSelf: 'flex-end',top: 20 }} >
                    <View style={{ height: normalize(33), width: normalize(33), backgroundColor: colors.cherry, borderRadius: normalize(20), right: normalize(142),  }} >
                        <FastImageLoader source={user} style={{ height: normalize(19), width: normalize(18) }} justify={true} align={true} />
                    </View>
                    <View style={{ right: normalize(80), bottom: 25 }}>
                        <FastImageLoader source={plus} style={{ height: normalize(17), width: normalize(17) }}  />
                    </View>
                    <View style={{ bottom: 40 }}>
                        <FastImageLoader source={menu} style={{ height: normalize(13), width: normalize(17) }}  />
                    </View>
                </View>
            </View> */}
            <View style={{ flexDirection: 'row', paddingTop: 50, justifyContent:'space-evenly' }}>
                <View style = {{right:normalize(50)}}>
                    <FastImageLoader source={header_logo} style={{ height: normalize(28), width: normalize(86) }} />
                </View>
                <View style = {{flexDirection:'row'}} >
                    <View style={{ height: normalize(33), width: normalize(33), backgroundColor: colors.cherry, borderRadius: normalize(20), right:18 }}>
                        <FastImageLoader source={user} style={{ height: normalize(19), width: normalize(18) }} justify={true} align={true} />
                    </View>
                    <View style = {{top : 10,left : normalize(15)}} >
                        <FastImageLoader source={plus} style={{ height: normalize(17), width: normalize(17) }} />
                    </View>
                    <View style = {{top:13, left : normalize(50)}} > 
                    <FastImageLoader source={menu} style={{ height: normalize(13), width: normalize(17) }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: normalize(15), justifyContent: 'space-evenly' }}>
                <View>
                    <FastImageLoader source={upload} style={{ height: normalize(33), width: normalize(28) }} justify={true} />
                </View>
                <View>
                    <FastImageLoader source={photo} style={{ height: normalize(127), width: normalize(127) }} justify={true} />
                </View>
                <View>
                    <FastImageLoader source={edit} style={{ height: normalize(27), width: normalize(27) }} justify={true} contain={true} />
                </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <ProfileName>{'john.doe'}</ProfileName>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: normalize(25) }}>
                <Little>{'My dashboard'}</Little>
                <View style={{ width: normalize(46), height: normalize(17), backgroundColor: colors.midGreen, borderRadius: normalize(8) }}>
                    <View style={{ paddingTop: normalize(10), left: normalize(20) }}>
                        <FastImageLoader source={round_button} style={{ width: normalize(35), height: normalize(35) }} justify={true} />
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: normalize(15) }} />
            <View style={{ borderTopWidth: 2, borderColor: colors.white2, borderBottomWidth: 2, marginHorizontal: normalize(21), paddingVertical: normalize(10) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Followers style={{ right: normalize(30) }} >{'2.3K'}</Followers>
                    <Followers>{'50'}</Followers>
                    <Followers style={{ left: normalize(20) }} >{'21'}</Followers>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Little style={{ right: normalize(15) }} >{'Followers'}</Little>
                    <Little style={{ left: normalize(15) }} >{'Artworks'}</Little>
                    <Little style={{ left: normalize(20) }} >{'Exhibitions'}</Little>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', right: 5 }} >
                <View style={{ left: 10 }}>
                    <FastImageLoader source={heart} style={{ width: normalize(19), height: normalize(16), top: 20 }} contain={true} />
                    <Regular style={{ left: normalize(25) }}>{'120'}</Regular>
                </View>
                <View style={{ right: normalize(20) }}>
                    <FastImageLoader source={curser} style={{ width: normalize(16), height: normalize(16), top: 20, }} contain={true} />
                    <Regular style={{ left: normalize(25) }}>{'43K'}</Regular>
                </View>
                <View style={{ right: normalize(50) }} >
                    <FastImageLoader source={share} style={{ width: normalize(14), height: normalize(16), top: 20 }} contain={true} />
                    <Regular style={{ left: normalize(25) }}>{'2.3K'}</Regular>
                </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: normalize(20), paddingHorizontal: normalize(15) }}>
                <View style={{ height: normalize(42), width: normalize(68), backgroundColor: colors.darkgrey, justifyContent: "center" }}>
                    <Color style={{ alignSelf: 'center' }} >{'pallette'}</Color>
                </View>
                <View style={{ height: normalize(42), width: normalize(68), backgroundColor: colors.darkred }} />
                <View style={{ height: normalize(42), width: normalize(68), backgroundColor: colors.cherry }} />
                <View style={{ height: normalize(42), width: normalize(68), backgroundColor: colors.red }} />
                <View style={{ height: normalize(42), width: normalize(68), backgroundColor: colors.yellow }} />
            </View>
            <View style={{ paddingTop: normalize(30) }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View><FastImageLoader source={upload_black} style={{ height: normalize(35), width: normalize(29) }} /></View>
                    <View><FastImageLoader source={gallery} style={{ height: normalize(31), width: normalize(31) }} /></View>
                    <View><FastImageLoader source={revenue} style={{ height: normalize(28), width: normalize(33) }} /></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: normalize(10) }}>
                    <TabName style={{ left: normalize(10) }}  >{'Uploads'}</TabName>
                    <TabName>{'Exhibitions'}</TabName>
                    <TabName style={{ right: normalize(10) }} >{'Revenue'}</TabName>
                </View>
            </View>
            <View style={{ width: normalize(70), height: 2, backgroundColor: colors.yellow, left: normalize(55), top: 10 }} />
            <View style={{ paddingTop: normalize(30), paddingBottom: normalize(50) }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', left: normalize(10) }}>
                    <FastImageLoader source={image1} style={{ height: normalize(168), width: normalize(167) }} />
                    <FastImageLoader source={image2} style={{ height: normalize(168), width: normalize(167) }} />
                </View>
                <View style={{ flexDirection: 'row', paddingTop: normalize(10), left: normalize(10) }}>
                    <FastImageLoader source={image3} style={{ height: normalize(168), width: normalize(167) }} />
                    <FastImageLoader source={image4} style={{ height: normalize(168), width: normalize(167) }} />
                </View>
                <View style={{ flexDirection: 'row', paddingTop: normalize(10), left: normalize(10) }}>
                    <FastImageLoader source={image5} style={{ height: normalize(168), width: normalize(167) }} />
                    <FastImageLoader source={image6} style={{ height: normalize(168), width: normalize(167) }} />
                </View>
            </View>
        </ScrollView>
    )
} 