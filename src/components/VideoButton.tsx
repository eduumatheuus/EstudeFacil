import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Linking, ImageSourcePropType } from 'react-native';

interface VideoButtonProps {
  title: string;
  imageSource: ImageSourcePropType;
  youtubeUrl: string;
}

const VideoButton: React.FC<VideoButtonProps> = ({ title, imageSource, youtubeUrl }) => {
  const openYoutubeVideo = async () => {
    const supported = await Linking.canOpenURL(youtubeUrl);
    if (supported) {
      await Linking.openURL(youtubeUrl);
    } else {
      console.log(`Não foi possível abrir o URL: ${youtubeUrl}`);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={openYoutubeVideo}>
      <Image source={imageSource} style={styles.thumbnail} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
  },
  thumbnail: {
    width: 250,
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
    
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'monospace'

  },
});

export default VideoButton;
