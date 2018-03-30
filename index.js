import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

render(<Media title='¿Por qué aprender Responsive Design?' author='Steven Giraldo' src='./images/covers/responsive.jpg' />, app);