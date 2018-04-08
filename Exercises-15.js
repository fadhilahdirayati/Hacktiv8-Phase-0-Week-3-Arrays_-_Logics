function groupAnimals(hewan) {
var hasil=hewan.sort()
// return hasil
var result=[];
var group=[];
var abjad=hewan[0][0]
// console.log(abjad)
for(var i=0;i<hasil.length;i++){

  // console.log(hasil[i][0])
  // console.log(abjad)
  if(hasil[i][0]===abjad){
    group.push(hasil[i])
    // result.push(group)
    // group=[]
  }
  else{
    result.push(group)
    group=[]
    abjad=hasil[i][0]
    group.push(hasil[i])
    // result.push(hasil[i])
  }

}
result.push(group)
return result
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
