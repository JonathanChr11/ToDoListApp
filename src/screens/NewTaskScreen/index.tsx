/* eslint-disable @typescript-eslint/no-shadow */
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {getProject} from '../../api/project';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faPlus, faX} from '@fortawesome/free-solid-svg-icons';
import {addTask, getTask} from '../../api/task';
import { ProjectDataProps, StackParamList, TaskDataProps } from '../../utils';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import DatePicker from 'react-native-date-picker';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

type NewTaskProps = {
  route: RouteProp<StackParamList, 'NewTask'>;
  navigation: NativeStackNavigationProp<StackParamList, 'NewTask'>;
};

export default function NewTaskScreen({route, navigation}: NewTaskProps) {
  const [dateActive, setDateActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(1);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tasks, setTasks] = useState<TaskDataProps[]>([]);
  const [projectsData, setProjectsData] = useState<ProjectDataProps[]>([]);

  const {projectId} = route.params || {};

  const maxId = tasks?.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
  const id = maxId + 1;

  const data = {
    id,
    date,
    title,
    description: desc,
    status: 'On Progress',
  };

  function handleSubmit() {
    addTask({projectId: selectedProject, taskData: data});
    navigation.navigate('Home');
  }

  useEffect(() => {
    getTask(selectedProject)
      .then(res => res.json())
      .then(data => setTasks(data.tasks));
  }, [selectedProject]);

  useEffect(() => {
    getProject()
      .then(res => res.json())
      .then(data => setProjectsData(data));
  }, []);

  useEffect(() => {
    if (projectId) {
      setSelectedProject(projectId);
    }
  }, [projectId]);

  return (
    <ScrollView style={styles.newTaskContainer}>
      <View style={styles.newTaskSubcontainer}>
        <View>
          <Pressable
            style={styles.newTaskBackButton}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faX} size={30} />
          </Pressable>
          <Text style={styles.newTaskHeading}>New Task</Text>
          <View style={styles.newTaskContent}>
            <View style={styles.newTaskAction}>
              <Button
                buttonContainerStyle={
                  dateActive === 1 && styles.newTaskActiveBg
                }
                buttonTextStyle={dateActive === 1 && styles.newTaskActiveText}
                title="Today"
                onPress={() => {
                  setDate(new Date());
                  setDateActive(1);
                }}
              />
              <Button
                buttonContainerStyle={
                  dateActive === 2 && styles.newTaskActiveBg
                }
                buttonTextStyle={dateActive === 2 && styles.newTaskActiveText}
                title="Tomorrow"
                onPress={() => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 1);
                  setDate(tomorrow);
                  setDateActive(2);
                }}
              />
            </View>
            <View style={styles.newTaskAction}>
              <Pressable
                style={styles.newTaskTime}
                onPress={() => setOpen(true)}>
                <FontAwesomeIcon icon={faClock} size={30} />
              </Pressable>
              {open && (
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode="time"
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              )}
            </View>
          </View>
        </View>
        {!projectId && (
          <View style={styles.newTaskContent}>
            <Text style={styles.newTaskParagraph}>PROJECTS</Text>
            <ScrollView
              contentContainerStyle={styles.newTaskAction}
              horizontal={true}>
              <Pressable
                style={styles.newTaskAddButton}
                onPress={() => navigation.navigate('NewProject')}>
                <FontAwesomeIcon icon={faPlus} size={30} />
              </Pressable>
              {projectsData.length > 0 &&
                projectsData.map((data, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedIndex(index);
                      setSelectedProject(index + 1);
                    }}>
                    <LinearGradient
                      colors={
                        index === selectedIndex
                          ? data.background
                          : ['#ffffff', '#ffffff']
                      }
                      style={styles.newTaskProject}>
                      <Text
                        style={[
                          styles.newTaskParagraph,
                          index === selectedIndex && styles.newTaskActiveText,
                        ]}>
                        {data.title}
                      </Text>
                    </LinearGradient>
                  </Pressable>
                ))}
            </ScrollView>
          </View>
        )}
        <View style={styles.newTaskContent}>
          <Text style={styles.newTaskParagraph}>TITLE</Text>
          <View style={styles.newTaskContent}>
            <TextInput
              style={styles.newTaskInput}
              onChangeText={setTitle}
              value={title}
              placeholder="Title"
            />
            <TextInput
              style={styles.newTaskInput}
              onChangeText={setDesc}
              value={desc}
              placeholder="Description (optional)"
            />
          </View>
        </View>
      </View>
      <View style={styles.newTaskCreate}>
        <Button
          buttonContainerStyle={styles.newTaskButtonContainer}
          buttonTextStyle={styles.newTaskButtonText}
          title="Create"
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}
