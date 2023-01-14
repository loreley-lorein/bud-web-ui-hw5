function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = h + ":" + m + ":" + s;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

function showDate() {
  const today = new Date();

  const options = {
    month: "long",
    day: "numeric",
  };

  const now = today.toLocaleString("en-US", options);

  document.getElementById("MyClockDisplay").innerText = now;
  document.getElementById("MyClockDisplay").textContent = now;

  setTimeout(showTime, 1000);
}
showDate();
