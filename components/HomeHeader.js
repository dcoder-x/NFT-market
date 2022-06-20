import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import { COLORS,FONTS, SIZES, assets } from '../assets/constants'

const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding:SIZES.font
    }} >
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
      }} >
        <Image 
        source={assets.logo} 
        resizeMode='contain' 
        style={{width:100}} />
        <View 
        style={{
          width:45,
          height:45
        }} 
        >
          <Image 
          source={assets.person03} 
          resizeMode='contain' 
          style={{
            width:'100%',
            height:"100%"
            }} />
          <Image 
          source={assets.badge} 
          resizeMode='contain' 
          style={{
            width:15,
            height:15,
            position:"absolute",
            bottom:0,
            right:0
            }} />
        </View>
      </View>
      <View style={{marginVertical:SIZES.font}}>
        <Text style={{
          fontSize:SIZES.small,
          color:COLORS.white,
        }} >
          Hello Ayomikun 👋
        </Text> 
        <Text style={{
          fontSize:SIZES.large,
          color:COLORS.white,
          fontWeight:"bold"
        }} >
          Lets create a master piece
        </Text> 
      </View>
      <View>
        <View style={{
          flexDirection:"row", 
          width:"100%",
          height:40,
          backgroundColor:COLORS.secondary,
          borderRadius:SIZES.extraLarge,
          alignItems:"center"
          }}>
          <Image
          source={assets.search}
          resizeMode={"contain"}
          style={{
            height:20
          }}
          />
          <TextInput 
          placeholder='Search NFTs...'
          style={{
            width:"100%"
          }}
          onChangeText={onSearch}
          >
            
          </TextInput>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})