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
