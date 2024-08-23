let marks = parseFloat(prompt("Enter your marks (out of 100): "));

if (marks >= 0 && marks <= 100) {
    if (marks >= 90 && marks <= 100) {
        alert("Your grade is A");
    } else if (marks >= 80 && marks <= 89) {
        alert("Your grade is B");
    } else if (marks >= 70 && marks <= 79) {
        alert("Your grade is C");
    } else if (marks >= 60 && marks <= 69) {
        alert("Your grade is D");
    } else {
        alert("Your grade is F");
    }
} else {
    alert("Invalid input. Marks should be between 0 and 100");
}