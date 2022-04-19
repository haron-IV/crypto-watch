module.exports = {
  apps: [
    {
      name: 'crypto-watch',
      script: 'yarn ts-node -r tsconfig-paths/register ./src/index.ts',
    },
  ],
}
