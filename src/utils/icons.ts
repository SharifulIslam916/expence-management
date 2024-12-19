import * as Icons from 'lucide-react';

export const getIconComponent = (iconName: string) => {
  const icon = Icons[iconName as keyof typeof Icons];
  return icon || Icons.HelpCircle;
};