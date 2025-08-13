export interface TimelineItemData {
  date?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  status: 'completed' | 'inProgress' | 'calendar';
  innerLink?: string;
  externalLink?: string;
}
