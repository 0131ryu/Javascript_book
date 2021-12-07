const date = new Date();
const dateToTimeStamp = date.getTime();
const timestampToDate = new Date(1570274211107);
const timestampToInit = new Date(1);
const currentTime = new Date(1638882842013);

console.log(dateToTimeStamp); //1638882842013
console.log(timestampToDate); //2019-10-05T11:16:51.107Z
console.log(timestampToInit); //기준점 1970-01-01T00:00:00.001Z
console.log(currentTime); //2021-12-07T13:14:02.013Z
