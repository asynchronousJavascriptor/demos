let nextTrigger = 50; // Start with 50%
let isLoading = false; // Prevent spamming
let page = 0; // For pagination if needed

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

function getMoreElem() {
  isLoading = true;

  axios
    .get(`https://dummyjson.com/users?limit=12&skip=${page * 12}`)
    .then((response) => {
      page++;
      isLoading = false;

      response.data.users.forEach((user) => {
        const card = document.createElement("div");
        card.className =
          "bg-white rounded-lg shadow-md p-6 flex flex-col items-center";

        const img = document.createElement("img");
        img.className = "w-24 h-24 rounded-full mb-4";
        img.src = user.image;
        img.alt = "User Photo";
        card.appendChild(img);

        const name = document.createElement("h2");
        name.className = "text-xl font-semibold mb-2";
        name.textContent = user.firstName + " " + user.lastName;
        card.appendChild(name);

        const email = document.createElement("p");
        email.className = "text-gray-600 mb-1";
        email.textContent = user.email;
        card.appendChild(email);

        const role = document.createElement("p");
        role.className = "text-gray-500";
        role.textContent = user.university;
        card.appendChild(role);

        document.querySelector(".users").appendChild(card);
      });

      nextTrigger = 80;
    });
}

getMoreElem();

function handleScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;

  if (scrolled >= nextTrigger && !isLoading) {
    getMoreElem();
  }
}

window.addEventListener("scroll", throttle(handleScroll, 200));
