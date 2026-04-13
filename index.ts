import { consola } from "consola";
import { Command } from "commander";
import { execa, execaSync } from "execa";

const runCLI = () => {
  const program = new Command();

  program
    .name("git-summary")
    .version("0.1.0")
    .action(() => {
      const branch = execaSync("git", ["branch", "--show-current"]).stdout;
      const Last = execaSync("git", ["log", "-1", "--format=%s"]).stdout;
      const changes = execaSync("git", ["status", "--short"]).stdout;

      const line = changes.split("\n").filter((n) => n !== "").length;
      // → [" M README.md", " M src/index.ts", "?? dist/"]
      // 行ごとに分割

      consola.log(`branch: ${branch}`);
      consola.log(`Last: ${Last}`);
      consola.log(`changes: ${line}`);
    });

  program.parse();
};

runCLI();

