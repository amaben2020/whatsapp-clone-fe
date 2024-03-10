import moment from "moment";

export const dateHandler = (date) => {
  let now = moment();
  let momentDate = moment(date);

  let time = momentDate.fromNow(true);

  const getDay = () => {
    let days = time.split(" ")[0];

    if (Number(days) < 8) {
      return now.subtract(Number(days), "days").format("dddd");
    } else {
      return momentDate.format("DD/MM/YYYY");
    }
  };

  if (time.search("hour") !== -1) {
    return momentDate.format("HH:mm");
  }

  if (time.search("a day") !== -1) {
    return "Yesterday";
  }

  if (time.search("days") !== -1) {
    return getDay();
  }

  return `sent ${time} ago`;
};
