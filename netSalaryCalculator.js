// netSalaryCalculator.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function netSalaryCalculator() {
    rl.question("Enter basic salary: ", (basicSalaryInput) => {
        let basicSalary = parseFloat(basicSalaryInput);

        rl.question("Enter benefits: ", (benefitsInput) => {
            let benefits = parseFloat(benefitsInput);

            // Calculate deductions and net salary based on provided formulae
            let payee = calculatePayee(basicSalary);
            let nhifDeductions = calculateNHIF(basicSalary);
            let nssfDeductions = calculateNSSF(basicSalary);

            let grossSalary = basicSalary + benefits;
            let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

            // Output the results
            console.log(`Basic Salary: ${basicSalary}`);
            console.log(`Benefits: ${benefits}`);
            console.log(`Gross Salary: ${grossSalary}`);
            console.log(`PAYE (Tax): ${payee}`);
            console.log(`NHIF Deductions: ${nhifDeductions}`);
            console.log(`NSSF Deductions: ${nssfDeductions}`);
            console.log(`Net Salary: ${netSalary}`);

            rl.close();
        });
    });
}

// Function to calculate PAYE (Tax)
function calculatePayee(basicSalary) {
    // Implement your PAYE calculation logic here
    // Example calculation based on a fixed rate for demonstration
    return basicSalary * 0.3; // Assuming a 30% tax rate
}

// Function to calculate NHIF Deductions
function calculateNHIF(basicSalary) {
    // Implement your NHIF calculation logic here
    // Example calculation based on a fixed amount for demonstration
    return 500; // Assuming NHIF deduction of 500 KSh
}

// Function to calculate NSSF Deductions
function calculateNSSF(basicSalary) {
    // Implement your NSSF calculation logic here
    // Example calculation based on a fixed percentage for demonstration
    return basicSalary * 0.05; // Assuming NSSF deduction rate of 5%
}

netSalaryCalculator();