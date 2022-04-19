echo 'Stopping app processes...'
yarn stop-vps-debug
yarn stop-vps

echo 'pulling changes...'
git checkout develop
git pull

echo 'Installing new packages...'
yarn install

echo 'now you have to run your apps manualy. To get list of app processess use yarn app-list'
