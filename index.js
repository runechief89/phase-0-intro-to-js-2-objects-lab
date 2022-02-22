// Write your solution in this file!

const employee = {
    key1: "Sam",
    streetAddress: "123 Road Street",
};


employee;

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { ...obj, [key]: value, };
}
const employee2 = updateEmployeeWithKeyAndValue(employee, "Gender", "M");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Hair Color", "Green");


function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = obj;
    delete newEmployee.key;
    return newEmployee;
}
const employee4 = deleteFromEmployeeByKey(employee, key1);

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj.key;
    return obj;
}
const employee5 = destructivelyDeleteFromEmployeeByKey(employee, key1);