let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function updateUI() {
    const list = document.getElementById('list');
    const totalDisplay = document.getElementById('total');
    list.innerHTML = '';
    
    let total = 0;
    transactions.forEach((t, index) => {
        total += parseFloat(t.amount);
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${t.description}</span>
            <div>
                <span>$${t.amount}</span>
                <button class="delete-btn" onclick="removeTransaction(${index})">Delete</button>
            </div>
        `;
        list.appendChild(li);
    });

    totalDisplay.innerText = `$${total.toFixed(2)}`;
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function addTransaction() {
    const desc = document.getElementById('desc').value;
    const amt = document.getElementById('amt').value;

    if(desc && amt) {
        transactions.push({ description: desc, amount: amt });
        document.getElementById('desc').value = '';
        document.getElementById('amt').value = '';
        updateUI();
    }
}

function removeTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

updateUI();
