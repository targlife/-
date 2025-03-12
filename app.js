if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(error => console.log('Service Worker registration failed:', error));
}

const subscriptionsList = document.getElementById('subscriptions');
const addSubscriptionForm = document.getElementById('add-subscription');
const totalCostElement = document.getElementById('total-cost');

let totalCost = 0;

function updateTotalCost() {
    const animatedTotalCost = new CountUp(totalCostElement, totalCost, {
        duration: 1,
        useEasing: true,
        decimal: ',',
        separator: ' '
    });
    animatedTotalCost.start();
}

function addSubscription(name, cost) {
    const subscription = document.createElement('li');
    subscription.textContent = `${name} - ${cost} рублей`;
    subscriptionsList.appendChild(subscription);

    totalCost += cost;
    updateTotalCost();
}

addSubscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const cost = document.getElementById('cost').value;

    if (name && cost) {
        addSubscription(name, parseFloat(cost));
        document.getElementById('name').value = '';
        document.getElementById('cost').value = '';
    }
});

// Инициализация калькуляции затрат
updateTotalCost();
