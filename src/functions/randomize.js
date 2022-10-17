function randomize(tab) {
  var i, j, tmp;
  for (i = tab.length; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
  }
  return tab;
}

export default randomize;
