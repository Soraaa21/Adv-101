class Student {
  constructor(id, name, age, course) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
  }

  introduce() {
    return `Hi, my name is ${this.name}, I am ${this.age} years old, and I am enrolled in ${this.course}.`;
  }
}

class Instructor {
  constructor(id, name, subject) {
    this.id = id;
    this.name = name;
    this.subject = subject;
  }

  teach() {
    return `I am ${this.name} and I teach ${this.subject}.`;
  }
}


async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  renderData(data);
}

function renderData(data) {
  const outputDiv = document.getElementById("output");

  
  let studentHTML = "<h2>Students</h2><ul>";
  data.students.forEach(st => {
    const student = new Student(st.id, st.name, st.age, st.course);
    const highlight = st.age > 21 ? "highlight" : "";
    studentHTML += `<li class="${highlight}">${student.name} (${student.age}) - ${student.course}</li>`;
  });
  studentHTML += "</ul>";

  
  let courseHTML = "<h2>Courses</h2><ul>";
  data.courses.forEach(crs => {
    courseHTML += `<li>${crs.title}: ${crs.description}</li>`;
  });
  courseHTML += "</ul>";

  
  let instructorHTML = "<h2>Instructors</h2><ul>";
  data.instructors.forEach(ins => {
    const instructor = new Instructor(ins.id, ins.name, ins.subject);
    instructorHTML += `<li>${instructor.name} - ${instructor.subject}</li>`;
  });
  instructorHTML += "</ul>";

  
  let relationHTML = "<h2>Student → Course → Description</h2><ul>";
  data.students.forEach(st => {
    const course = data.courses.find(c => c.title === st.course);
    relationHTML += `<li>${st.name} → ${st.course} → ${course.description}</li>`;
  });
  relationHTML += "</ul>";

  let courseInstructorHTML = "<h2>Course → Instructor</h2><ul>";
  data.courses.forEach(crs => {
    const instructor = data.instructors.find(ins =>
      ins.subject.toLowerCase().includes(crs.title.toLowerCase())
    );
    if (instructor) {
      courseInstructorHTML += `<li>${crs.title} → Taught by ${instructor.name}</li>`;
    }
  });
  courseInstructorHTML += "</ul>";


  outputDiv.innerHTML =
    studentHTML + courseHTML + instructorHTML + relationHTML + courseInstructorHTML;
}


fetchData();
