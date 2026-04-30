import { consola } from "consola";
import { execa } from "execa";

export const status = async (): Promise<void> => {
  const status = await execa("git", ["status", "--short"]);
  consola.log("status");
  consola.log("--------------------------------------");
  consola.log(status.stdout);
  consola.log("");
};
