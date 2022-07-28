docker build -t ncku-study-env . -f DockerFile

docker run -it -p <port you want to access>:3000 ncku-study-env