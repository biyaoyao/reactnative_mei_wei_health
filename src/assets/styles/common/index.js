/**
 * Created by BIYY on 2018-6-7.
 */
/**
 * Created by BIYY on 2018-5-31.
 */
import {
    StyleSheet,
} from 'react-native';
export default StyleSheet.create({
    flex: {
        display: 'flex',
    },
    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexRow: {
        flexDirection: 'row'
    },
    flex1: {
        flex: 1
    },
    textCenter: {
        textAlign: 'center'
    },
    font14: {
        fontSize: 14
    },
    font16: {
        fontSize: 16
    },
    textDisabled: {
        color: '#94a0a3'
    },
    textPrimary: {
        color: '#009be9'
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    colorWhite: {
        color: '#ffffff'
    },
    footer: {
        height: 50
    },
    modalBody: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    modalHead: {
        height: 45,
    },
    headerRightText: {
        height: '100%',
        lineHeight: 45
    },
    content: {
        width: '100%',
        height: '100%',
    },
    bgWhite:{
        backgroundColor:'#fff'
    },
    p20: {
        padding: 20
    },
    p10: {
        padding: 10
    },
    cell: {},
    cellGroup: {
        borderBottomColor: '#f8f7f7',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginTop: 10
    },
    cellItem: {
        flexDirection: 'row',
        display: 'flex',
        borderBottomColor: '#f8f7f7',
        borderBottomWidth: 1,
        height: 48,
    },
    cellItemNoBoder: {
        borderBottomWidth: 0,
    },

    cellItemIconBox: {
        width: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellItemIcon: {
        width: 20,
        height: 20
    },
    cellItemContent: {
        display: 'flex',
        justifyContent: 'center',
    },

    cellItemContentText: {
        fontSize: 16,
        lineHeight: 18,
        paddingLeft: 8
    },
    cellItemArrow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 20
    }
});