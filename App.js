import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundScreen from './app/screens/BackgroundScreen';
import Tabs from './app/routes/Tabs';
import StartScreen from './app/screens/StartScreen';
import LoginScreen from './app/screens/LoginScreen';
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => 
  {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  if(loading==false){
    return (
      <BackgroundScreen>
      <Tabs />
    </BackgroundScreen>
    );
  }
  else{
    <BackgroundScreen/>
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});