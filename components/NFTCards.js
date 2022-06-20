import { StyleSheet, Text, View,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS,SIZES,SHADOWS,assets } from '../assets/constants'
import { CircleButton, RectButton } from './Button'

import { Subinfo,NFTTitle, EthPrice,  } from './Subinfo'

const NFTCards = ({data}) => {
  const navigation = useNavigation()


  return (
    <View style={{
      backgroundColor:COLORS.white,
      borderRadius:SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark,
      overflow:'hidden'
      }} >
        <View style={{width: '100%', height:250}}>
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
          <Image source={data.image} resizeMode={'cover'} style={{
            height:'100%',
            width:'100%',
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius:SIZES.font,
            zIndex:0
          }}/>
                 
        </View>
        <Subinfo/>
        <View  style={{
          width:"100%",
          padding:SIZES.font
        }} >
          <NFTTitle
            title={data.name}
            subTitle={data.creator} 
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />
          <View style={{
            marginTop:SIZES.font,
            flexDirection:'row',
            justifyContent:"space-between",
            alignItems:"center"
          }} >
            <EthPrice price={data.price}/>
            <RectButton
              handlePress={()=> navigation.navigate('Details',{data})}
            />
          </View>
        </View>
        
    </View>
  )
}

export default NFTCards

const styles = StyleSheet.create({

})