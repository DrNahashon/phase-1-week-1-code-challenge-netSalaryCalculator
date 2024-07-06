// ArenNetSalaryCalculator.js
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
            console.log(`Basic Salary: ${basicSalary.toFixed(2)} KSh`);
            console.log(`Benefits: ${benefits.toFixed(2)} KSh`);
            console.log(`Gross Salary: ${grossSalary.toFixed(2)} KSh`);
            console.log(`PAYE (Tax): ${payee.toFixed(2)} KSh`);
            console.log(`NHIF Deductions: ${nhifDeductions.toFixed(2)} KSh`);
            console.log(`NSSF Deductions: ${nssfDeductions.toFixed(2)} KSh`);
            console.log(`Net Salary: ${netSalary.toFixed(2)} KSh`);

            rl.close();
        });
    });
}

// Function to calculate PAYE (Tax)
function calculatePayee(basicSalary) {
    let payee = 0;

    // Calculate PAYE based on the provided tax brackets
    if (basicSalary <= 24000) {
        payee = 0;
    } else if (basicSalary <= 32333) {
        payee = (basicSalary - 24000) * 0.1;
    } else if (basicSalary <= 40333) {
        payee = (basicSalary - 32333) * 0.15 + 832;
    } else if (basicSalary <= 48333) {
        payee = (basicSalary - 40333) * 0.2 + 2083;
    } else if (basicSalary <= 56333) {
        payee = (basicSalary - 48333) * 0.25 + 4167;
    } else {
        payee = (basicSalary - 56333) * 0.3 + 7083;
    }

    return payee;
}

// Function to calculate NHIF Deductions
function calculateNHIF(basicSalary) {
    // NHIF deductions based on the provided table
    let nhifDeductions = 0;

    if (basicSalary <= 5999) {
        nhifDeductions = 150;
    } else if (basicSalary <= 7999) {
        nhifDeductions = 300;
    } else if (basicSalary <= 11999) {
        nhifDeductions = 400;
    } else if (basicSalary <= 14999) {
        nhifDeductions = 500;
    } else if (basicSalary <= 19999) {
        nhifDeductions = 600;
    } else if (basicSalary <= 24999) {
        nhifDeductions = 750;
    } else if (basicSalary <= 29999) {
        nhifDeductions = 850;
    } else if (basicSalary <= 34999) {
        nhifDeductions = 900;
    } else if (basicSalary <= 39999) {
        nhifDeductions = 1000;
    } else if (basicSalary <= 44999) {
        nhifDeductions = 1100;
    } else if (basicSalary <= 49999) {
        nhifDeductions = 1200;
    } else if (basicSalary <= 59999) {
        nhifDeductions = 1300;
    } else if (basicSalary <= 69999) {
        nhifDeductions = 1400;
    } else if (basicSalary <= 79999) {
        nhifDeductions = 1500;
    } else if (basicSalary <= 89999) {
        nhifDeductions = 1600;
    } else if (basicSalary <= 99999) {
        nhifDeductions = 1700;
    } else {
        nhifDeductions = 1800;
    }

    return nhifDeductions;
}

// Function to calculate NSSF Deductions
function calculateNSSF(basicSalary) {
    // NSSF deductions based on the provided rate
    return basicSalary * 0.06; // Assuming NSSF deduction rate of 6%
}

netSalaryCalculator();