import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image, TextInput } from 'react-native'
import styles from './styles.js'

import AgendaPequenaIcon from '../../assets/icons/AgendaPequenoIcon.js'
import PlayIcon from '../../assets/icons/PlayIcon.js'
import ChevronIcon from '../../assets/icons/ChevronIcon.js'

const FazerAtividadeTela = ({ route, navigation }) => {

  const { quantidadeQuestoes, questoes } = route.params
  const [questaoAtual, setQuestaoAtual] = useState(0)
  const [alternativaSelecionada, setAlternativaSelecionada] = useState('')
  const [resposta, setResposta] = useState('')
  const [concluido, setConcluido] = useState(false)

  const getQuestao = questoes[questaoAtual]
  const handleProximasQuestoes = () => {
    questaoAtual === questoes.length - 1 ? setConcluido(true) : setQuestaoAtual(questaoAtual + 1)
  }

  const Concluido = <View style={styles.containerConcluido}>
    <Image source={require('../../assets/atividade-concluida.png')} style={styles.imagemConclusao}/>
    <Text style={[styles.titulo, styles.textosConcluida]}>PARABÉNS</Text>
    <Text style={[styles.texto, styles.textosConcluida]}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur incidunt sapiente nihil accusantium unde molestias maxime voluptatibus, eius repellat consequatur vel, libero esse quidem doloremque facilis! Eos, nemo nulla?
    </Text>
  </View>

  const Questao = () => {
    switch (getQuestao.tipo) {
      case 'questao':
        return (
          <View>
            <Text style={styles.texto}>{getQuestao.titulo}</Text>
            {
              getQuestao.alternativas.map((alternativa) => (
                <TouchableHighlight
                  onPress={() => setAlternativaSelecionada(alternativa.alternativa)}
                  underlayColor="#fff"
                  style={[
                    styles.alternativasTouchable,
                    alternativaSelecionada === alternativa.alternativa ? styles.alternativasTouchableSelecionada : null
                  ]}
                  key={alternativa.alternativa}
                >
                  <Text style={[
                    styles.alternativasTexto,
                    alternativaSelecionada === alternativa.alternativa ? styles.alternativasTextoSelecionada : null
                  ]}
                  >
                    {alternativa.alternativa} - {alternativa.texto}
                  </Text>
                </TouchableHighlight>
              ))
            }
          </View>
        );
      case 'enviar':
        return (
          <View>
            <Text style={styles.texto}>{getQuestao.texto}</Text>
            <TouchableHighlight
              onPress={() => setQuestaoAtual(1)}
              style={[styles.botaoTouchable, styles.baixarArquivoTouchable]}
              underlayColor="#6344FF"
            >
              <View style={styles.baixarArquivoBotao}>
                <AgendaPequenaIcon />
                <Text style={[styles.proximaQuestaoTexto, styles.baixarArquivoTexto]}>
                  Baixar arquivo
                </Text>
              </View>
            </TouchableHighlight>

            <TextInput
              placeholder="Escreva sua resposta aqui"
              onChangeText={setResposta}
              value={resposta}
              style={styles.input}
              multiline={true}
            />

            <TouchableHighlight
              onPress={() => setQuestaoAtual(1)}
              style={[styles.botaoTouchable, styles.enviarArquivoTouchable]}
              underlayColor="#fff"
            >
              <View style={styles.enviarArquivoBotao}>
                <AgendaPequenaIcon />
                <Text style={[styles.proximaQuestaoTexto, styles.enviarArquivoTexto]}>
                  Enviar arquivo
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        );
      case 'video':
        return (
          <View>
            <View style={styles.videoWrapper}>
              <Image 
                source={{uri:'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png'}}
                style={styles.video}
              />
              <View style={styles.playBotao}>
                <PlayIcon color='#fff' />
              </View>
            </View>
            <Text style={styles.titulo}>{getQuestao.titulo}</Text>
            <Text style={styles.texto}>{getQuestao.texto}</Text>
          </View>
        );
      default:
        return (
          <View>
            <Text style={styles.titulo}>{getQuestao.titulo}</Text>
            <Text style={styles.texto}>{getQuestao.texto}</Text>

            <TouchableHighlight
              onPress={() => setQuestaoAtual(1)}
              style={[styles.botaoTouchable, styles.baixarArquivoTouchable]}
              underlayColor="#6344FF"
            >
              <View style={styles.baixarArquivoBotao}>
                <AgendaPequenaIcon />
                <Text style={[styles.proximaQuestaoTexto, styles.baixarArquivoTexto]}>
                  Baixar arquivo
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        );
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.pageWrapper}>
      <Text style={styles.barraProgressoTexto}>
        Questão {questaoAtual + 1}/{quantidadeQuestoes}
      </Text>
      <View style={styles.barraProgresso}>
        <View style={[styles.barraProgressoInterior, { width: `${(100 / quantidadeQuestoes) * (questaoAtual + 1)}%` }]} />
      </View>

      {
        concluido ? 
          null : 
          <>
            <Text style={styles.titulo}>
              Responda a questão abaixo:
            </Text>
            <Text style={styles.identificadorTexto}>HF8349</Text>
          </>
      }

      <View style={styles.questaoContainer}>
        {concluido ? Concluido : Questao()}
        
        <TouchableHighlight
          onPress={handleProximasQuestoes}
          style={[
            styles.botaoTouchable,
            questaoAtual === questoes.length - 1 ? styles.finalizarAtividade : null
          ]}
          underlayColor={questaoAtual === questoes.length - 1 ? "#0C650A" : "#EE4C4B"}
        >
          <View style={styles.finalizarFlex}>
            <Text style={styles.proximaQuestaoTexto}>
              {
                questaoAtual === questoes.length - 1 ?
                concluido ? 'Certo!' : 'Finalizar atividade'
                : 'Próxima questão'
               }
            </Text>
            {questaoAtual === questoes.length - 1 ? null : <ChevronIcon style={styles.seta}/>}
          </View>
        </TouchableHighlight>
      </View>

    </ScrollView>
  )
}
export default FazerAtividadeTela