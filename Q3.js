function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    let temp = str1 + str1;
  
    if (temp.includes(str2)) {
      return true;
    }
  
    return false;
  }
  const str1 = "abcd";
const str2 = "cdab";
if (areRotations(str1, str2)) {
  console.log("Yes");
} else {
  console.log("No");
}