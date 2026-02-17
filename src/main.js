import "./style.css";

let allcourses = [];

document.addEventListener("DOMContentLoaded", async () => {
  getData();

  document.querySelector("#course-code").addEventListener("click", () => {
    const sortedByCode = [...allcourses].sort((a, b) =>
      a.code.localCompare(b.code),
    );
    displayCourses(sortedByCode);
  });

  document.querySelector("#course-name").addEventListener("click", () => {
    const sortedByName = [...allcourses].sort((a, b) =>
      a.coursename.localCompare(b.code),
    );
    displayCourses(sortedByName);
  });

  document.querySelector("#course-progression").addEventListener("click", () => {
    const sortedByProgression = [...allcourses].sort((a, b) =>
      a.progression.localCompare(b.code),
    );
    displayCourses(sortedByProgression);
  });
});

window.onload = () => {
  document.querySelector("#search").addEventListener("input", filterData);
};

async function getData() {
  try {
    const response = await fetch("../src/ramschema.json");
    const data = await response.json();
    allcourses = data;
    displayCourses(data);
  } catch (error) {
    console.error(error);
  }
}

function filterData(getData) {
  const searchPhrase = document.querySelector("#search").value.toLowerCase();
  const filteredCourses = allcourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchPhrase) ||
      course.code.toLowerCase().includes(searchPhrase) ||
      course.progression.toLowerCase().includes(searchPhrase),
  );
  displayCourses(filteredCourses);
}

function displayCourses(courses) {
  const coursesListEl = document.querySelector("#courses-list");

  coursesListEl.innerHTML = "";

  courses.forEach((course) => {
    coursesListEl.innerHTML += `
    <tr>
    <td class="course-card">
      <h2>${course.code}</h2>
    </div>
    <td class="course-card">
      <p><strong> </strong> ${course.coursename}</p>
    </div>
    <td class="course-card">
      <p><strong> </strong> ${course.progression}</p>
    </tr>
    `;
  });
}
