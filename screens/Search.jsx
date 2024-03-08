import { View,TouchableOpacity ,Text ,TextInput,Image ,SafeAreaView , ScrollView} from 'react-native'
import React , {useState} from 'react'
import styles from './search.style/'
import { COLORS, SIZES } from '../constants'
import { Feather,Ionicons} from "@expo/vector-icons"
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import SearchTile from '../components/products/SearchTile'

const Search = () => {
  const [searchKey , setSearchKey] = useState('');
  const [searchResults , setSearchResults] = useState(['']);

const handleSearch = async() => {
 console.log(searchKey);
  //http://192.168.0.31:3000/api/products/search/${searchKey}
  try {
    const response = await axios.get(`http://192.168.0.103:3000/api/products/search/${searchKey}`)
    // console.log('================================');
    // console.log(response.data);
    // console.log('================================');
    setSearchResults(response.data);
    
  } catch (error) {
    console.log("Failed to get products" , error)
  }
}


  return (
    <SafeAreaView style = {styles.container}>
       <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Ionicons name="camera-outline" size={SIZES.xLarge} style= {styles.searchIcon}/>
        </TouchableOpacity>
        <View style= {styles.searchWrapper}>
            <TextInput style= {styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='What are you looking for'
            />
          
        </View>
        <View>
           <TouchableOpacity style= {styles.searchBtn} onPress={() => handleSearch()}>
                <Feather name='search' size={25} color={COLORS.offwhite}/>
           </TouchableOpacity>
        </View>

    </View>

    {searchResults.length == 0 || searchKey.length == 0  ? (
      <View style = {{flex : 1 }}>
          <Image source={require('../assets/images/Pose23.png')}
          style = {styles.searchImage}
          />
      </View>
    ) : (
      <ScrollView horizontal={true} overScrollMode={'auto'} style={styles.scrollView}  >
      <FlatList
  data={searchResults}
  keyExtractor={(item, index) => item._id ? item._id.toString() : index.toString()}
  renderItem={({ item }) => <SearchTile item={item} />}
/>

      </ScrollView>
    )}


    </SafeAreaView>
  )
}

export default Search

