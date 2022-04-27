import React from "react";
import { View } from "react-native";

import FastImage from "react-native-fast-image";

const FastImageLoader = ({ source = null, style = {}, URI = false, contain = false, justify = false, align = false, flex = true }) => {
    return (
        <View style={{ flex: flex ? 1 : 0, justifyContent: justify ? 'center' : 'flex-start', alignSelf: align ? 'center' : "flex-start" }}>
            <FastImage
                style={style}
                source={URI ? { uri: source } : source}
                resizeMode={contain ? FastImage.resizeMode.contain : FastImage.resizeMode.cover}
            />
        </View>
    )
}
export default FastImageLoader;