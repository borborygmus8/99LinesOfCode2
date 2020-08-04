const friends = ['Buddy', 'Kitty', 'Teia', 'Zoe', 'Chloe'],
    sing = document.querySelector('.sing');

sing.addEventListener('click', () => {
    for (let i = 0; i < friends.length; i++) {
        const div = document.createElement('div'),
            h3 = document.createElement('h3');

        h3.textContent = `${friends[i].toUpperCase()}:`;
        div.className = 'friend';
        div.appendChild(h3);
    
        for (let j = 99; j > 0; j--) {
            const p = document.createElement('p');
            let text = document.createTextNode(`${j} ${j > 1 ? 'lines' : 'line'} of code in the file, ${j} ${j > 1 ? 'lines' : 'line'} of code; ${friends[i]} strikes one out, clears it all out, ${j > 1 ? j - 1 : 'no more'} lines of code in the file`);
            p.appendChild(text);
            div.appendChild(p);
        }

        sing.style.display = 'none';
        document.body.appendChild(div);
    }
    const reload = document.createElement('button');
    reload.className = 'reload';
    reload.textContent = 'Reload'
    document.body.appendChild(reload);

    reload.addEventListener('click', () => {
        window.location.reload();
    });
});
