# 公會系統

玩家可使用 `/guilds` 或簡稱 `/g` 來操作公會系統。



## 幫助

```
/guilds
```



## 建立／解散

- 建立

  ```
  /guilds create <公會名>
  ```

- 解散

  ```
  /guilds disband
  ```




## 邀請／加入／離開

- 邀請
  
  ```
  /guilds invite <玩家>
  ```

邀請線上玩家加入你的公會

```
/guilds accept <公會名>
```

接受來自 `<公會名>` 的邀請

```
/guilds deny <公會名>
```

拒絕來自 `<公會名>` 的邀請

```
/guilds leave
```

離開目前所屬公會（若你是會長，請先轉讓或解散）



## 查詢與列表

```
/guilds list
```

列出所有公會及其成員數

```
/guilds info <公會名>
```

查看 `<公會名>` 詳細資訊：會長、成員、等級、公告等

```
/guilds get <玩家>
```

查詢玩家所屬公會 



## 公會聊天

```
/guilds chat <訊息>
```

在公會頻道內發言 

```
/guilds toggle
```

切換是否接收公會頻道訊息 



## 排行榜

```
/guilds leaderboard
```

查看伺服器上各公會的積分排行榜 



## 範例

1. **建立公會**：
   `/g create 昏睡紅茶幫`
2. **邀請好友**：
   `/g invite Tina`
3. **好友加入**：
   `Tina` 輸入 `/g accept 昏睡紅茶幫`
4. **離開公會**：
   `/g leave`
5. **查看清單**：
   `/g list`
6. **查看資訊**：
   `/g info 昏睡紅茶幫`


[1]: https://dev.bukkit.org/projects/avo-guilds/pages/commands?utm_source=chatgpt.com "Commands - Pages - GUILDS - Bukkit Plugins - Projects"
[2]: https://builtbybit.com/resources/a7-guilds-minecraft-guilds-plugin.54007/?utm_source=chatgpt.com "A7 Guilds - Minecraft Guilds Plugin | BuiltByBit"
