# docs(www): fix broken URLs and format in llms.txt generation (#7462)

## Summary
Resolves #7462 by using `docItem.path` for resolved document routes, converting to absolute URLs, and adding an H1 title header conforming to the llms.txt standard.

Closes #7462

## Validation

- Prettier and focused ESLint on `www/docusaurus.config.ts` — passed
- Generated `www/src/components/CompaniesUsing.script.output.ts` locally, then ran `corepack pnpm exec tsc --noEmit --preserveWatchOutput --pretty false` in `www` — passed
- The root Turbo typecheck remains environment-sensitive because its child process resolves the fallback pnpm 11 binary despite the repository requiring pnpm 10.33.1.
