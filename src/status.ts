import { consola } from "consola";
import { execa } from "execa";

export const status = async (): Promise<void> => {
  const status = await execa("git", ["status", "--short"]);
  consola.log(status.stdout);
};
