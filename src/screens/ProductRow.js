import { ActivityIndicator,FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/index';
import ProductCardView from './ProductCardView'

const ProductRow = () => {
  //const {data , isLoading , error} = useFetch()
    const products =[1,2,3,4]
  return (
  <View style={styles.container}>
    
    <FlatList
  data={products}
  renderItem={({ item }) => <ProductCardView product={item} />}
  keyExtractor={(item, index) => index.toString()} // Use index as a fallback key
  horizontal
  contentContainerStyle={{ columnGap: SIZES.columnGap }}
/>
  
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.small ,
        marginLeft: 12
    }

  });

export default ProductRow


