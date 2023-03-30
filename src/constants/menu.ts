import { Menu } from '@/types';

export const MENUS: Menu[] = [
  {
    id: 1,
    title: 'LAYOUT',
    children: ['Spacing'],
  },
  {
    id: 2,
    title: 'FORMS',
    children: ['Dropdown', 'InputField'],
  },
  {
    id: 3,
    title: 'DATA DISPLAY',
    children: ['Divider', 'Tooltip'],
  },
  {
    id: 4,
    title: 'TYPOGRAPHY',
    children: ['Heading', 'Text'],
  },
];
