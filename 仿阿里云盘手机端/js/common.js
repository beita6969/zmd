document
  .querySelector("input[type='search']")
  ?.addEventListener("click", (event) => {
    event.preventDefault();
    location.href = "./search.html";
  });

const userEl = document.querySelector(".tx");
userEl?.addEventListener("click", () => {
  location.href = "./set.html";
});

function navBack() {
  history.back();
}

function navTo(url) {
  location.href = url;
}


