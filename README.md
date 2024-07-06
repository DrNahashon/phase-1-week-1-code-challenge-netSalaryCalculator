# phase-1-week-1-code-challenge-netSalaryCalculator
Week 1 Code Challenge 3: Net Salary Calculator (Toy Problem)

Import the readline module from Node.js standard library.

Use readline.createInterface to create an instance (rl) for reading from process.stdin (user input) and writing to process.stdout (console).

Use rl.question to prompt the user to enter the basic salary and handle the response asynchronously in the first callback function. Parse the input (basicSalaryInput) to a float (basicSalary).

Use rl.question again inside the callback for basic salary to prompt the user to enter the benefits. Handle the response asynchronously in the second callback function. Parse the input (benefitsInput) to a float (benefits).

Use separate functions (calculatePayee, calculateNHIF, calculateNSSF) to calculate PAYE (Tax), NHIF Deductions, and NSSF Deductions based on the provided formulae or logic derived from the provided guidelines.
    (a.) PAYE Calculation: Based on the tax brackets provided on the website (https://www.aren.co.ke/payroll/taxrates.htm).
    (b.) NHIF Calculation: Based on the NHIF deductions table provided on the website (https://www.aren.co.ke/payroll/taxrates.htm).
    (c.) NSSF Calculation: Based on a fixed rate (6% in this case) of the basic salary.

Calculate the gross salary by summing up the basic salary and benefits. Then calculate the net salary by subtracting PAYE, NHIF Deductions, and NSSF Deductions from the gross salary.

Print the input values (basic salary, benefits), computed values (gross salary, deductions), and final net salary to the console.

Use rl.close() to close the interface once the input is processed.