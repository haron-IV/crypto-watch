#pass argiment to cooperate with your ssh example: sh update.sh docker@your_server_ip
# Build in this file is configured for apple M1
SSH=$1
project_name="crypto-alert"
project_root=$(pwd)
green="\033[0;32m"
blue="\033[0;34m"
color_reset="\033[0m"

printStep () {
    echo "${green} $1 ${color_reset}"
}
printSuccess () {
    echo "${blue} $1 ${color_reset}"
    echo
}

printStep "Step 1: Building docker image"
docker build -t ${project_name} ${project_root} --platform linux/x86_64
printSuccess "Docker image built successfully"

printStep "Step 2: Saving docker image"
docker save -o "${project_name}.tar" $project_name
printSuccess "Image saved successfully"

printStep "Step 3: Compressing docker image"
rm "${project_name}.tar.gz"
tar -cvzf "${project_name}.tar.gz" "${project_name}.tar"
rm "${project_name}.tar"
printSuccess "Docker image compressed successfully"

printStep "Step 4: Copying image to VPS"
ssh ${SSH} "rm ~/images/${project_name}.tar"
scp "${project_root}/${project_name}.tar.gz" "${SSH}:~/images/${project_name}.tar.gz"
printSuccess "Image copied successfully"

printStep "Step 5: Uncompress ${project_name}.tar.gz"
ssh ${SSH} "cd images && tar -xvzf ${project_name}.tar.gz"
ssh ${SSH} "rm ~/images/${project_name}.tar.gz"
printSuccess "Image uncompressed successfully"

printStep "Step 6: Load docker image"
image_id=$(ssh ${SSH} "docker load -i ~/images/${project_name}.tar")
printSuccess "Image loaded successfully."

printStep "Step 7: tagging the image"
ssh ${SSH} "docker tag ${project_name}:latest ${project_name}:latest"
printSuccess "Image tagged successfully. | tag name: ${project_name}:latest"
