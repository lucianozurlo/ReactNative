import { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { AddItem, ProductItem, ModalItem, ListProduct } from './components/index'

export default function App() {

  const [product, setProduct] = useState('')
  const [productList, setProductList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const onHandleProduct = () => {
    setProductList(prevProductList => [{ id: Math.random().toString(), value: product }, ...prevProductList])
    setProduct('')
  }

  const onHandleCancel = () => {
    setModalVisible(!modalVisible)
  }

  const onHandleDelete = () => {
    setProductList(prevProductList => prevProductList.filter(item => item.id !== selectedProduct.id))
    setModalVisible(!modalVisible)
  }

  const onHandleSelected = item => {
    setSelectedProduct(item)
    setModalVisible(true)
  }

  const renderItem = ({ item }) => (
    <ProductItem item={item} onHandleSelected={onHandleSelected} />
  )

  const onHandleChange = text => { setProduct(text) }

  return (
    <View style={styles.container}>
      <AddItem product={product} onHandleProduct={onHandleProduct} onHandleChange={onHandleChange} />
      <ListProduct productList={productList} renderItem={renderItem} />
      <ModalItem modalVisible={modalVisible} selectedProduct={selectedProduct} onHandleCancel={onHandleCancel} onHandleDelete={onHandleDelete} />
    </View >
  );
}


