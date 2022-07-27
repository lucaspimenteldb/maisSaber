import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import YoutubePlayer from "react-native-youtube-iframe"
import { useSelector } from 'react-redux'

import PlayIcon from '../../../assets/icons/PlayIcon'
import ChevronIconRight from '../../../assets/icons/ChevronPlayRight'
import ChevronIconLeft from '../../../assets/icons/ChevronPlayLeft'

import { styles } from './styles'
import Service from '../services/service'

const Videos = ({ disciplina }) => {
    const [assuntos, setAssuntos] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [showAssuntos, setShowAssuntos] = useState(true)

    const [id, setId] = useState();

    const [idAssunto, setIdAssunto] = useState('');
    const [tituloAssunto, setTituloAssunto] = useState('')
    const [descricaoAssunto, setDescricaoAssunto] = useState('')
    const [urlVideo, setUrlVideo] = useState('')
    const [playing, setPlaying] = useState(false)
    const [playButton, setPlayButton] = useState(true)
    const [finalizado, setFinalizado] = useState(false)

    const navigation = useNavigation()
    const { user } = useSelector(state => state.userReducer)
    const userLogger = user.user;

    const handleShowVideo = (assunto) => {
        setShowVideo(true)
        setShowAssuntos(false)

        setTituloAssunto(assunto.titulo)
        setDescricaoAssunto(assunto.descricao)
        setUrlVideo(assunto.url)
        setIdAssunto(assunto.id)
    }

    const handleFinishVideo = async () => {
        try {
            const response = await Service.finishVideoaula(userLogger.id, idAssunto)
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

    useFocusEffect(
        React.useCallback(() => {
            try {
                async function begin() {
                    try {
                        setSpinner(true);
                        const response = await Service.getSubjects(disciplina.id);
                        setAssuntos(response.videos)

                        assuntos.map(assunto => setId(assunto.id))
                        const videoData = await Service.getDataVideo(userLogger.id, id)
                        console.log(id)
                        const { dados } = videoData;
                        dados?.map(item => {
                            item.situacao === 'finalizado' ? setFinalizado(true) : setFinalizado(false)
                        })

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
        }, []),
    );

    return (
        <View>
            <Spinner
                visible={spinner}
            />
            {showAssuntos && <Text style={styles.title}>Vídeos de {disciplina.nome}</Text>}

            <View style={styles.cardContainer}>
                {showAssuntos &&
                    <>
                        {assuntos.map(assunto => (
                            <TouchableOpacity
                                key={assunto.id}
                                style={[styles.cardContent, { borderColor: finalizado ? '#167B26' : '#480898' }]}
                                onPress={() => handleShowVideo(assunto)}
                            >
                                <View>
                                    <Text style={styles.titleAula}>{assunto.titulo}</Text>
                                    <Text style={[styles.statusAula, { color: finalizado ? '#167B26' : '#480898' }]}>
                                        {finalizado ? 'Aula assistida' : 'Aula não assistida'}
                                    </Text>
                                </View>
                                <PlayIcon color={finalizado ? '#167B26' : "#480898"} />
                            </TouchableOpacity>
                        ))}
                    </>
                }
                {showVideo &&
                    <>
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
                                    colors={['#3C368C', '#D02F60']}
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    style={styles.actionButton}
                                >
                                    <Text style={styles.actionButtonText}>Finalizar vídeo</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.actionButtonTouch}>
                                <LinearGradient
                                    colors={['#3C368C', '#D02F60']}
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    style={styles.actionButton}
                                >
                                    <Text style={styles.actionButtonText}>Curtir</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.areaProximoVideo}>
                            <TouchableOpacity style={styles.buttonProximo}>
                                <ChevronIconLeft />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonProximo}>
                                <ChevronIconRight />
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>
        </View>
    )
}

export default Videos