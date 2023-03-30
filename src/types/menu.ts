type Title = 'LAYOUT' | 'FORMS' | 'DATA DISPLAY' | 'TYPOGRAPHY';

export type Menu = {
  id: number;
  title: Title;
  children: string[];
};
