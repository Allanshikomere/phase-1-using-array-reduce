const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = [5, 7, 8, 11];


function calculateTotalBatteries(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

const totalBatteries = calculateTotalBatteries(batteries);


