import React, {useState} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../utils';
import {Image, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {useLayoutContext} from '../../context/LayoutContext';
import Button from '../../components/Button';

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Splash'>;
};

export default function SplashScreen({navigation}: SplashScreenProps) {
  const {setUser} = useLayoutContext();
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);

  function handleSubmit() {
    if (name === '') {
      setShowError(true);
    } else {
      setUser(name);
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.splashContainer}>
      <View style={styles.splashSubcontainer}>
        <Image
          style={styles.splashLogo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.splashParagraph}>To-Do List</Text>
      </View>
      <View style={styles.splashSubcontainer}>
        <TextInput
          style={styles.splashInput}
          onChangeText={setName}
          value={name}
          placeholder="Input your name here..."
        />
        {showError && (
          <Text style={styles.splashError}>Name can't be empty !</Text>
        )}
        <Button
          buttonContainerStyle={styles.splashButtonContainer}
          buttonTextStyle={styles.splashButtonText}
          title="Sign Up"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
