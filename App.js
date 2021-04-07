import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, ImageBackground, Platform, NativeModules } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [url, setUrl] = useState('http://projetos.42dias.com.br/SHM/');
  const [go, setGo] = useState(false);
  const { StatusBarManager } = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

  if (go == false) {
    return (
      <View style={{ height: '100%', backgroundColor: '#122540'}}>
        <StatusBar style="light" />
      <ImageBackground
        style={{color: '#fff', flex: 1, width: '100%', resizeMode: "cover", justifyContent: "center",marginTop: STATUSBAR_HEIGHT}}
        imageStyle={styles.bgImageStyle}
        source={require('./src/assets/app.png')}
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
      </View>
    );
  } else {
    return(
      <View style={{ height: '100%', backgroundColor: '#213361'}}>
      <StatusBar style="light" />
      <WebView
        source={{ uri: url }}
        style={{ marginTop: STATUSBAR_HEIGHT }}
      />
      </View>
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