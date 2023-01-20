// My attempt

// the number counts
const headerCount = document.getElementById("counter");
let count = +headerCount.textContent;
setInterval(() => {
  count++;
  headerCount.textContent = `${count}`;
  //   console.log(count);
  //   clearInterval(count); // uncomment to pause
}, 1000);

// minus
const minusElement = document.getElementById("minus");
minusElement.addEventListener("click", () => {
  count--;
  headerCount.textContent = count;
  //   console.log(count);
});

// plus
const plusElement = document.getElementById("plus");
plusElement.addEventListener("click", () => {
  count++;
  headerCount.textContent = count;
  //   console.log(count);
});

// heart
const ul = document.querySelector(".likes");

const heartElement = document.getElementById("heart");
heartElement.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = `${count} has been liked.`;
  ul.appendChild(li);
  //   console.log(count);
});

// pause
const pauseElement = document.getElementById("pause");
pauseElement.addEventListener("click", (e) => {
  clearInterval();
});
// not done with this

// comments
const form = document.getElementById("comment-form");
const enteredInput = document.getElementById("comment-input");
const commentsElement = document.getElementById("list");

const commentsButton = document.getElementById("submit");
commentsButton.addEventListener("click", (e) => {
  e.preventDefault();
  let p = document.createElement("p");
  //   console.log(enteredInput.value);
  p.textContent = enteredInput.value;
  commentsElement.appendChild(p);
  form.reset(); // clear content
});
