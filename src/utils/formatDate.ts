export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(
    new Date(date)
  );
};
