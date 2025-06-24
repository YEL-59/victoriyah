function formatDateSmart(dateString, timeString) {
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

  if (diffDays === 0 && !timeString) {
    return "Today";
  } else if (diffDays === -1 && !timeString) {
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

    switch (timeString) {
      case "short":
        const hours = inputDate.getHours();
        const minutes = inputDate.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHour = hours % 12 || 12;
        const formattedMinute = minutes.toString().padStart(2, "0");

        return `${formattedHour}:${formattedMinute} ${ampm}`;
      default:
        return `${dayName} ${day} ${month}`;
    }
  }
}
export default formatDateSmart;
