import { cli } from "gunshi";
import { branch } from "./branch.ts";
import { upstream } from "./upstream.ts";
import { status } from "./status.ts";
import { stash } from "./stash.ts";

await cli(process.argv.slice(2), {
  name: "git-summary",
  run: async (ctx) => {
    branch();
    upstream();
    status();
    stash();
  },
});
