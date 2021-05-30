import './style.css'

// RNG MSG
const msgs1 = ['ayooo', 'whats poppin', 'heya', 'yessssirrr'];
const randomIndex = Math.floor(Math.random()*msgs1.length);
document.querySelector('#leftarm').innerHTML = `<h1>` + msgs1[randomIndex] + `</h1>`;

const msgs2 = ['yes', 'no']
const randomIndex2 = Math.floor(Math.random()*msgs2.length);
document.querySelector('#rightarm').innerHTML = `<h1>` + msgs2[randomIndex2] + `</h1>`;


//document.querySelector('.belly').innerHTML = `
//`;

document.querySelector('#flexy').innerHTML = `
<div class="links" id="left">
    <a class="li" href="https://github.com/">Github</a>
    <a class="li" href="https://app.astralapp.com/dashboard">Astral</a>
    <a class="li" href="https://codecademy.com/learn">Codecademy</a>
    <a class="li" href="https://sidebar.io/">Sidebar</a>
</div>

<div class="links" id="center">
    <a class="li" href="https://redlink2.com/">RL2</a>
    <a class="li" href="https://my.vultr.com/">Vultr</a>
    <a class="li" href="https://dash.cloudflare.com/">Cloudflare</a>
    <a class="li" href="https://mail.protonmail.com/">pm.me</a>
</div>

<div class="links" id="right">
    <a class="li" href="https://play.hbomax.com/">HBO MAX</a>
    <a class="li" href="http://10.0.0.1/">Router</a>
    <a class="li" href="http://192.168.1.254/">Modem</a>
    <a class="li" href="http://10.0.0.22/admin">PiHole</a>
</div>
`;

document.querySelector('#feet').innerHTML = `

<div id="search">
    <input id="searchbar" autocomplete="on" type="text" title="Search" autofocus="" onkeydown="search(event)" placeholder=" Explore That Sea">
</div>

`;
