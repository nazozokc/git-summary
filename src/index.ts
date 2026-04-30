import { consola } from "consola";
import { cli } from "gunshi";
import { execa } from "execa";

await cli(process.argv.slice(2), {
  name: "git-summary",
  run: async (ctx) => {
    const branch = await execa("git", ["branch", "--show-current"]);
    consola.info(branch.stdout);

    const upstream = await execa("git", [
      "rev-list",
      "--left-right",
      "--count",
      "HEAD...@{u}",
    ]);
    // 分割配列
    const [ahead, behind] = upstream.stdout.split("\t");
    consola.info("ahead:", ahead);
    consola.info("behind", behind);
  },
});
