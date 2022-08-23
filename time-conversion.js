function main(s) {
  const ampm = s.slice(-2);
  const time = s.slice(0, s.length - 2);
  let [hour, minute, second] = time.split(":");

  if (hour === "12" && ampm === "AM") {
    hour = "00";
  } else if (parseInt(hour) < 12 && ampm === "PM") {
    let convertTime = parseInt(hour) + 12;
    hour = convertTime.toString();
  }

  return `${hour}:${minute}:${second}`;
}
