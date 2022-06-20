import React from 'react'
import { View,Text,StatusBar,Image,SafeAreaView,FlatList, Alert } from 'react-native'
import { COLORS,FONTS, SIZES, assets, SHADOWS } from '../assets/constants'
import { RectButton, CircleButton } from './Button'
import { Subinfo } from './Subinfo'
import FocusedStatusBar from './FocusedStatusBar'
import DetailsBid from './DetailsBid'

const Details = ({route,navigation}) => {
  const data = route.params.data
  const DetailsHeader = ()=>{
    const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "NFT has been added to favorite",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
    return (
      <View style={{width:'100%', height:373}}>
         <Image 
         source={data.image} 
         resizeMode={'cover'}
         style={{height:'100%', width:'100%'}}
        />
        <CircleButton
          imgUrl={assets.left}
          handlePress={()=>navigation.goBack()}
          top={StatusBar.currentHeight+10}
          left={15}
        />
        <CircleButton
          imgUrl={assets.heart}
          top={StatusBar.currentHeight+10}
          handlePress={showAlert}
          right={15}
        />
      </View>
     
    )
  }
  return (
    <SafeAreaView style={{height:"100%"}} >
      <FocusedStatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
      />
      <View style={{
        width:'100%',
        position:'absolute',
        bottom:0,
        paddingVertical:SIZES.font,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.5)',
        zIndex:1,
      }} >
        <RectButton 
          minWidth={170} 
          fontSize={SIZES.large} 
          {...SHADOWS.dark}
        />
      </View>
      <FlatList 
      data={data.bids} 
      renderItem={({item})=>{ 
        return(
          <DetailsBid bid={item}  />
        )
      }}
      keyExtractor={(item,index)=> item.name+index}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extraLarge}}
      ListHeaderComponent={<DetailsHeader/>}
      />
    </SafeAreaView>
  )
}

export default Details