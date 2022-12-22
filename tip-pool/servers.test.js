/*
Questions:
make sure variable is alwaysw number --> see browser

1. concept of testing --> are we writing test to test failure on html side? (still does 1234 for person's name)
2. how to check if not a number different methods not working  --> stop test they dont test logic
3. walk through line 26 code for not being able to submit blank entry

how to do proper test:
arrange- what info/act do i need to get result i wnt
act- what am i testing call and invoke that function
assert- now i have what i need compare expected to result

WRITE TESTS BEFORE CODING
plan out code logic before coding

solve a problem that i have for capstone project
*/

describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
});

// test for blank entry line 12 if else is a good testing point
describe("Testing the submitServerInfo function", function () {
  it("should not allow for blank entry", function () {
    //still allows for blank entry
    serverNameInput.value = ""; // arrange part
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
    
  });

  it("should not allow a number entry", function () {
    //expect(serverNameInput).toBeNaN();
    //expect(submitServerInfo).not.toEqual('number');
    //expect(serverName).not.toEqual('number');
    //expect(serverName).not.toEqual(jasmine.any(Number));
    expect(typeof serverName).not.toEqual(Number);
    
  });
  
});

describe("Testing the updateServerTable function", function () {
  it("should only allow for number entry", function () {
    
  });
});

afterEach(function() {
  serverNameInput.value = "";
  allServers = {};
});