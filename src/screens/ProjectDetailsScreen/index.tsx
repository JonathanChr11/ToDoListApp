import {RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Modal, Pressable, ScrollView, Text, View} from 'react-native';
import {
  ProjectDataProps,
  StackParamList,
  status,
  TaskDataProps,
} from '../../utils';
import {getTask, updateTask} from '../../api/task';
import {
  faChevronLeft,
  faEllipsis,
  faPenToSquare,
  faPlus,
  faTrash,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {deleteProject} from '../../api/project';

import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type ProjectDetailsProps = {
  route: RouteProp<StackParamList, 'ProjectDetails'>;
  navigation: NativeStackNavigationProp<StackParamList, 'ProjectDetails'>;
};

export default function ProjectDetailsScreen({
  route,
  navigation,
}: ProjectDetailsProps) {
  const [projects, setProjects] = useState<ProjectDataProps | null>(null);
  const [tasks, setTasks] = useState<TaskDataProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const {projectId} = route.params;

  const completedTasks =
    projects?.tasks?.filter(task => task.status === 'Completed').length || 0;
  const totalTasks = projects?.tasks?.length || 0;

  function handleSubmit(isChecked: boolean, taskId: number) {
    const taskStatus: status = isChecked ? 'Completed' : 'On Progress';

    updateTask({projectId, taskId, taskStatus})
      .then(() => {
        setTasks(prevTasks =>
          prevTasks.map(task =>
            task.id === taskId ? {...task, status: taskStatus} : task,
          ),
        );

        if (projects) {
          setProjects({
            ...projects,
            tasks: projects.tasks.map(task =>
              task.id === taskId ? {...task, status: taskStatus} : task,
            ),
          });
        }
      })
      .catch(error => {
        console.error('Failed to update task:', error);
      });
  }

  useEffect(() => {
    getTask(projectId)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setTasks(data.tasks);
      });
  }, [projectId]);

  return (
    <ScrollView>
      <View style={styles.projectDetailsButtonContainer}>
        <Pressable
          style={styles.projectDetailsButton}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={15} />
        </Pressable>
        <Pressable
          style={styles.projectDetailsButton}
          onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon icon={faEllipsis} size={15} />
        </Pressable>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.projectDetailsModalContainer}>
            <View style={styles.projectDetailsModalBackButtonContainer}>
              <Pressable
                style={styles.projectDetailsModalBackButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesomeIcon icon={faX} size={30} />
              </Pressable>
            </View>
            <View style={styles.projectDetailsModalSubcontainer}>
              <Pressable
                style={styles.projectDetailsModalButton}
                onPress={() => Alert.alert('Coming Soon!', 'or Maybe not :D')}>
                <FontAwesomeIcon icon={faPenToSquare} size={15} />
                <Text style={styles.projectDetailsText}>Edit Project</Text>
              </Pressable>
              <Pressable
                style={styles.projectDetailsModalButton}
                onPress={() => {
                  deleteProject(projectId);
                  navigation.navigate('Home');
                }}>
                <FontAwesomeIcon icon={faTrash} size={15} />
                <Text style={styles.projectDetailsText}>Delete Project</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {projects && (
        <LinearGradient
          style={styles.projectDetailsHeader}
          colors={projects.background}>
          <Text style={styles.projectDetailsHeading}>{projects.title}</Text>
          <View>
            <Text style={styles.projectDetailsSubHeading}>
              {completedTasks} / {totalTasks}
            </Text>
            <Text style={styles.projectDetailsParagraph}>Tasks</Text>
            {totalTasks > 0 && (
              <Progress.Bar
                indeterminate={false}
                progress={completedTasks / totalTasks}
                color="white"
              />
            )}
          </View>
        </LinearGradient>
      )}
      <View style={styles.projectDetailsAddButtonContainer}>
        <Pressable
          style={styles.projectDetailsAddButton}
          onPress={() => {
            navigation.navigate('NewTask', {
              projectId,
            });
          }}>
          <FontAwesomeIcon icon={faPlus} size={30} />
        </Pressable>
      </View>
      <View style={styles.projectDetailsTaskList}>
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <BouncyCheckbox
              key={index}
              isChecked={task.status === 'Completed'}
              size={40}
              fillColor="gray"
              unFillColor="#FFFFFF"
              text={task.title}
              iconImageStyle={styles.projectDetailsIconList}
              textStyle={styles.projectDetailsText}
              onPress={(isChecked: boolean) => handleSubmit(isChecked, task.id)}
            />
          ))
        ) : (
          <Text style={styles.projectDetailsText}>No tasks yet</Text>
        )}
      </View>
    </ScrollView>
  );
}
