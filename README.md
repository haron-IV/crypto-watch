# crypto-watch

Stack: node, typescript, nodemailer, dotenv, axios, ts-node

### TODO:

- [ ] Save alerts in .json file
- [x] Multiple cryptocurrencies alert
- [ ] Send SMS / Call when alert is important
- [ ] Wrap with Docker
- [x] Make config.ts as template file (to not commit every chnage in config)
- [ ] Create better mail template

readme:
to use config u have to clone file `config.template.ts` change the name to `config.ts`. The file is in `/src` directory.

scripts:

`start` - start develop app

#### debug:

`start-vps-debug` - start vps version based on pm2
`stop-vps-debug` - stop vps version based on pm2
`delete-vps-debug` - delete vps app process based on pm2

#### prod:

`start-vps` - start vps prod version
`stop-vps` - stop vps prod version
`delete-vps` - delete vps app process

#### other:

`logs` - shows app logs
`app-list` - shows list of started processes

## VPS instance:

You can start with raw Ubuntu 20.04 using scripts from `/scripts`
You can firstly install git, yarn etc. manually then use scripts. Or just copy it and run in the `home` directory of the VPS.

1. run install.sh
2. run repos.sh
