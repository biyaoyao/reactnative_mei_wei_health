/**
 * Created by BIYY on 2018-6-12.
 */
/**
 * Created by BIYY on 2018-5-31.
 */
import {
    StyleSheet,
} from 'react-native';
export default StyleSheet.create({
    cookBookApp: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f6f6f6'
    },

    carouselBox: {
        width: '100%',
        height: 180,
    },
    carousel: {
        height: '100%',
    },

    carouselItem: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
    },
    carouselItemImage: {
        width: '100%',
        height: '100%',
    },

    searchBox: {
        width: '100%',
        height: 50
    },
    searchBar: {
        width: '100%',
        marginTop: 5,
        marginBottom: 5,
        height: 36
    },

    themeBox: {},
    themeItem: {
        height: 160,
        marginTop: 5,
        width: '100%',
    },
    themeItemImage: {
        height: 160,
        width: '100%',
    },
    themeItemText: {
        color: '#fff',
        marginTop: -120,
        fontSize: 26,
        textAlign: 'left'
    },
    searchList: {
        height: 70,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomColor: '#f6f6f6',
        borderBottomWidth: 1
    },
    photoBox: {
        width: 70
    },

    photo: {
        width: 50,
        height: 50,
        borderRadius: 40
    },
    title: {
        height: 30
    },
    titleText: {
        fontSize: 16
    },
    info: {
        height: 20
    },
    icon: {
        width: 18,
        height: 18
    },
    infoLeft: {},
    infoRight: {
        alignItems: 'flex-end',
        paddingRight: 10
    },
    infoRightSpace: {
        width: 5
    },
    infoRightText: {
        textAlign: 'right',
    },
    infoText: {
        fontSize: 12,
        marginLeft: 0,
        marginRight: 2
    },

    bannerBox: {
        height: 180
    },
    articleBannerBox: {
        height: 213
    },
    bannerInfo: {
        marginTop: -36,
        height: 36,
        backgroundColor: 'rgba(33, 38, 51, 0.5)'
    },
    bannerInfoText: {
        color: '#fff',
        fontSize: 16
    },
    bannerInfoIcon: {
        width: 22,
        height: 22,
        marginRight: 5,
        marginTop: 2,
        marginLeft: 20
    },
    bannerInfoLeft: {
        alignItems: 'center',
        paddingLeft: 10,
    },
    bannerInfoRight: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 10,
        width: 120
    },
    describeBox: {
        paddingTop: 10
    },
    describeTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#212633'
    },

    describe: {
        paddingTop: 5,
        textAlign: 'center',
        color: '#666',
        fontSize: 14
    },
    recipeFeature: {
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    featureItem: {
        width: '33.33%',
        height: 115,
        flexWrap: 'wrap',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    featureItemBox: {
        borderColor: '#c9c9c9',
        borderRadius: 6,
        marginTop: 5,
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
        borderBottomWidth: 1,
        height: 100,
        borderWidth: 1,
    },
    featureItemText: {
        lineHeight: 32
    },
    featureItemImage: {
        width: 32,
        height: 32
    },
    ingredientList: {},
    division: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divisionLeft: {
        height: 1,
        width: 36,
        backgroundColor: '#ccc'
    },
    divisionCenter: {
        paddingRight: 10,
        paddingLeft: 10
    },

    divisionName: {
        fontSize: 18,
        color: '#212633'
    },
    divisionRight: {
        height: 1,
        width: 36,
        backgroundColor: '#ccc'
    },
    tableList: {
        alignItems: 'center'
    },
    tableTitle: {
        width: '70%',
    },
    tableTitleText: {
        fontSize: 16,
        color: '#212633'
    },

    tableItem: {
        width: '70%',
        height: 25,
    },
    tableData: {
        width: '50%',
    },
    tableName: {
        textAlign: 'left',
        lineHeight: 25
    },
    tableValue: {
        textAlign: 'right',
        lineHeight: 25
    },
    stepBox: {
        paddingLeft: 15
    },
    stepName: {
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5
    },
    stepImage: {
        width: 200,
        height: 150
    },
    articleTitleBox: {
        backgroundColor: '#fff',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    articleTitle: {
        color: '#333',
        fontSize: 18
    },
    articleContentBox: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    articleContent: {
        color: '#777',
        fontSize: 15
    },
    cookBookBox: {
        marginTop: 10,
    },
    recipeCategory: {
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    categoryItem: {
        width: '25%',
        height: 45,
        flexWrap: 'wrap',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    categoryItemBox: {
        borderColor: '#c9c9c9',
        borderRadius: 6,
        marginTop: 5,
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
        borderBottomWidth: 1,
        height: 30,
        borderWidth: 1,
    },
    categoryItemText: {
        color: '#c9c9c9',
        paddingRight: 0,
        fontSize: 13,
        lineHeight: 28
    },
    categoryName: {
        height: 44,
    },

    categoryNameText: {
        lineHeight: 44,
        textAlign: 'center',
        color: '#c9c9c9',
        fontSize: 18
    },
    categoryClose: {
        height: 80,
    },
    categoryCloseImage: {
        width: 32,
        height: 32
    }
});
