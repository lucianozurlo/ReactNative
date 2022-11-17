import React from "react";
import { View, TextInput, Button } from "react-native"
import { styles } from "./styles";

const AddItem = ({ product, onHandleProduct, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={product}
                placeholder="Ingresar producto"
                onChangeText={onHandleChange}
            />
            <Button
                title='Agregar'
                color={'#6a348f'}
                onPress={onHandleProduct}
                disabled={!product}
            />
        </View>
    )
}

export default AddItem