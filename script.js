// ==========================================
// Task 01: Grab & Change
// ==========================================
const heading = document.querySelector("#main-heading");
const subText = document.querySelector("#sub-text");

heading.textContent = "CBU Course Explorer";
subText.style.color = "#1a73e8";
subText.textContent = "Script loaded successfully.";


// ==========================================
// Task 02: Click Counter
// ==========================================
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");

let count = 0;

likeBtn.addEventListener("click", () => {
  count++;
  likeCount.textContent = count;
});


// ==========================================
// Task 03: Toggle a Theme
// ==========================================
const themeToggleBtn = document.querySelector("#theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// ==========================================
// Task 04: Build a List from Data
// ==========================================
let courses = [
  "CS345 - Theory of Automata & Compiler Construction",
  "CS351 - Numerical Analysis",
  "CS310 - Database Systems",
  "CS322 - Operating Systems",
  "CS330 - Software Engineering"
];

const courseListEl = document.querySelector("#course-list");
const newCourseInput = document.querySelector("#new-course-input");
const addCourseBtn = document.querySelector("#add-course-btn");
const searchInput = document.querySelector("#search-input");

// Renders whatever array is passed in (used by both Task 04 and Task 05)
function renderCourses(list) {
  courseListEl.innerHTML = list
    .map(course => `<li>${course}</li>`)
    .join("");
}

renderCourses(courses);

addCourseBtn.addEventListener("click", () => {
  const newCourse = newCourseInput.value.trim();
  if (newCourse === "") return;

  const li = document.createElement("li");
  li.textContent = newCourse;
  courseListEl.appendChild(li);

  courses.push(newCourse);
  newCourseInput.value = "";
});


// ==========================================
// Task 05: Live Search Filter
// ==========================================
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = courses.filter(course =>
    course.toLowerCase().includes(query)
  );
  renderCourses(filtered);
});


// ==========================================
// Task 06: Validate a Form
// ==========================================
const signupForm = document.querySelector("#signup-form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const formMessage = document.querySelector("#form-message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  formMessage.classList.remove("success", "error");

  if (name === "") {
    formMessage.textContent = "Please enter your name.";
    formMessage.classList.add("error");
    return;
  }

  if (!email.includes("@")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = `Thanks, ${name}! You're signed up for updates.`;
  formMessage.classList.add("success");
  signupForm.reset();
});
