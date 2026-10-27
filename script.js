(function () {
  const main = document.querySelector(".main_wrapper");
  const mockAPIUrl =
    "https://6ae07d0ebe3bc8fead9756cb.mockapi.io/api/data/users";

  fetch(mockAPIUrl)
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        const cardHTML = `<div class="card">
        <img
          class="card_img"
          src="${user.avatar}"
          alt="image"
        />
        <p class="card_name">${user.name}</p>
      </div>`;
        main.innerHTML += cardHTML;
      });
    });
})();
