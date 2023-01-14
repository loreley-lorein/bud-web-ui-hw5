function showDate() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = h + ":" + m + ":" + s;

  const today = new Date();

  const options = {
    month: "long",
    day: "numeric",
  };

  const now = today.toLocaleString("en-US", options);

  const day = time + " " + now;
  document.getElementById("MyClockDisplay").innerText = day;
  document.getElementById("MyClockDisplay").textContent = day;

  setTimeout(showDate, 1000);
}
showDate();
