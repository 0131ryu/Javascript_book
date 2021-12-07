//전역객체 : node.js에서 객체 선언을 하지 않고 자유롭게 사용할 수 있는 객체

//process
console.log(process.env); //컴퓨터 환경과 관련된 정보를 가진 객체
console.log("-----------------------------------------");
console.log(process.arch); //프로세서의 아키텍처
console.log("-----------------------------------------");
console.log(process.uptime()); //현재 프로그램이 실행된 시간
console.log("-----------------------------------------");
console.log(process.memoryUsage()); //메모리 사용 정보를 가진 객체
console.log("-----------------------------------------");
console.log(process.version); //node.js 버전
console.log("-----------------------------------------");
console.log(process.versions); //node.js 버전

//console
console.log("Number: %d + %d = %d", 1, 2, 3 + 4);
console.log("String: %s", "Hello World!");
console.log("JSON: %j", { name: "node.js" });
console.log("String1", "String2");
