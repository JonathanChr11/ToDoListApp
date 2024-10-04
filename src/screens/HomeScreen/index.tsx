import React, {useCallback, useState} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProjectDataProps, StackParamList} from '../../utils';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {useLayoutContext} from '../../context/LayoutContext';
import {getProject} from '../../api/project';
import {useFocusEffect} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDiagramProject,
  faEllipsis,
  faListCheck,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card';
import Button from '../../components/Button';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

export default function HomeScreen({navigation}: HomeScreenProps) {
  const {user} = useLayoutContext();

  const [projectsData, setProjectsData] = useState<ProjectDataProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getProject()
        .then(res => res.json())
        .then(data => setProjectsData(data));
    }, []),
  );

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.homeSubcontainer}>
        <View>
          <Text style={styles.homeParagraph}>Hello, {user}</Text>
          <Text style={styles.homeHeading}>Your</Text>
          <Text style={styles.homeHeading}>
            Projects ({projectsData.length})
          </Text>
        </View>
        <Pressable
          style={styles.homeMenuButton}
          onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon icon={faEllipsis} size={15} />
        </Pressable>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.homeModalContainer}>
            <View style={styles.homeModalBackButtonContainer}>
              <Pressable
                style={styles.homeModalBackButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesomeIcon icon={faX} size={30} />
              </Pressable>
            </View>
            <View style={styles.homeModalSubcontainer}>
              <Pressable
                style={styles.homeModalButton}
                onPress={() => {
                  navigation.navigate('NewProject');
                  setModalVisible(!modalVisible);
                }}>
                <FontAwesomeIcon icon={faDiagramProject} size={15} />
                <Text style={styles.homeParagraph}>Create Project</Text>
              </Pressable>
              <Pressable
                style={styles.homeModalButton}
                onPress={() => {
                  navigation.navigate('NewTask');
                  setModalVisible(!modalVisible);
                }}>
                <FontAwesomeIcon icon={faListCheck} size={15} />
                <Text style={styles.homeParagraph}>Create Task</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={
          projectsData.length > 0 ? styles.homeProject : styles.homeProjectEmpty
        }>
        <View style={styles.homeProjectInner}>
          {projectsData.length > 0 ? (
            projectsData.map((data, index) => {
              const completedTasks =
                data.tasks?.filter(task => task.status === 'Completed')
                  .length || 0;
              const totalTasks = data.tasks?.length || 0;
              return (
                <Card
                  key={index}
                  onCardPress={() =>
                    navigation.navigate('ProjectDetails', {
                      projectId: data.id,
                    })
                  }
                  background={data.background}
                  title={data.title}
                  completedTasks={completedTasks}
                  totalTasks={totalTasks}
                  onButtonPress={() => {
                    navigation.navigate('NewTask', {
                      projectId: data.id,
                    });
                  }}
                />
              );
            })
          ) : (
            <>
              <Text style={styles.homeParagraph}>
                Don't have any Project? Create One !
              </Text>
              <Button
                buttonContainerStyle={styles.homeButtonContainer}
                buttonTextStyle={styles.homeButtonText}
                title="Create"
                onPress={() => navigation.navigate('NewProject')}
              />
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
