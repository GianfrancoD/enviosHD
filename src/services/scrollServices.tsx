export const scrollToAll = (scrollAll: string) => {
  const all = document.getElementById(scrollAll);
  if (all) {
    all.scrollIntoView({ behavior: "smooth" });
  }
};
