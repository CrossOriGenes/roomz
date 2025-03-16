const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];


// machine time generator
export function getTime() {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  const ampm = +hr < 12 ? "AM" : "PM";
  hr = hr > 12 ? hr - 12 : hr;
  hr = hr < 10 ? "0" + hr : hr.toString();
  min = min < 10 ? "0" + min : min.toString();
  return [hr, min, ampm];
}

// machine date generator
export function getDate() {
  const date = new Date();
  let day = weekdays[date.getDay()];
  let dd = date.getDate();
  let mm = months[date.getMonth()];
  let yyyy = date.getFullYear();
  return [day, dd, mm, yyyy];
}

