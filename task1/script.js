let form = document.querySelector("form");
let title = document.querySelector("#title");
let url = document.querySelector("#url");

let bookmarks;
if (localStorage.getItem("bookmarks")) {
  bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
} else bookmarks = [];

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let titleVal = title.value;
  let urlVal = url.value;

  if (urlVal.startsWith("http")) {
    // sahi hai url
    let bookmark = {
      title: titleVal,
      url: urlVal,
    };

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    window.location.reload();
  } else console.error("invalid URL");
});

if (localStorage.getItem("bookmarks") !== null) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  bookmarks.forEach(function (bm) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = bm.title;
    a.href = bm.url;
    a.target = "_blank";

    li.appendChild(a);
    document.querySelector("ul").appendChild(li);
  });
}
