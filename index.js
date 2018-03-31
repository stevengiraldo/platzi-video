import React from 'react';
import { render } from 'react-dom';
import Category from './src/category/components/category';
import data from './src/api.json';

const app = document.getElementById('app');

render(<Category data={data} />, app);