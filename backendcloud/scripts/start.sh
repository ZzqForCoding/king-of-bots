#! /bin/bash

#项目路径
WORKDIR=/code/backendcloud

#tmux session的名字
TMUX_SESSION_NAME=code_workspace

cd $WORKDIR || exit

tmux new-session -d -s $TMUX_SESSION_NAME
tmux split-window -h
tmux split-window -v
tmux select-pane -t 1
tmux split-window -v
tmux select-pane -t 4
tmux split-window -h
tmux select-pane -t 3
tmux split-window -h

tmux select-pane -t 4
sudo service mysql start
tmux send-keys -t $TMUX_SESSION_NAME "mysql -uroot -pZcbm4120048 -h 127.0.0.1" C-m
tmux send-keys -t $TMUX_SESSION_NAME "source /code/backendcloud/create_table.sql" C-m

tmux select-pane -t 5
tmux send-keys -t $TMUX_SESSION_NAME "sudo /etc/init.d/redis-server start" C-m

tmux select-pane -t 6
tmux send-keys -t $TMUX_SESSION_NAME "sudo /etc/init.d/nginx start" C-m

tmux select-pane -t 1
tmux send-keys -t $TMUX_SESSION_NAME "java -jar backend-0.0.1-SNAPSHOT.jar" C-m

tmux select-pane -t 2
tmux send-keys -t $TMUX_SESSION_NAME "java -jar matchingsystem-0.0.1-SNAPSHOT.jar" C-m

tmux select-pane -t 3
tmux send-keys -t $TMUX_SESSION_NAME "java -jar botrunningsystem-0.0.1-SNAPSHOT.jar" C-m

echo "66666666"
tail -f /dev/null
