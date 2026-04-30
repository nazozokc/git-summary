import { consola } from "consola";
import { cli } from "gunshi";
import { branch } from "./branch.ts";
import { upstream } from "./upstream.ts";

await cli(process.argv.slice(2), {
  name: "git-summary",
  run: async (ctx) => {
    branch();
    upstream();
  },
});
