const input = document.querySelector("#birthday");
const res = document.querySelector("#age");

const curDate = new Date();

document.addEventListener("input", (e) => {
  e.preventDefault();
  const birthDate = new Date(input.value);
  const elapsed = curDate - birthDate;
  const age = new Date(elapsed);
  res.value = `You are ${
    age.getUTCFullYear() - 1970
  } years, ${age.getUTCMonth()} months and ${age.getUTCDate() - 1} days old!`;
});
