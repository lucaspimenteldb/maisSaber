import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight, TextInput } from 'react-native'
import styles from './styles.js'

import AgendaPequenaIcon from '../../assets/icons/AgendaPequenoIcon.js'

const FazerAtividadeTela = ({ route, navigation }) => {

  const { quantidadeQuestoes, questoes } = route.params
  const [questaoAtual, setQuestaoAtual] = useState(0)
  const [alternativaSelecionada, setAlternativaSelecionada] = useState('')
  const [resposta, setResposta] = useState('')

  const getQuestao = questoes[questaoAtual]

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
        break;
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
      default:
        return (
          <View>
            <Text>oi</Text>
          </View>
        )
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

      <Text style={styles.titulo}>
        Responda a questão abaixo:
      </Text>
      <Text style={styles.identificadorTexto}>HF8349</Text>

      <View style={styles.questaoContainer}>
        {Questao()}

        <TouchableHighlight
          onPress={() => setQuestaoAtual(1)}
          style={styles.botaoTouchable}
          underlayColor="#6344FF"
        >
          <Text style={styles.proximaQuestaoTexto}>Próxima questão</Text>
        </TouchableHighlight>
      </View>

    </ScrollView>
  )
}
export default FazerAtividadeTela