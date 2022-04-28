import { StyleSheet } from "react-native";
import { colors, normalize } from "../../components/Utils";

const styles = StyleSheet.create({

    button: {
        left: normalize(50),
        height: normalize(43),
        width: normalize(123),
        borderRadius: 9,
        backgroundColor: colors.tomoto,
    }

});

export default styles;