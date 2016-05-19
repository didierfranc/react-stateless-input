export default function inputs() {
  let o, i, l = document.querySelectorAll('input:not([type=submit])')
  for (i of l) { o = { ...o, [i.name]: i.value } }
  return o
}
