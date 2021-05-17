import {FormItem, MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'animation 101',
    icon: 'cube',
    component: 'Animation1',
  },
  {
    name: 'animation 102',
    icon: 'albums',
    component: 'Animation2',
  },
  {
    name: 'switchs',
    icon: 'toggle',
    component: 'Switch',
  },
  {
    name: 'alerts',
    icon: 'alert-circle',
    component: 'Alert',
  },
  {
    name: 'Text inputs',
    icon: 'document-text',
    component: 'TextInput',
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh',
    component: 'PullToRefresh',
  },
  {
    name: 'Section list',
    icon: 'list',
    component: 'SectionList',
  },
  {
    name: 'Modal',
    icon: 'copy',
    component: 'Modal',
  },
  {
    name: 'Infinite scroll',
    icon: 'download',
    component: 'InfiniteScroll',
  },
  {
    name: 'Slide',
    icon: 'flower',
    component: 'Slide',
  },
  {
    name: 'Change theme',
    icon: 'flask',
    component: 'ChangeTheme',
  },
];

export const FormItems: FormItem = {
  name: '',
  email: '',
  phone: '',
  subscribe: false,
};
