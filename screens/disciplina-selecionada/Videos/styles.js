import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 14,
        marginTop: -40,
        fontSize: 16,
        fontFamily: 'Nunito-Black',
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
        fontFamily: 'Nunito-ExtraBold',
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
        flexDirection: 'row',
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
        alignItems: 'center',
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
    },

    containerQuestion: {
        width: '100%',
        flex: 1,
        marginTop: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        padding: 24
    },
    titleQuestion: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Nunito-Black'
    },
    descriptionQuestion: {
        color: '#000',
        opacity: 0.6,
        fontFamily: 'Nunito-SemiBold',
        marginTop: 8
    },
    alternativesButton: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 12,
        padding: 12,
        flex: 1,
        borderRadius: 22,
        borderWidth: 2,
        borderBottomWidth: 4,
    },
    alternativeNotSelected: {
        backgroundColor: '#fff',
        borderColor: '#8D8D8DCC'
    },
    alternativeCorrect: {
        backgroundColor: '#0C9F0E', 
        borderColor: '#0D7411CC'
    },
    alternativeIncorrect: {
        backgroundColor: '#AA1313', 
        borderColor: '#5A0000CC'
    },
    alternativeSelected: {
        backgroundColor: '#5C0DC0', 
        borderColor: '#470897'
    },
    alternativeText: {
        fontFamily: 'Nunito-ExtraBold'
    },
    containerAlternatives: {
        marginTop: 20,
    },
    buttonSendQuestion: {
        width: '100%',
        alignSelf: 'center',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27,
        backgroundColor: '#6344FF',
        borderColor: '#47378A',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 7,
        marginTop: 20
    },
    buttonSendQuestionText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito-Bold'
    }
})