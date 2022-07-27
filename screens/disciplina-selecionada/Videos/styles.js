import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 14,
        fontSize: 16,
        fontFamily: 'Nunito-Bold',
        color: '#000'
    },
    cardContainer: {
        marginTop: 22,
        marginBottom: 10,
    },
    cardContent: {
        backgroundColor: '#fff',
        width: '90%',
        height: 90,
        borderRadius: 7,
        borderBottomWidth: 3,
        borderLeftWidth: 0.1,
        borderRightWidth: 0.1,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    boxVideo: {
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        width: '95%',
        height: 214,
        borderRadius: 7,
        alignSelf: 'center'
    },
    textsVideoArea: {
        paddingHorizontal: 15,
        marginTop: 22
    },
    tituloVideoSelecionado: {
        color: '#000',
        fontFamily: 'Nunito-Black',
        fontSize: 16
    },
    descricaoVideoSelecionado: {
        color: '#000',
        opacity: 0.6,
        fontFamily: 'Nunito-Regular',
        marginTop: 8
    },
    titleAula: {
        fontFamily: 'Nunito-Black',
        color: '#4D4D4D'
    },
    statusAula: {
        fontFamily: 'Nunito-SemiBold',
        marginTop: 8,
        fontSize: 12
    },
    playButton: {
        width: 50,
        height: 50,
        borderRadius: 99,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        borderColor: '#29256B'
    },
    areaActionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-around'
    },
    actionButton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 27,
        borderBottomWidth: 4,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#200542'
    },
    actionButtonTouch: {
        width: '40%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButtonText: {
        color: '#fff',
        fontFamily: 'Nunito-Black'
    },
    areaProximoVideo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 22
    },
    buttonProximo: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#200542',
        borderBottomWidth: 3,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        marginLeft: 10
    }
})