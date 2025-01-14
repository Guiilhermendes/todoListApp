import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    task: {
        width: 327,
        height: 64,
        backgroundColor: '#262626',

        flexDirection: 'row',
        alignItems: 'center',
        
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1A1A1A',

        paddingLeft: 20,

        marginBottom: 8
    },
    checkBox: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    trash: {
        width: 32,
        height: 32,
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
});