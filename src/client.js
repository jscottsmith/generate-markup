import 'babel-polyfill';
import './index.html';

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

/**
 * Generates a string of markup based on container and assets
 * @param {array} containers - Array of objects representing each media query.
 * @param {array} assets - Array of objects representing each asset.
 * @returns {string}
 */

function generateMarkup(containers, assets) {
    // doc title
    const title = 'Generate Markup';

    // Reduce assets into base asset styles. All are hidden initially.
    // Media queries will display the assets as needed.
    const initialStyle = assets.reduce((acc, val) => {
        // if a number assume px, otherwise just write the string
        const w =
            typeof val.width === 'number' ? `${val.width}px` : `${val.width}`;
        const h =
            typeof val.height === 'number'
                ? `${val.height}px`
                : `${val.height}`;

        // if a # assume hex and write to color, otherwise assume it an image.
        const background =
            val.body.indexOf('#') === 0 ? val.body : `url(${val.body})`;

        // return the #id and associated styles
        return (
            acc +
            `#asset-${val.id} {
                position: absolute;
                width: ${w};
                height: ${h};
                left: ${val.x}px;
                bottom: ${val.y}px;
                z-index: ${val.z};
                background: ${background};
                display: none;
            }\n`
        );
    }, '');

    // reduce containers into media queries
    // and find all assets with associated
    // containers to display within the query
    const stylesAndQueries = containers.reduce((acc, val) => {
        // filter assets to what will be visible within
        // this container then reduce those assets to
        // style declarations that display the id.
        const visibleAssets = assets
            .filter(asset => asset.containers.includes(val.id))
            .reduce((_acc, _val) => {
                return _acc + `#asset-${_val.id} { display: block; }\n`;
            }, '');

        return (
            acc +
            `@media (min-width: ${val.width}px) {
                ${visibleAssets}
            }\n`
        );
    }, initialStyle);

    // set the within a style tag
    const style = `<style>${stylesAndQueries}</style>`;

    // reduce assets to divs with id referencing their style
    const body = assets.reduce(
        (acc, val) => acc + `<div id="asset-${val.id}"></div>`,
        ''
    );

    // wrap it all up in html and send it along
    const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            ${style}
        </head>
        <body>
            ${body}
        </body>
    </html>`;

    return html;
}

// write the markup
const markup = generateMarkup(containers, assets);

setTimeout(() => document.write(markup), 0);
