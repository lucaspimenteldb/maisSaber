import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Alert, ScrollView } from 'react-native'

import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay'
import LinearGradient from 'react-native-linear-gradient'
import YoutubePlayer from "react-native-youtube-iframe"
import { useSelector } from 'react-redux'
import RenderHtml from 'react-native-render-html';

import PlayIcon from '../../../assets/icons/PlayIcon'
import ChevronIconRight from '../../../assets/icons/ChevronPlayRight'
import ChevronIconLeft from '../../../assets/icons/ChevronPlayLeft'
import CurtirIconPequeno from '../../../assets/icons/CurtidaIconPequeno'

import HeaderDisciplina from '../HeaderDisciplina/HeaderDisciplina'

import { styles } from './styles'
import Service from '../services/service'

const Videos = ({ route, navigation }) => {
    const { disciplina, assunto, data } = route.params
    const [assuntos, setAssuntos] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [showAssuntos, setShowAssuntos] = useState(true)
    const [semQuestao, setSemQuestoes] = useState(true)

    const [videoSelecionado, setVideoSelecionado] = useState(assunto)
    const [idVideo, setIdVideo] = useState();
    const [tituloAssunto, setTituloAssunto] = useState(assunto.titulo)
    const [descricaoAssunto, setDescricaoAssunto] = useState(assunto.descricao)
    const [urlVideo, setUrlVideo] = useState(assunto.url)
    const [playing, setPlaying] = useState(false)
    const [playButton, setPlayButton] = useState(true)
    const [finalizado, setFinalizado] = useState(false)
    const [curtido, setCurtido] = useState(false)

    const [selectedAlternative, setSelectedAlternative] = useState('');
    const [questionDescription, setQuestionDescription] = useState('')
    const [ra, setRa] = useState('')
    const [rb, setRb] = useState('')
    const [rc, setRc] = useState('')
    const [rd, setRd] = useState('')
    const [gabarito, setGabarito] = useState('')

    const { user } = useSelector(state => state.userReducer)
    const userLogger = user.user;

    const [fontSize, setFontSize] = useState(16);
    const whiteColor = '#fff';
    const classStyle = {
        'descricao-questao': {
            fontSize,
            padding: 12,
            margin: 0,
            fontFamily: 'Nunito-Bold',
        },
        'alternativa-questao': {
            fontSize,
            margin: 0,
            fontFamily: 'Nunito-Bold',
            flexDirection: 'row',
        }
    };
    const tagStyle = {
        img: {
            maxWidth: '100',
        },
        span: {
            fontSize,
            margin: 0,
            padding: 0,
            fontFamily: 'Nunito-Bold',
        },
        p: {
            padding: 0,
            fontSize,
            fontFamily: 'Nunito-Bold',
            margin: 0,
            marginLeft: 5,
        }
    };
    const ignoreTags = ['font', 'v:shape', 'o:p'];
    const ignoreClass = ['MsoNormal'];
    const ignoreStyles = ['fontSize', 'fontFamily', 'margin', 'marginTop', 'marginBottom', 'textAlign', 'maxWidth',
        'width', 'padding', 'marginRight', 'marginLeft'];

    const handleFinishVideo = async () => {
        try {
            const response = await Service.finishVideoaula(userLogger.id, idVideo ? idVideo : assunto.id)
            if (response.success) {
                Alert.alert('Concluído!', 'Aula finalizada com sucesso.');
                setFinalizado(true);
            } else {
                setFinalizado(true);
                Alert.alert('Aula já finalizada!', 'Esta aula já foi finalizada.')
            }
        } catch (error) {
            Alert.alert('Aviso!', 'Não foi possível finalizar a aula.')
            console.log(error.message)
        }
    }

    const handleAnswerQuestion = () => {
        selectedAlternative === gabarito ? Alert.alert('Você acertou!', 'Continue dessa forma, que cada vez mais você evolua!', [{ text: 'Ok', onPress: ()=> console.log('pressionou') }]) : Alert.alert('Oops!', 'Você errou. Mas não desista, tente novemtente.')
    }

    const handleVideoAnterior = () => {
        let indice = data.indexOf(videoSelecionado, 0)
        
        if (indice >= 1) {
            let videoAnterior = data[indice - 1]
            
            setDescricaoAssunto(videoAnterior.descricao)
            setTituloAssunto(videoAnterior.titulo)
            setUrlVideo(videoAnterior.url)
            setIdVideo(videoAnterior.id)
            setVideoSelecionado(videoAnterior)
        } else {
            Alert.alert('Aviso', 'Não há mais aulas anteriores.')
        }
    }

    const handleProximoVideo = () => {
        let indice = data.indexOf(videoSelecionado, 0)
        let ultimoIndice = data.length - 1

        if (ultimoIndice === indice) {
            Alert.alert('Aviso', 'Você chegou ao final das aulas.')
            return
        }
        
        if (ultimoIndice) {
            let videoAnterior = data[indice + 1]
            
            setDescricaoAssunto(videoAnterior.descricao)
            setTituloAssunto(videoAnterior.titulo)
            setUrlVideo(videoAnterior.url)
            setIdVideo(videoAnterior.id)
            setVideoSelecionado(videoAnterior)
        } else {
            Alert.alert('Aviso', 'Não há mais aulas anteriores.')
        }
    }

    const handleCurtir = async () => {
        try {
            const response = await Service.curtirVideoaula(userLogger.id, idVideo ? idVideo : assunto.id)
            if (response.success) {
                setCurtido(true);
            } else {
                setCurtido(true);
                Alert.alert('Aviso!', 'Você já curtiu esta aula.')
            }
        } catch (err) {
            Alert.alert('Aviso!', 'Você já curtiu esta aula.')
            console.log(err.message)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            try {
                async function begin() {
                    try {
                        setSpinner(true);
                        const response = await Service.getSubjects(disciplina.id);
                        setAssuntos(response.videos)

                        const responseQuestion = await Service.getQuestion(idVideo ? idVideo : assunto.id)
                        const { questoes } = responseQuestion
                        questoes.length ? questoes.map(questao => {
                            setSemQuestoes(true)
                            setQuestionDescription(questao.descricao)
                            setRa(questao.ra)
                            setRb(questao.rb)
                            setRc(questao.rc)
                            setRd(questao.rd)
                            setGabarito(questao.rgabarito)
                        }) : setSemQuestoes(false)
                        
                        const videoData = await Service.getDataVideo(userLogger.id, idVideo ? idVideo : assunto.id)
                        const { finalizado, curtiu } = videoData;
                        curtiu?.map(curtir => curtir.curtiu === "1" ? setCurtido(true) : setCurtido(false))
                        finalizado?.map(finalizar => finalizar.situacao === 'finalizado' ? setFinalizado(true) : setFinalizado(false))

                        setSpinner(false)
                    }
                    catch (e) {
                        setSpinner(false)
                        console.log(e)
                    }
                }

                assuntos ? begin() : null

                begin()
            } catch (error) {
                setSpinner(false);
                console.log(error)
            }
        }, [idVideo])
    );

    return (
        <ScrollView>
            <Spinner
                visible={spinner}
            />
            <HeaderDisciplina disciplina={disciplina} />
            {showAssuntos && <Text style={styles.title}>Vídeos de {disciplina.nome}</Text>}

            <View style={styles.cardContainer}>
                <View style={styles.boxVideo}>
                    <YoutubePlayer
                        play={playing}
                        height={230}
                        width={"100%"}
                        videoId={urlVideo.slice(32, 43)}
                    />
                    {playButton &&
                        <TouchableOpacity
                            style={{ alignSelf: 'center', position: 'absolute', bottom: '40%' }}
                            onPress={() => (setPlaying(true), setPlayButton(false))}
                        >
                            <LinearGradient
                                colors={['#3C368C', '#D02F60']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={styles.playButton}
                            >
                                <PlayIcon />
                            </LinearGradient>
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.textsVideoArea}>
                    <Text style={styles.tituloVideoSelecionado}>{tituloAssunto}</Text>
                    <Text style={styles.descricaoVideoSelecionado}>{descricaoAssunto}</Text>
                </View>

                <View style={styles.areaActionButtons}>
                    <TouchableOpacity style={styles.actionButtonTouch} onPress={handleFinishVideo}>
                        <LinearGradient
                            colors={finalizado ? ['#0D961B', '#2CAE39'] : ['#3C368C', '#D02F60']}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={[styles.actionButton, { borderColor: finalizado ? '#11991F' : '#200542'}]}
                        >
                            <Text style={styles.actionButtonText}>{finalizado ? 'Vídeo finalizado!' : 'Finalizar vídeo'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButtonTouch} onPress={handleCurtir}>
                        <LinearGradient
                            colors={curtido ? ['#3C368C', '#D02F60'] : ['#fff', '#fff']}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={styles.actionButton}
                        >
                            <Text style={[styles.actionButtonText, { color: !curtido ? '#470897' : '#fff'}]}>{curtido ? 'Aula curtida!' : 'Curtir'}</Text>
                            {!curtido && <CurtirIconPequeno color={"#470897"} style={{ marginLeft: 10 }} />}
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaProximoVideo}>
                    <TouchableOpacity style={styles.buttonProximo} onPress={handleVideoAnterior}>
                        <ChevronIconLeft />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonProximo} onPress={handleProximoVideo}>
                        <ChevronIconRight />
                    </TouchableOpacity>
                </View>
                
                {semQuestao &&
                    <View style={styles.containerQuestion}>
                        <Text style={styles.titleQuestion}>QUESTÕES</Text>
                        <RenderHtml
                            contentWidth={300}
                            classesStyles={classStyle}
                            tagsStyles={tagStyle}
                            ignoredDomTags={ignoreTags}
                            ignoredStyles={ignoreStyles}
                            source={{
                                html: `<span style="padding-right: 7px" class="descricao-questao">${questionDescription}</span>`,
                            }}
                        />

                        <View style={styles.containerAlternatives}>
                            <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() => setSelectedAlternative('A')}
                                style={[styles.alternativesButton, selectedAlternative === 'A' ? styles.alternativeSelected : '']}
                            >
                                <RenderHtml
                                    contentWidth={300}
                                    classesStyles={classStyle}
                                    tagsStyles={tagStyle}
                                    ignoredDomTags={ignoreTags}
                                    ignoredStyles={ignoreStyles}
                                    source={{
                                        html: `<span style="padding-right: 7px" class="alternativa-questao">A - ${ra}</span>`,
                                    }}
                                />
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() => setSelectedAlternative('B')}
                                style={[styles.alternativesButton, selectedAlternative === 'B' ? styles.alternativeSelected : '']}
                            >
                                <RenderHtml
                                    contentWidth={300}
                                    classesStyles={classStyle}
                                    tagsStyles={tagStyle}
                                    ignoredDomTags={ignoreTags}
                                    ignoredStyles={ignoreStyles}
                                    source={{
                                        html: `<span style="padding-right: 7px" class="alternativa-questao">B - ${rb}</span>`,
                                    }}
                                />
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() => setSelectedAlternative('C')}
                                style={[styles.alternativesButton, selectedAlternative === 'C' ? styles.alternativeSelected : '']}
                            >
                                <RenderHtml
                                    contentWidth={300}
                                    classesStyles={classStyle}
                                    tagsStyles={tagStyle}
                                    ignoredDomTags={ignoreTags}
                                    ignoredStyles={ignoreStyles}
                                    source={{
                                        html: `<span style="padding-right: 7px" class="alternativa-questao">C - ${rc}</span>`,
                                    }}
                                />
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() => setSelectedAlternative('D')}
                                style={[styles.alternativesButton, selectedAlternative === 'D' ? styles.alternativeSelected : '']}
                            >
                                <RenderHtml
                                    contentWidth={300}
                                    classesStyles={classStyle}
                                    tagsStyles={tagStyle}
                                    ignoredDomTags={ignoreTags}
                                    ignoredStyles={ignoreStyles}
                                    source={{
                                        html: `<span style="padding-right: 7px" class="alternativa-questao">D - ${rd}</span>`,
                                    }}
                                />
                            </TouchableHighlight>

                            <LinearGradient
                                colors={['#3C368C', '#D02F60']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={styles.buttonSendQuestion}
                            >
                                <TouchableHighlight
                                    onPress={handleAnswerQuestion}
                                    underlayColor="transparent"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={styles.buttonSendQuestionText}>Responder</Text>
                                </TouchableHighlight>
                            </LinearGradient>
                        </View>
                    </View>
                }
            </View>
            <View style={{ height: 40 }} />
        </ScrollView>
    )
}

export default Videos