'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {// WE ARE GIVING EACH THE ARGUMENTS OF A FUNCTION AND A COLLECTION
    if(Array.isArray(collection)) {// TESTING IF OUR COLLECTION IS AN ARRAY
        for(var i = 0; i < collection.length; i++) {// LOOPING THROUGH OUR ARRAY
            action(collection[i], i, collection);// GIVING OUR ANONYMOUS FUNCT VALUES OF OUR ARRAY.
        }
    } else {// IF THE ABOVE CODE DOES NOT RUN
        for (var key in collection) {// LOOPING THROUGH OUR OBJECT
            action(collection[key], key, collection);// GIVING OUR FUNCT ARGUMENT THE VALUES OF OUR OBJECT
        }
    }
}
module.exports.each = each;
function identity (value){ // declaring our function with the name identity with parameter of value
    return value; // return that value
} 
module.exports.identity = identity;

function typeOf(value) {       // declaring a functio wth the name of _typeOf
    if(value === 'string') {        // testing if value is equal to a string
        return 'string';        // return the string of string
    } else if (Array.isArray(value)){       // testing if the value is an Array
        return 'array';      // return the string of array
    } else if (value === null) {        // testing if value is equal to null
        return 'null';       //returning the string of null
    } else if (typeof value === 'object'){      // testing if the value is an object
        return 'object';        // return object as a tring
    } else if (typeof 9 === value){     // testing if value is a number
        return 'number';                // return number as a string.
    }  else if (value instanceof Date){         // testing if value is eqal to a date.
        return 'date';       // return the string of date if true
    } 
        return typeof value;            // return the typeof value if everyhting else is false which will be undefined.
    
        
    
};
module.exports.typeOf = typeOf;

function first(array, number) {         // delcaring a function named _first which takes two parameters of array and number
    if(Array.isArray(array) === false){      // testing if the array isnt equal to an actual array
        return [];          // return an array literal
    } else if (number === undefined && isNaN(number)){      // testing if number is strictly eequal to undefined and is non a number.
        return array[0];        // return the the value of the index 0 in the array.
    } else if (number > array.length){      // testing if number is greater than the length of array.
        return array;               // return that array if true.
    } else if (number < 0){             // testing if number is a negative number that is less than 0.
        return [];           // returning an array literal.
    }
    else {
        return array.slice(0, number);      // if all other test fails i want to put to the console every value after the first index of the array.
    }
}
module.exports.first = first;

function last(array, number) {     // declaring and intialzing the variable _.last to equal a function.
        if(Array.isArray(array) === false) {        // testing if array is actually an array
            return [];          // if pass return an array literal.
        } else if (number === undefined && isNaN(number)){      // testing whether number is strictly equal to undefined or NaN.
            return array[array.length -1];      // return the last element of the array by accessing it directly.
        } else if (number < 0) {        // testing if number is a negative number
            return [];      // return an array literal.
        } else if(number > array.length){       // testing if number is greater than the array length.
            return array; // return the whole array if it s true.
        }else { 
            return array.slice(-number);        // if all else fails return every number that isnt a negative.
        }
};
module.exports.last = last;

function indexOf (array, value){
    for(var i = 0; i < array.length; i++){       // for loop going through array
        if(value === array[i]){          // testing if value is equal to array at the index of i;
            return i;                          // returning that value if true.
        }                       
    }
    return -1
}
module.exports.indexOf = indexOf;

function contains (array, value){
    for(var i =0; i < array.length; i++){ // looping through our array
        if(array[i] === value){ // testing if array at i is strictly equal to value.
            return true // return true if they are the same
        }
    }return false;// return fasle if they are not the same or the value doesnt exist.
 }
 module.exports.contains = contains;
 
 function each(collection, funct){// GIVING EACH THE ARGUMENTS OF COLELCTION AND FUNCT
    if(Array.isArray(collection)){// TESTING IF COLLECTION IS AN ARRAY
        for(var i = 0; i < collection.length; i++){// LOOPING THROUGH OUR ARRAY
            funct(collection[i], i, collection);// GIVING FUNCT ITS ARGUMENTS
        }
    }
     if(!Array.isArray(collection)){// TESTING IF COLLECTION IS AN OBJECT
        for(var key in collection){// LOOPING THROUGH OUR OBJECT
            funct(collection[key], key, collection);// GIVING OUT ARGUMENT FUNCT PURPOSE
        }
    }
};
module.exports.each = each;

function unique (array){// GIVING OUR UNIQUE FUNCTION THE ARGUMENT OF AN ARRAY
  let unique_array = [];// CREATING A NEW ARRAY
    for(let i = 0;i < array.length; i++){// LOOPING THOURHG OUR ARRAY
        if(unique_array.indexOf(array[i]) == -1){// TESTING IF THE INDEX OF OUR ARRAY IS SAME AS I -1
            unique_array.push(array[i]);// PUSHING OUR ARRAY[I] INTO OUR UNIQUE ARRAY
        }
    }
    return unique_array;// REUTRNING OUR NEW ARRAY
};
module.exports.unique = unique;

function filter(array, funct){// GIVING OUR FILTER TWO ARGUMENTS OF A FUNCTION AND AN ARRAY
    let filterArr = [];// CREATING OUR NEW ARRAY
    for(var i = 0; i < array.length; i++){// LOOPING THROUGH OUR ARRAY
       if(funct(array[i], i, array)){// TESTING IF OUR FUNCT IS VIABLE
        filterArr.push(array[i]);// PUSHING OUR ITERATOR INTO OUR FILTERARRAY
       }
    }
    return filterArr;// RETURNING OUR NEW ARRAY
};
module.exports.filter = filter;

function reject (array, funct){// GIVING REJECT ITS ARUGMENTS OF AN ARRAY AND A FUNCTION
   return  filter(array, function(element, index, arr){ // returning our filter function with the parameters of array and an anonymous function.
        if(funct(element, index, arr) !== true){ // testing if the INVOCATION of funct is false
            return element;// RETURNING THE ELEMENT OF THAT INDEX
        }
    });
};
module.exports.reject = reject;

function partition (array, funct){  // DECLARING PARTITION ASSIGNING IT TO A FUNCTion

    //  2 SUBARRAYS
   let newArray1 =  reject(array, funct)// GIVING REJECT ARGUMENTS OF ARRAY AND FUNCT
        
    ;
   let newArray2 = filter(array, funct)// USING FILTER TO TEST MY FALSY VALUES
     
    ; return [newArray2, newArray1]; // returning the arrays joined in a big array.
        
    
        
};
module.exports.partition = partition;

function map (collection, funct){// GIVING OUR MAP FUNCTION THE ARGUMENTS OF A COLLECTION AND A FUNCTINO
   let bigArray = [];// CREATING OUR NEW ARRAY
    if(Array.isArray(collection)){// TESTING IF OUR COLLECTION IS AN ARRAY
        for(let i = 0; i < collection.length; i++){// LOOPING THROUGH OUR ARRAY
            let value = funct(collection[i], i, collection);// ASSIGNING OUR FUNCT ARGUMENT TO A VALUE
            bigArray.push(value);// PUSH THAT VALUE INTO OUR NEW ARRAY
            
        }
        return bigArray;// RETURN OUR NEW ARRAY
    } 
    if(typeof(collection) === 'object'){// TESTING IF OUR COLLECTION IS AN OBJECT
        for(var key in collection){// LOOPING THROUGH OUR OBJECT
            let value2 = funct(collection[key], key, collection);// ASSIGNING OUR FUNCT TO A VALUE
            bigArray.push(value2);// PUSHING OUR VALUE INTO OUR NEW ARRAY
        }
        return bigArray;// RETURNING OUR NEW ARRAY
    }
};
module.exports.map = map;

function pluck(array, property){// DECLARING PLUCK AS A FUNCTION
    let newArray3 = map(array, function(element, i, array){// WE ARE ASSIGNING A NEW VARIABLE TO MAP
        return element[property];// RETURNING THE PROPERTY THAT IS INSIDE ELEMENT
    });
    return newArray3;// USING _.MAP TO RETURN AN ARRAY CONTAINING THE PROPERTY AND ARRAY

};
module.exports.pluck = pluck;

function every (collection, funct){ // DECLARING _.EVERY AS A FUNCTION
  let myBool = true;// ASSIGNING MYBOOL TO EQUAL TRUE
  if(typeof funct === 'function'){// SAYING IF THE FUNCTION IS A FUNCTION WHICH IT IS
      each(collection, function(element, i, array){// THEN RUN _.EACH GIVING ARGUMENTSOF COLLECTION AND AN ANONYMOUS FUNCTION
          if(!funct(element, i , array)){// TESTING IF FUNCTION ISNT A FUNCTION
              myBool = false;// RE ASSIGN MYBOOL TO FALSE
          }
      });
  } else {// 
      each(collection, function(element, i, array){// RUN _.EACH AND GIVE IT COLLECTION AND ANONYMOUS FUNCTION
          if(element === false){// testing if element is false
              myBool = false;// then re assign my bool to equal false;
          }
      });
  }
  return myBool;
};
module.exports.every = every;

function some(collection, funct){// GIVING OUR SOME FUNCTION ARGUMENTS OF A COLLECTION AND A FUNCTION
    let myBool1 = false;// ASSIGNING A VARIABLE TO REPRESENT A BOOLEAN
  if(typeof funct === 'function'){// TESTING IF OUR FUNCTION IS ACTUALLY A FUNCTION
      each(collection, function(element, i, array){// CALLING EACH AND GIVING IR ARGUMENTS FOR OUR ARRAY
          if(funct(element, i , array)){// TESTING IS OUR FUNCT IS TRUE
              myBool1 = true;// RE ASSIGN OUR BOOLEAN TO TRUE IF SO
          }
      });
  } else {// IF THE ABOVE CODE DOES NOT RUN
      each(collection, function(element, i, array){// CALLING EACH WITH THE ARGUMENTS OF OUR ARRAY
          if(element === true){// TESTING IF ELEMENT IS TRUE
              myBool1 = true;// RE ASSIGN OUR BOOLEAN TO TRUE IF SO
          }
      });
  }
  return myBool1;// RETURN OUR BOOLEAN
}
module.exports.some = some;

function reduce(array, funct, seed){// ASSIGNING OUR REDUCE FUNCTION WITH THE ARGUMENTS OF ARRAY,FUNCT,SEED
  let mySeed;// CREATING A NEW VARIABLE REPRESENTING OUR SEED
  if(seed !== undefined){// TESTING IF SEED IS A VALUE
      mySeed = seed;// IF TRUE THEN ASSIGN SEED TO MYSEED
      each(array, function(element, index, array){// CALLING EACH TO LOOP THROUGH OUR ARRAY
          mySeed = funct(mySeed, element, index);// ASSIGNING MYSEED TO EQUAL OUR FUNCT ARGUMENT
      });
  } else if (seed === undefined){// IF THE ABOVE CODE DOES NOT RUN
      mySeed = array[0];// WE NEED MYSEED TO BE THE FIRST ELEMENT IN ARRAY
      each(array.slice(1), function(element, index, array){// CALLING EACH TO LOOP AND TEST OUR ARRAY FOR ITS ARGUMENTS
          mySeed = funct(mySeed, element, index + 1);// WE NEED MYSEED TO START AT THE 2ND ELEMENT IN OUR ARRAY.
      })
  }
  return mySeed;
};
module.exports.reduce = reduce;

function extend (object, ...objectArr){ // assigning extend to a function that takes as many objects as required.
    each(objectArr, function(element, i, array){// CALLING  each and giving it all our objects with a function
        each(element, function(element, key, obj){// running our _.each over our objects.
            object[key] = element;// making sure that the index value and key value are the same.
        });
    });
    return object;// return our whole object.
};
module.exports.extend = extend;