import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
    },
    statusBarContainer: {
        flex: 0,
        backgroundColor: '#000',
    },
    container: {
        padding: 24,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 2
    },
    input: {
        width: 271,
        height: 54,
        padding: 16,
        borderRadius: 6,
        backgroundColor: '#262626',
        color: '#FFF',
        marginRight: 4,
        borderWidth: 1,
        borderColor: '#0D0D0D',
        
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation:16,

        fontSize: 16,
        fontWeight: 'regular',
        fontFamily: 'inter',
    },
    button: {
        width: 52,
        height: 52,
        padding: 18,
        borderRadius: 6,
        backgroundColor: '#FCB80B',
        borderWidth: 1,
        borderColor: '#0D0D0D',
        
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation:16,
    },
    downContainer: {
        marginTop: -52,
        padding: 24,
        flex: 1,
        width: '100%',
        backgroundColor: '#1A1A1A',
        zIndex: 1,
        borderTopColor: '#0D0D0D',
        borderTopWidth: 2
    },
    tasks: {
        width: 327,
        marginTop: 32
    },
    tasksInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    createdText: {
        color: '#FCB80B',
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: 14,
    },
    completedText: {
        color: '#FFF',
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: 14
    },
    list: {
        marginTop: 20,
    },
    listEmptyText: {
        width: 327,
        height: 208,
        borderTopColor: '#333333',
        borderTopWidth: 1,
        alignItems: 'center',
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft: 20,
        paddingRight: 20
    },
    emptyTitle: {
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#808080',
        marginTop: 16
    },
    emptySubTitle: {
        fontFamily: 'inter',
        fontWeight: 'regular',
        fontSize: 14,
        color: '#808080',
        marginTop: 3
    }
});