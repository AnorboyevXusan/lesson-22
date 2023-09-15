

// const searchInput = document.getElementById('search-input');
// const totalCountries = document.querySelector('.total-countries');
// const pagination = document.getElementById('pagination');
// const countriesRow = document.getElementById('countries-row');

// let search = '';
// let activePage = 1;

// async function getCountries() {
//     try {
//         countriesRow.innerHTML = 'Yuklanmoqda...';

//         const apiUrl = 'https://ap-countries-api.vercel.app/all';

//         const response = await fetch(`${apiUrl}?page=${activePage}&limit=10&sort=title&order=desc`);
//         const data = await response.json();

//         let pages = Math.ceil(data.length / 10);

//         if (pages) {
//             pagination.innerHTML = `
//                 <li class="page-item ${activePage === 1 ? 'disabled' : ''}">
//                     <button class="page-link" onclick="getPage('-')">Oldingi</button>
//                 </li>
//             `;
//             for (let i = 1; i <= pages; i++) {
//                 pagination.innerHTML += `
//                     <li class="page-item ${i === activePage ? 'active' : ''}">
//                         <button class="page-link" onclick="getPage(${i})">${i}</button>
//                     </li>
//                 `;
//             }

//             pagination.innerHTML += `
//                 <li class="page-item ${activePage === pages ? 'disabled' : ''}">
//                     <button class="page-link" onclick="getPage('+')">Keyingi</button>
//                 </li>
//             `;
//         } else {
//             pagination.innerHTML = '';
//         }

//         totalCountries.textContent = data.length;
//         countriesRow.innerHTML = '';
//         if (data.length) {
//             data.map(country => {
//                 countriesRow.innerHTML += `
//                     <div class="country">
//                         <img src="${country.flags.png}" alt="${country.name.common}" class="flag">
//                         <h3>${country.name.common}</h3>
//                         <p>${country.capital}</p>
//                     </div>
//                 `;
//             });
//         } else {
//             countriesRow.innerHTML = 'Hech qanday davlat topilmadi';
//         }
//     } catch (err) {
//         alert(err);
//     }
// }

// getCountries();

// searchInput.addEventListener('keyup', function () {
//     search = this.value;
//     activePage = 1;
//     getCountries();
// });

// function getPage(page) {
//     if (page === '+') {
//         activePage++;
//     } else if (page === '-') {
//         activePage--;
//     } else {
//         activePage = page;
//     }
//     getCountries();
// }

