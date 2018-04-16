/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {Card, TabBar, Carousel, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import {Camera} from './components/Camera'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false,
            fullScreen: true,
            data: ['1', '2', '3']
        };
    }


    render() {
        return (
            <View style={this.state.fullScreen ? {
                display: 'flex',
                flex: 1,
            } : {height: 400}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<View style={{
                            width: '22px',
                            height: '22px'
                        }}
                        />
                        }
                        selectedIcon={<View style={{
                            width: '22px',
                            height: '22px'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                        }}
                        data-seed="logId"
                    >
                        <View>
                            <Carousel
                                autoplay={true}
                                infinite
                                selectedIndex={1}
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => console.log('slide to', index)}
                            >
                                {this.state.data.map((val, index) => (
                                    <Image source={{uri: 'https://qiniu.ideapar.com/promote-p-banner-mobile-v3.jpg'}}
                                           style={{width: '100%', height: 200}}
                                           key={{index}}
                                    />

                                ))}
                            </Carousel>
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <View style={{
                                width: '22px',
                                height: '22px',
                            }}
                            />
                        }
                        selectedIcon={
                            <View style={{
                                width: '22px',
                                height: '22px',
                            }}
                            />
                        }
                        title="需求"
                        key="rqt"
                        selected={this.state.selectedTab === 'rqt'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'rqt',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <View>
                            <WingBlank size="lg">
                                <WhiteSpace size="lg"/>
                                <Card>
                                    <Card.Header
                                        title="手工家居套装"
                                        thumb={
                                            <View>
                                                <Image
                                                    source={{uri: 'https://qiniu.ideapar.com/promote-p-banner-mobile-v3.jpg'}}
                                                    style={{width: 80, height: 80}}
                                                />
                                            </View>
                                        }
                                    />
                                    <Card.Body>
                                        <View style={{marginLeft: 14}}>
                                            <Text>
                                                主要材质：黄花梨木
                                            </Text>
                                            <Text>
                                                打样数量：3
                                            </Text>
                                            <Text>
                                                批产数量：100
                                            </Text>
                                            <Text>
                                                备注： 与我联系，获取图纸文件
                                            </Text>
                                        </View>
                                    </Card.Body>
                                    <Card.Footer
                                        content='已发布 12小时'
                                        extra={
                                            <View>
                                                <Button
                                                    type="primary"
                                                    style={{height: 30}}
                                                >
                                                    立即响应
                                                </Button>
                                            </View>
                                        }
                                    />
                                </Card>
                                <WhiteSpace size="lg"/>
                            </WingBlank>

                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <View style={{
                                width: '22px',
                                height: '22px',
                            }}
                            />
                        }
                        selectedIcon={
                            <View style={{
                                width: '22px',
                                height: '22px',
                            }}
                            />
                        }
                        title="订单"
                        key="order"
                        selected={this.state.selectedTab === 'order'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'order',
                            });
                        }}
                    >
                        <View><Text>three</Text></View>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'}}
                        selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
                        title="我的"
                        key="my"
                        icon={
                            <View style={{
                                width: '22px',
                                height: '22px',
                            }}
                            />
                        }
                        selectedIcon={
                            <View style={{
                                width: '22px',
                                height: '22px',
                            }}
                            />
                        }
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                        }}
                    >
                        <Camera/>
                    </TabBar.Item>
                </TabBar>
            </View>
        )

    }
}

