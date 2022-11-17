import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listItemContainer: {
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#6a348f',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center'
    },
    listItem: {
        fontSize: 18,
        color: '#fff',
        paddingHorizontal: 10
    },
})