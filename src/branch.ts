import { consola } from "consola";
import { execa } from "execa";

export const branch = async (): Promise<void> => {
  const branch = await execa("git", ["branch", "--show-current"]);
  consola.log("branch");
  consola.log("--------------------------------------");
  consola.info(branch.stdout);
  consola.log("");
};
