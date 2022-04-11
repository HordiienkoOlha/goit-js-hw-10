import { onClick } from './helpers/onClick';
import debounce from 'lodash.debounce';
import './css/styles.css';
import 'material-icons/iconfont/material-icons.css';

const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');

textInput.addEventListener('input', debounce(onClick, DEBOUNCE_DELAY));

