document.getElementById('addElement').addEventListener('click', function() {
    const table = document.querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><button class="up">↑</button><button class="down">↓</button><button class="delete">x</button></td>
    `;
    table.appendChild(newRow);
});

document.getElementById('save').addEventListener('click', function() {
    const rows = document.querySelectorAll('tbody tr');
    const data = {};

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const name = cells[0].querySelector('input').value; 
        const value = cells[1].querySelector('input').value; 
        if (name && value) { 
            data[name] = value;
        }
    });
    const output = document.getElementById('output');
    output.textContent = JSON.stringify(data, null, 2); 
});

document.querySelector('tbody').addEventListener('click', function(e) {
    if (e.target.classList.contains('up')) {
        const row = e.target.closest('tr');
        const previousRow = row.previousElementSibling;
        if (previousRow) {
            row.parentNode.insertBefore(row, previousRow);
        }
    } else if (e.target.classList.contains('down')) {
        const row = e.target.closest('tr');
        const nextRow = row.nextElementSibling;
        if (nextRow) {
            row.parentNode.insertBefore(nextRow, row);
        }
    } else if (e.target.classList.contains('delete')) {
        const row = e.target.closest('tr');
        row.remove();
    }
});