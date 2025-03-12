if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(error => console.log('Service Worker registration failed:', error));
}

const subscriptionsList = document.getElementById('subscriptions');
const addSubscriptionForm = document.getElementById('add-subscription');

addSubscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const cost = document.getElementById('cost').value;

    const subscription = document.createElement('li');
    subscription.textContent = `${name} - ${cost} рублей`;
    subscriptionsList.appendChild(subscription);

    document.getElementById('name').value = '';
    document.getElementById('cost').value = '';
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(error => console.log('Service Worker registration failed:', error));
}

const subscriptionsList = document.getElementById('subscriptions');
const addSubscriptionForm = document.getElementById('add-subscription');

addSubscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const cost = document.getElementById('cost').value;

    const subscription = document.createElement('li');
    subscription.textContent = `${name} - ${cost} рублей`;
    subscriptionsList.appendChild(subscription);

    document.getElementById('name').value = '';
    document.getElementById('cost').value = '';
});

// Добавляем service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(error => console.log('Service Worker registration failed:', error));
}

// Имитация service worker
const serviceWorkerScript = document.createElement('script');
serviceWorkerScript.type = 'module';
serviceWorkerScript.innerHTML = `
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js',
                'https://via.placeholder.com/192.png',
                'https://via.placeholder.com/512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
`;
document.head.appendChild(serviceWorkerScript);

