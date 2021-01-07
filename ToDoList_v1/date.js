//module to find date
//module.exports="hellow world";
//
//module.exports.getDate = getDate;
// function getDate() {
//   let today = new Date();
//   let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//   }
//   let day = today.toLocaleDateString("en-US", options);
//   return day;
// }
//sortning down the module

exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  return today.toLocaleDateString("en-US", options);
}
