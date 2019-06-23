'use strict'

let algebra;
let geography;
let physics;

algebra = 4;
geography = 5;
physics = 5;

const calculateAverageMark = () => (
  ((algebra + geography + physics)/3).toFixed(2)
);

calculateAverageMark();

let averageMark = `Средняя оценка составляет ${calculateAverageMark()} баллов`;

console.log(averageMark);
