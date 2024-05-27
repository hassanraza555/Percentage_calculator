const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
  const maxMarks = 500;
  event.preventDefault();

  const formData = new FormData(calculateFormEl);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = +value;
  });
  const totalMarks = data.maths + data.physics + data.chemistry + data.hindi + data.english;
  const percentage = Math.round((totalMarks / maxMarks) * 100);
  if (percentage > 60) {
    res='you are first division';
} else if (percentage > 50) {
    res='you are second division';
} else if (percentage >= 33) {
    res='you are third division';
} else {
    res='you are fail';
}

  resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} your percentage is ${percentage}% and ${res}`;
};