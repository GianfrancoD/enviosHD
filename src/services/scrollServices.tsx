export const scrollToAll = (scrollToAll: string) => {
  const all = document.getElementById(scrollToAll);
  if (all) all.scrollIntoView({ behavior: "smooth" });
};
