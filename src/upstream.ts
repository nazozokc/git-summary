import { consola } from "consola";
import { execa } from "execa";

export const upstream = async (): Promise<void> => {
  const upstreams = await execa("git", [
    "rev-list",
    "--left-right",
    "--count",
    "HEAD...@{u}",
  ]);
  // 分割配列
  const [ahead, behind] = upstreams.stdout.split("\t");
  consola.log("upstream");
  consola.log("--------------------------------------");
  consola.info("ahead:", ahead);
  consola.info("behind:", behind);
  consola.log("");
};
