/**
/**
 * NOTES:
 * Do not forget to insert RETURN statement, if needed!
 * Please use the following functions primarily and if needed all the other array functions
 *
 * - Array.prototpye.forEach(fn)
 * - Array.prototpye.find(fn)
 * - Array.prototpye.filter(fn)
 * - Array.prototpye.map(fn)
 * - Array.prototpye.reduce(fn)
 * - Array.prototpye.every(fn)
 * - Array.prototpye.some(fn)
 * - ...
 *
 *  Remember:
 *  () => {}  // this is an arrow function, basically a short form of function decleration.
 *  let       // this is another reserved for declaring variables like "var" which beawares of scopes!
 *  const     // this is an alternative way of declaring variables which does not allowed reference changes
 *
 * Note that:
 * - In the function paramter list the parameters are prefixed with "p" like "pPassengers"
 * - The decleration order of functions is not important!
 */



function findNumberOfPassengers(pPassengers){
    return pPassengers.length;
    // Ali O : 
    //There is used array`s length properties to find how many passengers are in the train.
}

function findPersonByIndex(pPassengers, pIndex){
    pPassengers = Passengers[2].firstname;
    return pPassengers;
    // Ali O : 
    //There is used array`s index to find what is the first name of third person in the group.
}

function findNumberOfWomen(pPassengers){
    var theWomen = pPassengers.filter(function(pPerson){
                         return pPerson.gender == "F";
                     });
    
    return theWomen.length;
}

function findNumberOfMen(pPassengers){
    const theMan = pPassengers.filter(function(pPerson){
                         return pPerson.gender == "M";
                     });
    
    return theMan.length;
}

function findPersonByTicketId(pPassengers, pId){
    const person = pPassengers.find(function(pPerson){
         return pPerson.id == pId;
    });
     
    return person.lastname;
}

function findPassengersWithNoChildren(pPassengers){
     const noChild = pPassengers.filter(function(pPerson){
         return pPerson.children[0] == undefined;
    });
     
    return noChild.length;
    
}

function findUnderagePassengers(pPassengers){
   const Underage = pPassengers.filter(function(pPerson){
         return pPerson.birth.getFullYear() > 1999;
    });
     
    return Underage.length;
}