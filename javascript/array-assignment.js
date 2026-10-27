// task 1
let goceries = ["rice", "beans", "yam"];
goceries.push("tomatoes");
goceries.unshift("bread");
let removedLast = goceries.pop();
let removedFirst = goceries.shift();
console.log(goceries);
console.log(removedLast);
console.log(removedFirst);

// task2
let nums = [10,20, 30];
nums.push(40,50);
let pushResult = nums.push(40, 50);
let unshiftResult = nums.unshift(0);
console.log(unshiftResult);

// task 3

let queue = ["Ada", "Musa", "Ngozi"];
queue.push("Tunde");
queue.unshift("chief");
queue.shift();
queue.pop();
console.log(queue);

// task 4
let cities = ["Lagos", "Abuja", "Kano", "Enugu"];
cities.forEach(function (cities) {
    console.log(cities)
    
});

// task 5
let prices = [1500, 2300, 800, 4200];
let total = 0; 
prices.forEach(function(prices) {total  += prices;});
console.log(total);

// task 6
let student = [
    { name: "Amaka", score:88}, { name: "Bayo", score: 54}, {name: "Chidi", score:71},];
    student.forEach(function(student) {
        console.log(student.name + student.score);
        
    });







