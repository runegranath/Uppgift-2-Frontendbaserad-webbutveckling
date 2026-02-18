import "./style.css";

let allcourses = [];

let courseCodeSortDirection = "asc";

let courseNameSortDirection = "asc";

let courseProgressionSortDirection = "asc";

document.addEventListener("DOMContentLoaded", async () => {
  getData();
  document.querySelector("#search").addEventListener("input", () => {
    console.log(allcourses);
    const writtenSearch = document.querySelector("#search").value.toLowerCase();
    const filteredCourses = allcourses.filter((course) => {
      return (
        course.coursename.toLowerCase().includes(writtenSearch) ||
        course.code.toLowerCase().includes(writtenSearch)
      );
    });
    displayCourses(filteredCourses); 
  });

  document.querySelector("#course-code").addEventListener("click", () => {
    console.log("clicked");
    const sortedByCode = [...allcourses].sort((a, b) =>
      a.code.localeCompare(b.code),
    );
    const sorted =
      courseCodeSortDirection === "asc" ? sortedByCode.reverse() : sortedByCode;
    displayCourses(sorted);
    courseCodeSortDirection =
      courseCodeSortDirection === "asc" ? "desc" : "asc";
  });

  document.querySelector("#course-name").addEventListener("click", () => {
    const sortedByName = [...allcourses].sort((a, b) =>
      a.coursename.localeCompare(b.coursename),
    );
    const sorted =
      courseNameSortDirection === "asc" ? sortedByName.reverse() : sortedByName;
    displayCourses(sorted);
    courseNameSortDirection =
      courseNameSortDirection === "asc" ? "desc" : "asc";
  });

  document
    .querySelector("#course-progression")
    .addEventListener("click", () => {
      const sortedByProgression = [...allcourses].sort((a, b) =>
        a.progression.localeCompare(b.progression),
      );
      const sorted =
      courseProgressionSortDirection === "asc" ? sortedByProgression.reverse() : sortedByProgression;
    displayCourses(sorted);
    courseProgressionSortDirection =
      courseProgressionSortDirection === "asc" ? "desc" : "asc";
    });
});

async function getData() {
  try {
    const response = await fetch("./src/ramschema.json");
    const data = await response.json();
    allcourses = data;
    displayCourses(data);
  } catch (error) {
    console.error(error);
  }
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
