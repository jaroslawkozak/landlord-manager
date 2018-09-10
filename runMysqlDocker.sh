#!/bin/bash
#@Author: Jarosław Kozak
#Script starts a docker container with MySql database
#sudo docker run --rm -p 3306:3306 --env="MYSQL_ROOT_PASSWORD=qwe123" --name lm-mysql -d mysql:5.7

#Linux
sudo docker run -v $PWD/lm-db:/var/lib/mysql --rm -p 3306:3306 --env="MYSQL_ROOT_PASSWORD=qwe123" --name lm-mysql -d mysql:5.7
