import chalk from "chalk";
import { foo } from "@my-scope/foo";
import { bar } from "@my-scope/bar";

console.log(chalk.red(foo()));
console.log(chalk.green(bar()));