/*
Questions:
1. how to check if not a number different methods not working
2.
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

  afterEach(function() {
    serverNameInput.value = "";
    allServers = {};
  });
});

describe("Testing the submitServerInfo function", function () {
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