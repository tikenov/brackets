module.exports = function check(str, bracketsConfig) {
  s = [];
  let m = new Map();
  for (let b of bracketsConfig) m.set(b[0], b[1]);
  for (let b of str) {
    if (s[s.length - 1] == b) s.pop();
    else if (m.has(b)) s.push(m.get(b));
    else return false;
  }
  return !(s.length > 0);
};
