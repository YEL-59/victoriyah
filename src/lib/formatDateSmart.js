function formatDateSmart(dateString) {
  const inputDate = new Date(dateString);
  const now = new Date();

  // Convert both dates to only date part (ignore time)
  const input = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate()
  );
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffTime = input.getTime() - today.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === -1) {
    return "Yesterday";
  } else {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[input.getDay()];
    const day = input.getDate();
    const month = months[input.getMonth()];
    const year = input.getFullYear();

    return `${dayName} ${day} ${month} ${year}`;
  }
}
export default formatDateSmart;