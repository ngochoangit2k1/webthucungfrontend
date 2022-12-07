echo 'start deploy=====>'
docker pull registry.gitlab.com/petshop:latest:latest
./run-internship-team1-dev.sh
echo '=====>deploy success'
