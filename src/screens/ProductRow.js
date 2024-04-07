import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { COLORS, SIZES } from '../constants/index';
import ProductCardView from './ProductCardView';
import { AuthContext } from '../context/AuthContext';


const ProductRow = () => {
  const { userInfo, isLoading, logout, getAllProducts } = useContext(AuthContext);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    getAllProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    }).catch((error) => {
      console.error('Error fetching products:', error);
      // Handle error
    });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item._id} // Assuming _id is the unique identifier for each product
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.columnGap }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginLeft: 12
  }
});

export default ProductRow;
