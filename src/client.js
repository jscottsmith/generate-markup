import 'babel-polyfill';
import './index.html';
import generateMarkup from './generateMarkup.js';

// https://github.com/gumgum/hiring-javascript-engineer/blob/master/markup.md

const containers = [
    {
        id: 44,
        width: 300,
        name: 'Small',
    },
    {
        id: 54,
        width: 500,
        name: 'Medium',
    },
    {
        id: 78,
        width: 900,
        name: 'Large',
    },
];

const assets = [
    {
        id: 4,
        width: 300,
        height: 300,
        body: 'https://dog.ceo/api/img/corgi-cardigan/n02113186_11685.jpg',
        x: 20,
        y: 50,
        z: 2,
        containers: [44, 54, 78],
    },
    {
        id: 10,
        width: 260,
        height: 380,
        body: 'https://dog.ceo/api/img/corgi-cardigan/n02113186_3457.jpg',
        x: 500,
        y: 100,
        z: 3,
        containers: [54, 78],
    },
    {
        id: 25,
        width: 400,
        height: 300,
        body: 'https://dog.ceo/api/img/corgi-cardigan/n02113186_1594.jpg',
        x: 250,
        y: 200,
        z: 2,
        containers: [78],
    },
    {
        id: 45,
        width: '100%',
        height: 100,
        body: '#0fa0db',
        x: 0,
        y: 0,
        z: 1,
        containers: [44, 54],
    },
    {
        id: 67,
        width: '100%',
        height: 150,
        body: '#43E0BC',
        x: 0,
        y: 0,
        z: 1,
        containers: [78],
    },
];

// write the markup
const markup = generateMarkup(containers, assets);

setTimeout(() => document.write(markup), 0);
