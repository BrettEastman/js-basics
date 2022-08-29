// Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every period "." with "[.]".

// my solution:
var defangIPaddr = function(address) {
    var newString = '';
    for (var i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            newString += '[.]';
        } else {
            newString += address[i];
        }
    }
    return newString;
};

// best solution:
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
    };