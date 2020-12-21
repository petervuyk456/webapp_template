import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

function test() {
    let a =""
    return a
}

function test2() {
    const x = test()
}

render(<h1>Hello World!</h1>, document.getElementById('root'));