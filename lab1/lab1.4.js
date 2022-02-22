var createCustomerID = function (name, id) {
    return name + " " + id;
};
var myID = createCustomerID("Ann", 10);
console.log(myID);
var idGenerator;
idGenerator = createCustomerID;
console.log(idGenerator("Nikita", 19));
