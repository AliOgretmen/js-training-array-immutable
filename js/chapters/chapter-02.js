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

function findNumberOfPassengersByMinChildren(pPassengers, pNoOfChildren){
    return pPassengers.filter(person => person.children.length >= pNoOfChildren).length;
}
function findNumberPassengersByMinChildrenAndGender(pPassengers, pNoOfChildren, pGender){
    return pPassengers.filter(person => person.gender === pGender && person.children.length >= 2).length;
}
function findNumberOfPassengersByCountry(pPassengers, pCountry){
    return pPassengers.filter(person => person.addres.country == pCountry).length;
}
function findNumberOfPassengersByChildrenAndCountry(pPassengers, pNoOfChildren, pCountry){
    return pPassengers.filter(person => person.addres.country === "Swiss" ).filter(person => person.children.length == 0).length;
}
function findNumberOfPassengersByLanguageAndGender(pPassengers, pLanguage, pGender){

    return pPassengers.filter(person => person.gender === pGender).filter(person => person.languages.find(x => x=== pLanguage)).length;
}
function findNumberOfPassengersByLanguageAndGenderAndCountry(pPassengers, pLanguage, pGender, pCountry){
    return pPassengers.filter(person => person.addres.country == pCountry).filter(person => person.gender === pGender).filter(person => person.languages.find(x => x=== pLanguage)).length;
}
function findNumberOfPassengersByLanguageAndSalaryAndNumberOfChildren(pPassengers, pLanguage, pSalary, pNoOfChildren){
    return pPassengers.filter(person => person.languages.find(x => x=== pLanguage)).filter(person => person.children.length == 0).filter(person => person.salary >= 61000).length;
}
function isThereAnyPersonBySalaryAndCountry(pPassengers, pSalary, pCountry){
    return pPassengers.filter(person => person.addres.country == pCountry).filter(person => person.salary < 50000).length > 0;
}
function findNumberOfPassengersByEntryDate(pPassengers, pEntryDate){
    return pPassengers.filter(person => person.entryDateInSwiss >= pEntryDate).length;
}
function findNamesOfPassengersByOrigin(pPassengers, pOrigin){
    var adanalilar = pPassengers.filter(person => person.origin === pOrigin);
    var result = adanalilar.map(function (a) {
        return a.firstname;
    });
    return result;
}
function findNamesOfPassengersByHoroscope(pPassengers, pHoroscopeSign){
    return pPassengers;    
}
function findNamesOfPassengersByAcceptedAndNotAcceptedLanguages(pPassengers, pAccesptedLanguages, pNotAcceptedLanguages){
    return pPassengers.filter(person => person.languages.find(pAccesptedLanguages));
}