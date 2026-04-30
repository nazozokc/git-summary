import { consola } from "consola";
import { execa } from "execa";

export const commitlog = async (): Promise<void> => {
  const commit = await execa("git", ["log", "--oneline", "-5"]);
  const commitlog = commit.stdout.split("\n");
  consola.log(commitlog);
};
