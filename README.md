## Repro steps

```bash
pnpm install

# Run tests via NX in the first project (should fail)
pnpm nx vitest project1

# at this point you should see rogue headless chrome processes

# Run tests in second project manually
cd project2
pnpm vitest run
```
