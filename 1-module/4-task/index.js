function checkSpam(str) {
  if (str) {
    let newStr = str.toLowerCase();
    return newStr.includes("1xbet") || newStr.includes("xxx");
  } else {
    return false;
  }
}
