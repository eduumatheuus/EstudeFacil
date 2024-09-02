import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import VideoButton from '../components/VideoButton';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>ESTUDE FÁCIL</Text>
          <Text style={styles.text}>Por Eduardo Matheus dos Santos</Text>
        </View>
        <View style={styles.content}>
          <VideoButton
            title="Curso de Informática Básica"
            imageSource={require('../../assets/video1-thumbnail.png')}
            youtubeUrl="https://www.youtube.com/watch?v=9fNHAD7ZDL4&list=PL-QAz5R5Rlm7wn20xLTIr84gbS2XkzqEZ"
          />
        </View>
        <View style={styles.content}>
          <VideoButton
            title="Curso de Excel Básico"
            imageSource={require('../../assets/video2-thumbnail.png')}
            youtubeUrl="https://www.youtube.com/watch?v=I2taMQ3j6qo&list=PL_Q1UZN6PAWqrBdTnR7blwmzGXmkPzMVY"
          />
        </View>
        <View style={styles.content}>
          <VideoButton
            title="Curso de Programação Básica"
            imageSource={require('../../assets/video3-thumbnail.png')}
            youtubeUrl="https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV"
          />
        </View>
        <View style={styles.content}>
          <VideoButton
            title="Curso de Digitação"
            imageSource={require('../../assets/video4-thumbnail.png')}
            youtubeUrl="https://www.youtube.com/watch?v=TD6fpUdNwMw&list=PLkjp2jiJ9ZpiSjVcoZQkKaWtqZFKj_po-"
          />
        </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: 'black'
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'lightblue',
    fontFamily: 'ComicSans',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12, 

  }
});

export default HomeScreen;
