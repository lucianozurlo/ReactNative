import React from "react";
import { View, Text, FlatList } from "react-native"
import { styles } from "./styles";

const ListProduct = ({ productList, renderItem }) => {
    return (
        <View>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Lista de compras</Text>
            </View>
            <FlatList
                style={styles.listContainer}
                data={productList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default ListProduct