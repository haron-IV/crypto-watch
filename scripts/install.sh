#install base packages
echo 'Installing base packages...'
sudo apt install curl wget git

echo 'Installing oh my zsh'
Y | sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
chsh -s $(which zsh)
zsh
source ~/.zshrc
echo 'oh my zsh installed successfully'

echo 'Installing yarn...'
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install --no-install-recommends yarn
echo 'yarn installed successfully'

echo 'installing NVM...'
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
echo 'NVM installed successfully'

echo 'Installing node v17.1.0 via NVM...'
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install v17.1.0
nvm alias default v17.1.0
echo 'node v17.1.0 installed successfully. Now default version of node is v17.1.0'
