const postsRow = document.querySelector(".posts-row");
const searchInput = document.querySelector("input");
const totalPosts = document.querySelector(".total-posts");
const pagination = document.querySelector(".pagination");

let search = "";
let activePage = 1;

async function getPosts() {
  try {
    postsRow.innerHTML = "Loading...";

    // let posts = await getData(
    //   `https://jsonplaceholder.typicode.com/posts?q=${search}`
    // );

    // let pgtnPosts = await getData(
    //   `https://jsonplaceholder.typicode.com/posts?q=${search}&_page=${activePage}&_limit=10`
    // );

    const p1 = getData(`${ENDPOINT}posts?q=${search}`);
    const p2 = getData(
      `${ENDPOINT}posts?q=${search}&_page=${activePage}&_limit=10`
    );

    const [posts, pgtnPosts] = await Promise.all([p1, p2]);

    let pages = Math.ceil(posts.length / 10);

    if (pages) {
      pagination.innerHTML = `
        <li class="page-item ${activePage === 1 ? "disabled" : ""}">
          <button onClick="getPage('-')" class="page-link">Previous</button>
        </li>
      `;
      for (let i = 1; i <= pages; i++) {
        pagination.innerHTML += `
        <li class="page-item ${i === activePage ? "active" : ""}">
          <button onClick="getPage(${i})" class="page-link">${i}</button>
        </li>
      `;
      }

      pagination.innerHTML += `
        <li class="page-item ${activePage === pages ? "disabled" : ""}">
          <button onClick="getPage('+')" class="page-link">Next</button>
        </li>
      `;
    } else {
      pagination.innerHTML = "";
    }

    totalPosts.textContent = posts.length;
    postsRow.innerHTML = "";
    if (posts.length) {
      pgtnPosts.map((post) => {
        postsRow.innerHTML += `
          <div>
           <img src="" alt="">
            <h3>${post.id}. ${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
    } else {
      postsRow.innerHTML = "No posts";
    }
  } catch (err) {
    alert(err);
  }
}

getPosts();

searchInput.addEventListener("keyup", function () {
  search = this.value;
  activePage = 1;
  getPosts();
});

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = page;
  }
  getPosts();
}
