import React from "react";
import { Modal, View, Text, Button } from "react-native"
import { styles } from "./styles";

const ModalItem = ({ modalVisible, selectedProduct, onHandleCancel, onHandleDelete }) => {
    return (
        <Modal visible={modalVisible} animationType='slide'>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Detalle del producto</Text>
            </View>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailText}>¿Borramos este producto?</Text>
                <Text style={styles.selectedProduct}>{selectedProduct?.value}</Text>
                <View style={styles.modalButtonContainer}>
                    <Button
                        title='Cancelar'
                        color='#333'
                        onPress={onHandleCancel}
                    />
                    <Button
                        title='Borrar'
                        color='#333'
                        onPress={onHandleDelete}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModalItem