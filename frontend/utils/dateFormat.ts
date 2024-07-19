import { format } from "date-fns";

export const dateFormat = (timestamp: string) => {
  const date = new Date(parseInt(timestamp, 10));
  const formattedDate = format(date, "EEE MMM dd yyyy");

  return formattedDate;
};
