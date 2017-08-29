/**
 * The following questions are to be answered by the provided data structure "Passengers" in the file "js/passengers.js".
 *
 * Please open the file "js/chapters/chapter-xx.js"
 *
 */

describe('Chapter 01 - Get general information about the train', () => {

    it('01) Howmany passengers are in the train?', () => {
        let result = findNumberOfPassengers(Passengers); 
        result.should.be.equal(21);
    });
    
    it('02) What is the first name of third person in the group?', () => {
        let result = findPersonByIndex(Passengers, 3); 
        result.should.be.equal("Sevda");
    });
    
    it('03) What is the last name of person with ticket-id 191?', () => {
        let result = findPersonByTicketId(Passengers, 191); 
        result.should.be.equal("K.");
    });
    
    it('04) How many women are in the passengers?', () => {
        let result = findNumberOfWomen(Passengers); 
        result.should.be.equal(8);
    });
    
    it('05) How many men are in the passengers?', () => {
        let result = findNumberOfMen(Passengers); 
        result.should.be.equal(13);
    });
    
    it('06) How many passengers are not adult?', () => {
        let result = findUnderagePassengers(Passengers); 
        result.should.be.equal(4);
    });
    
    it('07) How many passengers have no children?', () => {
        let result = findPassengersWithNoChildren(Passengers); 
        result.should.be.equal(7);
    });
});