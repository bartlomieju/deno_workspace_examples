import chalk from "chalk";

export function bar() {
    return helloHelper() + "bar";
  }
  
  export function helloHelper() {
    return chalk.yellow("Hello, from ");
  }