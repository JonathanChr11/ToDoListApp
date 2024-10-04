import React, {useState} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../utils';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';
import {addProject} from '../../api/project';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';

type NewProjectProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'NewProject'>;
};

export default function NewProjectScreen({navigation}: NewProjectProps) {
  const [title, setTitle] = useState('');
  const [background, setBackground] = useState<string[]>([]);
  const [active, setActive] = useState(0);

  const data = {
    background: background,
    title: title,
    tasks: [],
  };

  function handleSubmit() {
    addProject(data);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.newProjectContainer}>
      <View style={styles.newProjectSubcontainer}>
        <View>
          <Pressable
            style={styles.newProjectBackButton}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faX} size={30} />
          </Pressable>
          <Text style={styles.newProjectHeading}>New Project</Text>
        </View>
        <View style={styles.newProjectContent}>
          <TextInput
            style={styles.newProjectInput}
            onChangeText={setTitle}
            value={title}
            placeholder="Input title here..."
          />
        </View>
        <View style={styles.newProjectContent}>
          <Text style={styles.newProjectParagraph}>BACKGROUND</Text>
          <View style={styles.newProjectAction}>
            <Pressable
              style={active === 1 && styles.newProjectActive}
              onPress={() => {
                setBackground(['#e66465', '#9198e5']);
                setActive(1);
              }}>
              <LinearGradient
                colors={['#e66465', '#9198e5']}
                style={styles.newProjectGradient}
              />
            </Pressable>
            <Pressable
              style={active === 2 && styles.newProjectActive}
              onPress={() => {
                setBackground(['#4c669f', '#3b5998', '#192f6a']);
                setActive(2);
              }}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.newProjectGradient}
              />
            </Pressable>
            <Pressable
              style={active === 3 && styles.newProjectActive}
              onPress={() => {
                setBackground(['#3f87a6', '#ebf8e1', '#f69d3c']);
                setActive(3);
              }}>
              <LinearGradient
                colors={['#3f87a6', '#ebf8e1', '#f69d3c']}
                style={styles.newProjectGradient}
              />
            </Pressable>
            <Pressable
              style={active === 4 && styles.newProjectActive}
              onPress={() => {
                setBackground(['#e66465', '#4d9f0c']);
                setActive(4);
              }}>
              <LinearGradient
                colors={['#e66465', '#4d9f0c']}
                style={styles.newProjectGradient}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.newProjectCreate}>
        <Button
          buttonContainerStyle={styles.newProjectButtonContainer}
          buttonTextStyle={styles.newProjectButtonText}
          title="Create"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
