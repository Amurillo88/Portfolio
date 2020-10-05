/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i= 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode =  this.dataset.mode;
        console.log('Option Clicked', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if(mode === 'light') {
        document.getElementById('theme-style').href = 'style.css';
    }
    if(mode === 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }
    if(mode === 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }
    if(mode === 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }
    
    localStorage.setItem('theme', mode);
}

