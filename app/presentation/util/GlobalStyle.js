import { StyleSheet } from 'react-native';
import { getY, getX } from './XYRatio';

const styles = StyleSheet.create({
    app_margin: {
        marginBottom: getY(19),
        marginTop: getY(19),
        marginLeft: getX(16),
        marginRight: getX(16)
    },
    app_padding: {
        paddingBottom: getY(19),
        paddingTop: getY(19),
        paddingLeft: getX(16),
        paddingRight: getX(16)
    },
    app_input_box_padding: {
        paddingBottom: getY(10),
        paddingTop: getY(10),
        paddingLeft: getX(15),
        paddingRight: getX(15)
    },
    app_input_action_padding: {
        paddingBottom: getY(10),
        paddingTop: getY(10),
        paddingLeft: getX(15),
        paddingRight: getX(15)
    },
    globalBorder: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'grey',
    },
    app_margin_vertical: {
        marginBottom: getY(10),
        marginTop: getY(10),
    }
});

export default styles;
