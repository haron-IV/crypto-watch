echo 'Creating repos directory'
mkdir repos
cd repos
echo 'clonign crypto-watch project...'
git clone https://github.com/haron-IV/crypto-watch.git
echo 'project crypto-watch clonned. Started to installign project dependencies...'
cd crypto-watch
echo 'started installing packages...'
yarn install
echo 'packages installed successfully'
