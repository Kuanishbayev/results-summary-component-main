const ul = document.querySelector("ul");

fetch("./data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    data.map((item) => {
      ul.innerHTML += `
            <li>
                <span class="left">
                    <img src="${item.icon}" alt="${item.category} icon"> ${item.category}
                </span>
                <span class="right">
                    <span class="current">${item.score}</span>
                    <span class="total">/ 100</span>
                </span>
            </li>
        `;
    });
  })
  .catch((error) => console.error("Unable to fetch data:", error));
