import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {CardProps} from './props';
import {styles} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

export default function Card({
  onCardPress,
  background,
  title,
  completedTasks,
  totalTasks,
  onButtonPress,
}: CardProps) {
  return (
    <Pressable style={styles.cardContainer} onPress={onCardPress}>
      <LinearGradient colors={background} style={styles.cardSubcontainer}>
        <Text style={styles.cardHeading}>{title}</Text>
        <View>
          <Text style={styles.cardSubHeading}>
            {completedTasks}/{totalTasks}
          </Text>
          <Text style={styles.cardParagraph}>Tasks</Text>
          {totalTasks > 0 && (
            <Progress.Bar
              indeterminate={false}
              progress={completedTasks / totalTasks}
              color="white"
            />
          )}
        </View>
        <View style={styles.cardButtonContainer}>
          <Pressable style={styles.cardAddButton} onPress={onButtonPress}>
            <FontAwesomeIcon icon={faPlus} size={30} />
          </Pressable>
        </View>
      </LinearGradient>
    </Pressable>
  );
}
