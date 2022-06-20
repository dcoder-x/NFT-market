import { View, Text,Button,TouchableOpacity,Image,Alert } from 'react-native'
import React from 'react'
import { COLORS,SHADOWS,SIZES } from '../assets/constants'

export const CircleButton = ({imgUrl,handlePress,...props}) => {


  return (
      <TouchableOpacity 
      style={{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.extraLarge,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        ...SHADOWS.light,
        ...props,
      }}

      onPress={handlePress}
      >
        <Image source={imgUrl} resizeMode={'contain'} style={{width:24,height:24}} />
      </TouchableOpacity>
  )
}

export const RectButton = ({handlePress}) => {
    return (
      <View>
        <TouchableOpacity 
        style={{
          backgroundColor:COLORS.primary,
          borderRadius:SIZES.extraLarge,
          alignItems:'center',
          justifyContent:'center',
          ...SHADOWS.light,
          minWidth:125,
          height:40,
        }}

        onPress={handlePress}
        >
          <Text style={{color:COLORS.white,fontSize:15}}>Place a bid</Text>
        </TouchableOpacity>
      </View>
    )
  }

