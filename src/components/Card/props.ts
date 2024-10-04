export interface CardProps {
  onCardPress: () => void;
  background: string[];
  title: string;
  completedTasks: number;
  totalTasks: number;
  onButtonPress: () => void;
}
