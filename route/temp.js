let re = /ab+c/;

let re = new RegExp('ab+c');


var email= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
email.test("xyz@xyz.co")


var phoneNumber = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
phoneNumber.test("999-999-9999")
