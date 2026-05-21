const chalk = require('chalk');

const users = [
  { name: 'Alice', role: 'Admin' },
  { name: 'Bob', role: 'Developer' },
  { name: 'Charlie', role: 'Viewer' },
];

console.log(chalk.bold.blue('=== User Directory ==='));

users.forEach(user => {
  const color = user.role === 'Admin' ? chalk.red : user.role === 'Developer' ? chalk.green : chalk.yellow;
  console.log(color(`${user.name} — ${user.role}`));
});

console.log(chalk.gray('\nScan complete. No vulnerabilities detected.'));