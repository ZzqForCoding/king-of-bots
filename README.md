# 编程对战平台

## 项目介绍

[项目地址](https://github.com/ZzqForCoding/king-of-bots)
[docker hub](https://hub.docker.com/repository/docker/zzq10/ubuntu/general)

此项目是基于绕蛇进行游戏匹配，玩家可选择代码或键盘、鼠标进行操作，的一个编程对战平台，平台会执行用户所写代码，作为每回合的游戏操作，并因为玩家操作导致游戏地图不同，因此导致每回合输出不同，玩家需要编写一个通过地图与双方操作数据输入，输出一个最优决策。

<br>

本项目使用过Django和Element plus进行功能扩展，项目地址：[AI Game Platform](https://github.com/ZzqForCoding/ai_game)

<br>

## 游戏该如何操作？

该平台支持键盘或代码操作，键盘操作使用W、A、S、D进行上下左右控制，代码目前只支持Java语言，样例如下：

```java
package com.kob.botrunningsystem.utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Bot implements java.util.function.Supplier<Integer> {

    // 由你来编写，返回一个int值，范围是0~3，分别代表上右下左
    public Integer nextMove(String input) {
        ...
    }

    @Override
    public Integer get() {
        File file = new File("input.txt");
        try {
            Scanner sc = new Scanner(file);
            return nextMove(sc.next());
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
```

<br>

## 游戏部署

**拉取项目至本地：**
```git
git clone git@git.acwing.com:study/project1/kob_server.git
```
<br>

**通过dockerfile制作镜像：**
```shell
cd dockerfile所在文件夹
# 制作镜像
docker build -t zzq10/ubuntu:kob .
# 运行容器
./docker_run.sh
```

**注意：** `conf`文件夹下的nginx配置文件与redis配置文件有需要修改可以直接修改，nginx里配置了域名与https证书；容器可以通过`docker exec -it 容器名或id /bin/bash`命令进入容器，通过`tmux a`可查看正在运行服务

<br>

## 常见问题

若redis写日志出现报错：`Redis:Failed opening .rdb for saving: Permission denied`，执行以下命令可解决
```shell
sudo chmod 777 /data
sudo chmod 777 /data/dump.rdb
```
