import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, ImageBackground } from 'react-native'
import LivroAberto from '../../assets/icons/LivroDigitalIcon'

import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Picker } from '@react-native-picker/picker'
import LinearGradient from 'react-native-linear-gradient'

import BookModal from '../../components/modals/book-modal/Modal.js'
import { setShowBookModal } from '../../redux/actions.js'

import styles from './styles.js'
import Service from './services/service'

const LivrosDigitais = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [selectOption, setSelectOption] = useState();
  const [bookSelectedModal, setBookSelectedModal] = useState();
  const [livros, setLivros] = useState([]);

  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showBookModal } = useSelector(state => state.showBookModalReducer)

  const bookModal = showBookModal ? <BookModal book={bookSelectedModal} /> : null

  const handleSelectBook = (livro) => {
    setBookSelectedModal(livro)
    dispatch(setShowBookModal(true))
  }

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          const response = await Service.getBooks();
          setLivros(response.livro)
        }
  
        begin()

        !livros ? begin() : null
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, []),
  );

  const inputSelect = (
    <>
      <View style={styles.filterSelect}>
        <Picker
          dropdownIconColor="#ddd"
          style={{color: "#ddd"}}
          selectedValue={selectOption}
          onValueChange={(itemValue, itemIndex) =>
            setSelectOption(itemValue)
          }
        >
          <Picker.Item key={0} value={'null'} label={'Selecione uma disciplina'} />
          <Picker.Item key={0} value={1} label={'Português'} />
        </Picker>
      </View>
    </>
  )

  return (
    <>
      <Spinner
        visible={spinner}
      />
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#E53952', '#EE4949', '#E17C1E']}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <LivroAberto />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Livros Digitais</Text>
              <Text style={styles.headerText}>Lorem ipsum dolor sit amet, consectetur.</Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.publicationHub, {paddingBottom: tabBarHeight}]}>
            <Text style={styles.titleContent}>Todos os livros:</Text>

            {inputSelect}

            <View style={styles.contentBooks}>
              {livros?.map(livro => (
                <TouchableHighlight
                  onPress={() => handleSelectBook(livro)}
                  underlayColor='#fff'
                  key={livro.id}
                >
                  <ImageBackground source={{ uri: `https://admin.sistemamaissaber.com.br/${livro.imagem}` }} style={styles.backgroundBooks}>
                    <Text style={styles.titleBook}>{livro.titulo}</Text>
                  </ImageBackground>
                </TouchableHighlight>
              ))}
            </View>
          </View>
        </ScrollView>

        {bookModal}
      </LinearGradient>
    </>
  )
}

export default LivrosDigitais