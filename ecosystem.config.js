module.exports = {
  apps: [
    {
      name: 'crypto-watch',
      script: 'pm2 start ts-node -- -r tsconfig-paths/register ./index.ts',
    },
  ],
}
