import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [url, setUrl] = useState('projetos.42dias.com.br/SHM');
  const [go, setGo] = useState(false);

  if (go == false) {
    return (
      <ImageBackground
        style={styles.imgBg}
        imageStyle={styles.bgImageStyle}
        source={require('./src/assets/shm_app.jpeg')}
        /* blurRadius={2} */
      >
      <View style={styles.bgShadow}>
        <View style={styles.container}>
            {/* <View style={styles.logo}>
              <Image
                source={require('./src/assets/logoSHM.png')}
                resizeMode='contain'
                style={styles.image}
              >
              </Image>
            </View> */}
            
        </View>
        <View style={styles.divBtn}>
              <Button
                title='Acessar Sistema'
                color='rgb(9,173,177)'
                onPress={() => setGo(true)}
                style={styles.button}
              />
            </View>
      </View>  
      </ImageBackground>
    );
  } else {
    return(
      <WebView
        source={{ uri: url }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: "center",
  },
  bgShadow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 100
    /* backgroundColor: 'rgba(0, 0, 0, 0.65)', */
  },
  text: {
    borderWidth: 1,
    margin: 5,
  },
  divBtn: {
    width: '50%',
  },
  button: {
    height: '100%',
    borderRadius: 5
  },
  imgBg: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
    justifyContent: "center",
    
  },
  bgImageStyle: {},
  logo: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
  },
});