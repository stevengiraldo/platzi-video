import React from 'react';
import { render } from 'react-dom';
import Category from '../category/components/category';
import data from '../api.json';

const app = document.getElementById('app');

render(<Category data={data} />, app);