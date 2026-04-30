import { consola } from "consola";
import { execa } from "execa";

export const stash = async (): Promise<void> => {
  const stashcmd = await execa("git", ["stash", "list"]);
  const stashcount = stashcmd.stdout.split("\n").filter((i) => i !== "").length;
  consola.info(stashcount);
};
