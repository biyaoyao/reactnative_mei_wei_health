/*
 * File: index.js
 * File Created: 2018-8-1
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-1
 * Modified By: BIYY me@biyaoyao.com
 */
/*
 * File: index.js
 * File Created: 2018-8-1
 * Author: BIYY me@biyaoyao.com
 * Copyright: 2017 - 2018 Copyright (c), 深圳美云智数科技有限公司
 * -----
 * Last Modified: 2018-8-1
 * Modified By: BIYY me@biyaoyao.com
 */
import {CookBookStyles, CommonStyles}  from '../../assets/styles/index';
import {Grid, SearchBar, Carousel} from 'antd-mobile-rn';
import React, {Component} from 'react';
import {ScrollView, Image, Text, View} from 'react-native';

const GridList = [
  {
    icon: 'http://193.112.154.97/categoryImg/2.png',
    cate: '功效',
    text: `营养保健`,
  },
  {
    icon: 'http://193.112.154.97/categoryImg/7.png',
    cate: '人群',
    text: `人群膳食`,
  },
  {
    icon: 'http://193.112.154.97/categoryImg/6.png',
    cate: '烹饪设备',
    text: `智能烹饪`,
  },
  {
    icon: 'http://193.112.154.97/categoryImg/9.png',
    cate: '食用季节',
    text: `食用季节`,
  },
  {
    icon: 'http://193.112.154.97/categoryImg/5.png',
    cate: '烹饪方式',
    text: `烹饪方式`,
  },
  {
    icon: 'http://193.112.154.97/categoryImg/3.png',
    cate: '菜式',
    text: `常见菜式`,
  },
  {
    icon: 'http://193.112.154.97/categoryImg/1.png',
    cate: '菜系',
    text: `常见菜系`,
  },
  {
    icon: 'http://193.112.154.97/categoryImg/4.png',
    cate: '难易程度',
    text: `难易程度`,
  }
];
export default class CookbookApp extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarVisible: false, // 隐藏底部导航栏
      header: null,  //隐藏顶部导航栏
    };
  };

  constructor (props) {
    super(props);
  }

  afterChange (index) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }

  render () {
    return (
      <View style={[CommonStyles.flex, CommonStyles.flexColumn, CookBookStyles.cookBookApp]}>
        <ScrollView>
          <View style={[CookBookStyles.carouselBox]}>
            <Carousel
              style={[CookBookStyles.carousel]}
              selectedIndex={0}
              afterChange={this.afterChange}
              autoplay
              infinite>
              <View style={[CookBookStyles.carouselItem]}>
                <Image  style={[CookBookStyles.carouselItemImage]} resizeMode="stretch"
                       source={{uri: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/da88d503-747f-402d-ba07-c5cbdbdf3fbd'}}/>
              </View>
              <View style={[CookBookStyles.carouselItem]}>
                <Image  style={[CookBookStyles.carouselItemImage]} resizeMode="stretch"
                        source={{uri: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/recipe-5d9de6bc-3892-4912-bd0c-9a3fa42f40da'}}/>
              </View>
              <View style={[CookBookStyles.carouselItem]}>
                <Image  style={[CookBookStyles.carouselItemImage]} resizeMode="stretch"
                        source={{uri: 'http://m-health-image.oss-cn-shenzhen.aliyuncs.com/2cf72a13-29cd-40d6-8617-78cf1a63e773'}}/>
              </View>
            </Carousel>
          </View>
          <View>
            <SearchBar
              onSubmit={(value) => alert(value)}
              showCancelButton={false}
              defaultValue="初始值" placeholder="搜索"/>
          </View>
          <View>
            <Grid data={GridList} onClick={(el, index) => console.log(el, index)}/>
          </View>

          <View style={[CookBookStyles.themeBox]}>
            <View style={[CookBookStyles.themeItem]}>
              <Image style={[CookBookStyles.themeItemImage]} resizeMode="stretch"
                     source={{uri: 'http://pic.qiantucdn.com/58pic/19/21/64/568514fc2b5ea_1024.jpg'}}/>
              <Text style={[CookBookStyles.themeItemText]}>大暑：清暑祛湿，养阴生津</Text>
            </View>
          </View>
          <View style={[CookBookStyles.themeBox]}>
            <View style={[CookBookStyles.themeItem]}>
              <Image style={[CookBookStyles.themeItemImage]} resizeMode="stretch"
                     source={{uri: 'http://pic.58pic.com/58pic/17/08/75/83h58PICyzP_1024.jpg'}}/>
              <Text style={[CookBookStyles.themeItemText]}>大暑：清暑祛湿，养阴生津</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}