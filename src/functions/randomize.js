function randomize(tab) {
  return tab.sort(() => Math.random() - 0.5);
}
export default randomize;
