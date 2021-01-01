beforeAll(() => {
    // return initializeCityDatabase();
    console.log('beforeAll')
  });
  
afterAll(() => {
    // return clearCityDatabase();
    console.log('afterAll')
});

beforeEach(() => {
    // initializeCityDatabase();
    console.log('beforeEach')
});
  
afterEach(() => {
    // clearCityDatabase();
    console.log('afterEach')
});

test('city database has Vienna', () => {
    expect('Vienna').toBeTruthy();

});


describe('matching cities to foods', () => {
    beforeEach(() => {
        // initializeCityDatabase();
        console.log('beforeEach in block')
    });
      
    afterEach(() => {
        // clearCityDatabase();
        console.log('afterEach in block')
    });

    test('city database has San Juan', () => {
        expect('San Juan').toBeTruthy();
    });
})