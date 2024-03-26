// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Function to update an employee object with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update an employee object with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from an employee object without mutating it
function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };
    delete newObj[key];
    return newObj;
}

// Function to destructively delete a key-value pair from an employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Test the functions
console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe'));
console.log(employee); // Original employee object remains unchanged

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St'));
console.log(employee); // Original employee object is mutated

console.log(deleteFromEmployeeByKey(employee, 'name'));
console.log(employee); // Original employee object remains unchanged

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));
console.log(employee); // Original employee object is mutated
