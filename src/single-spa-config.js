import * as singleSpa from 'single-spa';

const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

singleSpa.registerApplication(
    'singleDemo',
    async () => {
        await runScript('http://localhost:3000/app.js');
        return window.singleVue
    },
    location => location.pathname.startsWith('/vue')
);

singleSpa.registerApplication(
    'reactApp',
    async () => {
        await runScript('http://localhost:3001/static/js/main.js');
        return window.reactApp;
    },
    location => location.pathname.startsWith('/react')
);

singleSpa.registerApplication(
    'angular-app',
    async () => {
        await runScript('http://localhost:3002/inline.bundle.js');
        await runScript('http://localhost:3002/polyfills.bundle.js');
        await runScript('http://localhost:3002/styles.bundle.js');
        await runScript('http://localhost:3002/vendor.bundle.js');
        await runScript('http://localhost:3002/main.bundle.js');
        return window.angularApp;
    },
    location => location.pathname.startsWith('/angular')
);

singleSpa.start();
