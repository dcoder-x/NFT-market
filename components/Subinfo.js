import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { SIZES,FONTS,COLORS,SHADOWS,assets } from '../assets/constants'

export const Subinfo = () => {
    
  return (
    <View style={{
        width:'100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        marginBottom:5,
        flexDirection:'row',
        justifyContent:'space-between'
      }} >
        <People/>
        <EndDate/>
      </View>
  )
}
export const People = () => {
    return (
      <View style={{flexDirection:'row'}}>
        {[assets.person02,assets.person03,assets.person04].map((imgUrl,index)=>{ 
            return(
                <ImageCmp imgUrl={imgUrl} index={index} key={`${imgUrl}${index}`} />
            )
        })}
      </View>
    )
}
export const ImageCmp = ({imgUrl,index}) => {
    return (
        <Image 
        source={imgUrl}
        resizeMode={"contain"}
        style={{
            height:48,
            width:48,
            marginLeft:index=== 0 ? 0: -SIZES.font }}
        />
    )
}
export const EndDate = () => {
    return (
        <View style={{
            paddingHorizontal:SIZES.font,
            paddingVertical:SIZES.base,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLORS.white,
            elevation:1,
            maxWidth:'50%',
            ...SHADOWS.light
        }} >
            <Text style={{
                fontFamily:FONTS.regular,
                fontSize:SIZES.small,
                color:COLORS.primary

            }} >
                Ending in
            </Text>
            <Text style={{
                fontSize:SIZES.medium,
                color:COLORS.primary

            }} >
                12hrs 30m
            </Text>
        </View>
    )
}

export const NFTTitle = ({title,subTitle,titleSize,subTitleSize}) => {
    return (
      <View>
        <Text style={{fontFamily:FONTS.semiBold,fontSize: titleSize,color:COLORS.primary}} >{title}</Text>
        <Text style={{fontFamily:FONTS.regular,fontSize: subTitleSize,color:COLORS.primary}} >{subTitle}</Text>
      </View>
    )
}
export const EthPrice = ({price}) => {
    return (
      <View style={{
        flexDirection:"row",
        alignItems:"center",
      }} >
        <Image
            source={assets.eth}
            resizeMode='contain'
            style={{width:20,height:20,marginRight:2}}
        />
        <Text>{price}</Text>
      </View>
    )
}




const styles = StyleSheet.create({})