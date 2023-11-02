/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
