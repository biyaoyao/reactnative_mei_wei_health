/*
 * File: focus.js
 * File Created: 2018-8-16
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-16
 * Modified By: BIYY me@biyaoyao.com
 */
/*
 * File: index.js
 * File Created: 2018-8-15
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-15
 * Modified By: BIYY me@biyaoyao.com
 */
import {
    StyleSheet,
} from 'react-native';
export default StyleSheet.create({
    mainContent: {
        backgroundColor: '#f6f8f9'
    },
    cellGroup: {
        borderBottomColor: '#f8f7f7',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        marginTop: 10
    },
    cellItem: {
        flexDirection: 'row',
        display: 'flex',
        borderBottomColor: '#f8f7f7',
        borderBottomWidth: 1,
        minHeight: 54,
    },
    cellItemName: {
        display: 'flex',
        justifyContent: 'center',
    },

    cellItemNameText: {
        fontSize: 16,
        lineHeight: 28,
        height: 28,
        width: 68,
        paddingLeft: 20,
        color: '#151a1c',
    },

    cellItemValueBox: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    cellItemValueText: {
        fontSize: 16,
    },

    imagePicker: {
        width: 0,
        height: 0
    },
    photoImage: {
        width: 50,
        height: 50,
        borderRadius: 50000,
    },
    photo: {
        paddingBottom: 10,
        paddingTop: 10,
        height: 74
    },
    cellItemArrow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30
    }
});
