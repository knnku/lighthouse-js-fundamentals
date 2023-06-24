const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness';

function judgeVegetable(vegetables, metric) {
  if (metric === "redness") {
    vegetables.sort((a, b) => b[metric] - a[metric]);
  } else if (metric === "plumpness") {
    vegetables.sort((a, b) => b[metric] - a[metric]);
  } else { 
    vegetables.sort((a, b) => b[metric] - a[metric]);
  }
  
  return vegetables[0].submitter;
}


console.log(judgeVegetable(vegetables, metric));