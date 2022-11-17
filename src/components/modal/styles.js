import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalDetailContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalDetailText: {
        fontSize: 18,
        color: '#222',
    },
    selectedProduct: {
        fontSize: 18,
        color: '#222',
        fontWeight: 'bold',
        marginVertical: 20
    },
    modalButtonContainer: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        marginVertical: 5
    },
})