// Prompt 1
function replace(str) {
  if( str.length === 0 )
  {
    return "";
  }
  else if( str.at(str.length-1) === " " ){
    return replace(str.substring(0, str.length-1)) + "%20";
  }
  else {
    return replace(str.substring(0, str.length-1)) + str.charAt(str.length -1);
  }
}


function replaceNoR(str) {
  let strArr = str.trim().split("");
  strArr.forEach( (char,  index)  => {
    if(char === " ") {
      strArr[index] = "%20";
    }    
  });
  return strArr.join("");
}

console.log(replaceNoR(" He l l o "));
console.log(replace(" He l l o ")); 

//Prompt 2


const arr = [1, 2, 3, 1, 2, "hi", "hello", "hi"];
let uniqueArray = [];

function deDupe(arr) {
  if( arr.length === 0 )
  {
    return "";
  }
  else if(!uniqueArray.includes(arr[0])) {
    uniqueArray.push(arr[0]);
    return (deDupe(arr.slice(1)));
  }
  return (deDupe(arr.slice(1)));  
}



const uniqueFunc = (arr) => {
  let uniqueArray = [];
  const deDupe = (arr2) =>{
    if( arr2.length === 0 )
    {
      return "";
    }
    else if(!uniqueArray.includes(arr2[0])) {
      uniqueArray.push(arr2[0]);
      return (deDupe(arr2.slice(1)));
    }
    return (deDupe(arr2.slice(1)));  
  };
  deDupe(arr);
  return uniqueArray;
};





function deDupe2(arrayWithDupes) {

  const uniqueArray = [];

  for (let i = 0; i < arrayWithDupes.length; i++) {
    if (!uniqueArray.includes(arrayWithDupes[i])) {
      uniqueArray.push(arrayWithDupes[i]);
    }
  }

  return uniqueArray;

}

console.log(deDupe2(arr));
deDupe(arr);
console.log(uniqueFunc(arr));


//Prompt 3

//let arr3 = "";
//let ctr = 1;
// let curr = "";
const adj =  "aaabccdddda";


const arr5 = (str) => {
    let input = str.trim();
    let arr3 = "";
    let ctr = 1;
    let curr = "";
    
    const countDuplicate = (str2) => {
        if( str2.length === 0 )
        {
          return "";
        }
        curr = str2.charAt(0);
        if( curr === str2.charAt(1) )
        {
          ctr++;
          return countDuplicate(str2.substring(1));
        }
        else {
          arr3 += (ctr + "" + curr);    
          ctr = 1;
          return countDuplicate(str2.substring(1)) , arr3;
        }
    }
    return countDuplicate(input);
}

console.log(arr5(adj));

// function removeConsecutive(str) {

//   if( str.length === 0 )
//   {
//     return "";
//   }
//   curr = str.charAt(0);
//   if( curr === str.charAt(1) )
//   {
//     ctr++;
//     return removeConsecutive(str.substring(1));
//   }
//   else {
//     console.log(ctr + "" + curr);    
//     ctr = 1;
//     return removeConsecutive(str.substring(1)), (ctr + "" + curr);
//   }  
// }

// console.log(removeConsecutive(adj));
//console.log(arr3);

//prompt4

let uniqueWord = "hello";
let uniqueWord2 = "notaw";

const checkUnique = (str) => {
  if(!isNaN(str))
  {
    return "Not a String";
  }
  
  let uniqueChars = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== " ")
    {
      if(uniqueChars.includes(str[i]) === false ) {

        uniqueChars += str[i];
      }
      else return false;
    }    
  }
  return true;
};



----------------------------------------------------------------
const checkUnique2 = (str) => {
  if(!isNaN(str))
  {
    return "Not a String";
  }
  let uniqueChars = "";
  let isUnique = true;
  const recurr = (i) => {
    if(str[i] !== " ")
    {
      if(uniqueChars.includes(str[i]) === false ) {

        uniqueChars += str[i];
        return recurr(i+1);        
      }
      else {
        isUnique = false;
        return false;
      }
    }
    return true;
  }
  recurr(0);
  return isUnique;
}


console.log(checkUnique(uniqueWord));
console.log(checkUnique(uniqueWord2));
console.log(checkUnique2(uniqueWord));
console.log(checkUnique2(uniqueWord2));