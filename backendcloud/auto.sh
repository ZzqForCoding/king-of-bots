#! /bin/bash
USER_PASSWORD=Zcbm980528
USERNAME=acs

#项目路径
WORKDIR=/home/$USERNAME/kob/backendcloud

#tmux session的名字
TMUX_SESSION_NAME=kob_workspace
result=$(tmux ls | grep $TMUX_SESSION_NAME)
echo "$result"

# tmux每开一个窗口，相当于新开了一个bash，每新开一个bash，就会执行整个脚本
# 所以每次执行脚本之前，应该判断一下这个脚本之前是否执行过，即判断tmux是否被创建出来
if [[ $result = "" ]]; then
  cd $WORKDIR || exit
  echo $USER_PASSWORD | sudo -S /etc/init.d/nginx start
  echo $USER_PASSWORD | sudo -S redis-server /etc/redis/redis.conf
  echo $USER_PASSWORD | sudo -S service mysql start

  # 后台新建一个session
  tmux new-session -d -s $TMUX_SESSION_NAME
  # 向选择的窗口发送指令
  tmux send-keys -t $TMUX_SESSION_NAME "java -jar backend-0.0.1-SNAPSHOT.jar" C-m
  
  tmux split-window -h
  tmux send-keys -t $TMUX_SESSION_NAME "mysql -uroot -p123456 -h 127.0.0.1" C-m

  tmux split-window -t $TMUX_SESSION_NAME:0.1 -v
  tmux split-window -t $TMUX_SESSION_NAME:0.1 -v
  tmux send-keys -t $TMUX_SESSION_NAME "redis-cli" C-m

  tmux split-window -t $TMUX_SESSION_NAME:0.0 -v
  tmux send-keys -t $TMUX_SESSION_NAME "java -jar botrunningsystem-0.0.1-SNAPSHOT.jar" C-m

  tmux split-window -t $TMUX_SESSION_NAME:0.0 -v
  tmux send-keys -t $TMUX_SESSION_NAME "java -jar matchingsystem-0.0.1-SNAPSHOT.jar" C-m
  tmux split-window -t $TMUX_SESSION_NAME:0.2 -v

  echo "66666666"
fi
