#DO EVERYTHING MANUALLY

#create user and gran permissions
adduser docker
usermod -aG sudo docker
#configure firewall
ufw  allow OpenSSH
ufw enable

#login to VPS via docker acc
ssh docker@your_server_ip

#copy ssh keys to docker user
rsync --archive --chown=docker:docker ~/.ssh /home/docker

#now from this user install docker
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install docker-ce

#now you can check if docker is working
sudo systemctl status docker

#everything you can find here
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

#build docker image
#on M1 apple:
docker build -t crypto-alert . -t crypto-alert --platform linux/x86_64

#Saving docker image and moving to VPS
docker save -o image.tar <imageID>

#compress to reduce file size
tar -cvzf crypto-alert.tar.gz ./crypto-alert.tar

scp ./crypto-alert.tar.gz docker@your_server_ip:~/images/crypto-alert.tar.gz
#uncompress the file
tar -xvzf crypto-alert.tar.gz

#load into target docker repo
#get into your VPS via ssh
docker load -i ./images/crypto-alert.tar | grep -o "sha256:.*"

#Tag the image
docker tag <imageID> crypto-alert:latest

