# 公會

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

- 接受

```
/guilds accept <公會名>
```

接受來自 `<公會名>` 的邀請


- 離開

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


## 成就

  ```
  /guilds achievements
  ```

  打開公會成就選單，查看所有可完成的公會成就。

## 公會任務

  ```
  /guilds quest
  ```

  顯示目前公會任務進度與獎勵。

## 列出公會成員

  ```
  /guilds members
  ```

  查看你所在公會的所有成員清單。

## 查看線上成員

  ```
  /guilds online
  ```

  列出公會中目前在線與離線的成員。

## 查看過去事件

  ```
  /guilds history
  ```

  查看過去 24 小時內的公會事件記錄。

## 搜尋公會

  ```
  /guilds finder
  ```

  打開公會搜尋選單，可依名稱、成員數、等級等條件篩選。

## 打開公會選單

  ```
  /guilds menu
  ```

  以 GUI 方式快速管理公會設定、公告與升降職位等。

## 查看／設定 Discord 連結

  ```
  /guilds discord
  ```

  檢視或設定公會的 Discord 邀請連結。

## 預覽MOTD（簡介）

  ```
  /guilds motd preview
  ```

  預覽目前設定的公會MOTD（簡介）。

## 幹部頻道聊天

  ```
  /guilds officerchat <訊息>
  ```

  向所有公會幹部發送私密頻道訊息。

## 組隊功能

  ```
  /guilds party
  ```

  自動將所有在線公會成員拉入隊伍。

## 查看個人權限

  ```
  /guilds mypermissions
  ```

  列出你在公會中擁有的所有可用權限。

## 加入／離開通知切換

  ```
  /guilds notifications
  ```

  切換是否接收公會成員加入及離開時的系統通知。

