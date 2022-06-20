import React from 'react'
import { View,Text,FlatList,SafeAreaView,StyleSheet} from 'react-native'
import {COLORS,NFTData} from '../assets/constants'
import {NFTCards,HomeHeader,FocusedStatusBar} from './exports'

const Home = () => {
  return (
    <SafeAreaView>
        <FocusedStatusBar background={COLORS.primary}/>
        <View>
            <View>
                <FlatList 
                data={NFTData} 
                renderItem={({item})=>{
                    return (
                        <NFTCards data={item}/>
                    )
                }}
                showsVerticalScrollIndicator={true}
                ListHeaderComponent={<HomeHeader/>}
                keyExtractor={(item)=>item.id}
                pinchGestureEnabled={true}
                />
            </View>
            <View style={styles.background}>
                <View style={styles.upperbg}>

                </View>
                <View style={styles.lowerbg}>

                </View>

            </View>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    background:{
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
        zIndex:-1,
    },
    upperbg:{
        height: 300,
        backgroundColor: COLORS.primary,

    },
    lowerbg:{
        flex:1,
        backgroundColor:COLORS.white,
        height:500,
    },
})

export default Home