# Milktea 奶茶伺服器常用功能

## 登入系統

- `/register` - 註冊指令 使用方法: `/register 密碼`
- `/login` - 登入指令 使用方法: `/login 密碼`
- `/changepassword`, `/cp` - 更改密碼指令 使用方法: `/cp 舊密碼 新密碼` or `/changepassword 舊密碼 新密碼`

---

## 基岩板 (Bedrock Edition) 專用指令

- `/geyser offhand` - 將物品放入副手
- `/geyser advancements` - 打開成就頁面
- `/geyser statistics` - 打開統計頁面

---

## 插件 (基岩板也能用)

- `/spawn` - 傳送至出生點
- `/rtp` - 隨機傳送指令 使用方法: `/rtp` 即可
- `/tpa` - 發出請求傳送至其他玩家的位置
- `/tpahere` - 出請求將玩家傳送至您的位置
- `/tpdeny` - 拒絕所有傳送請求
- `/sethome` - 設定家指令 使用方法: `/sethome 家名稱`
- `/home` - 傳送家指令 使用方法 (需先使用 `/sethome`): `/home 家名稱` 即可傳送
- `/removehome` - 刪除家指令 使用方法: `/removehome 家名稱`
- `/back` - 到上一個傳送點 例如: 您 `rtp` 到了一個風景很美的地方,但須要回家拿東西,傳送到家後 就可以直接使用指令回到 `rtp` 原點 使用方法: `/back` 即可
- `/dback` - 回到上次死亡點 使用方法: `/dback` 即可
- `/discord` - DC 連動指令 使用方法: 先輸入 "/discord" 來獲取 DC 伺服器加入連結,加入後 輸入 `/discord link` 會出現一個 4 位數密碼 請將代碼以私訊方式寄送至伺服器自動機器人 "!奶茶小精靈" 即可連動帳號 (`/discord unlink` 可以取消連動)
- `/pay` - 轉帳指令 使用方法: `/pay 玩家名稱 金額` 注意: 輸入後須確認 (點擊按鈕) 才能順利轉帳
- `/points` - 點券系統指令 將點券轉移至其他玩家: `/points pay 玩家名稱 點券數量` 查看點券數量: `/points me`
- `/cheque` - 支票製作器 使用方法: 先拿著一張紙 and `/cheque 金額` (右鍵支票即可兌現)
- `/ah` - 拍賣行 販賣 (先把需販賣的物品拿在手上) and `/ah sell 價格` 購買請直接輸入 `/ah` 點擊要購買的商品 出價或以原價購買 (左鍵商品),購買後 點擊拍賣行主介面 (`/ah`) 左下角"收藏箱領取"
- `/baltop` - 金錢排行 使用方法: `/baltop` 即可
- `/slime` - 史萊姆區塊蒐尋器 使用方法: `/slime`
- `/msg` - 私訊指令 使用方法: `/msg 玩家名稱 訊息`
- `/rule` - 伺服器規則 使用方法: `/rule` 即可
- `/ping` - 延遲檢視指令 使用方法: `/ping` 即可
- `/bag` - 背包系統 使用方法: `/bag` (直接 `enter` 即可)

---

## 公會系統 (常用功能)

- `/guild create` - 建立工會指令 使用方法: `/guild create 公會名稱`
- `/guild bank deposit` - 公會存款指令 使用方法: `/guild bank deposit 金額`
- `/guild bank withdraw` - 公會取錢指令 使用方法: `/guild bank withdraw 金額`
- `/guild bank balance` - 公會金額查看指令 使用方法: `/guild bank balance` 即可
- `/guild accept` - 接受公會邀請指令 使用方法: `/guild accept 公會名`
- `/guild leave` - 離開公會 or 刪除自己的工會 使用方法: `/guild leave` 即可
- `/guild vault` - 公會金庫(放物品)頁面指令 使用方法: `/guild vault` 即可

---

## 領地系統 (精簡版)

- `/land edit` - 編輯土地 通常在你有很多土地時需要用到
- `/land claim` - 擴增或宣示(第一次)你所在區域的土地 *花的錢取決於區塊數量
- `/land create` - 建立土地 (需要 10000(第一次))
- `/land unclaim` - 取消宣示你所在區域的土地
- `/land info` - 顯示你所在區域的土地資訊
- `/land trust 玩家名稱` - 授予特定玩家在你土地上的信任
- `/land untrust 玩家名稱` - 撤銷特定玩家在你土地上的信任
- `/land menu` - 領地系統主介面 (包含功能:創建"區域" 註1, 管理他人及自己的權限, 查看統計資訊, 更改領土進入時的名稱和介紹, 提升等級 註2 等等)
- `/land taxes` - 確認或繳交土地的稅金 (3.0奶茶幣/Chunk(區塊))
- `/land top` - 查看目前領地排名
- `/land chat` - 進入領地聊天 (只有在內的成員能接收訊息) 使用方式: 第1種: `/land chat 領地名 訊息` 第2種: `/land chat` (直接啟用該模式 重新執行指令即可恢復)
- `/land ban` - 將某人封鎖 (禁止進入) (`/land unban` 恢復)
- `/land map` - 顯示小地圖(領地)
- `/land setrole` - 設定玩家在領地的權限(預設權限:成員|盟友|管理員) 使用方式: `/land setrole 玩家名 區域名` (輸入 * 代表全部) 成員
- `/land view` - 在遊戲裡直接顯示領地範圍 (因為標示方法是使用粒子效果,需要開啟顯示設定裡和粒子效果相關的選項)
- `/land confirmtp` - 確認傳送至危險的地方(可能因為建立土地時,處於飛行狀態,執行此指令即可忽略警告並傳送)
- `/land setspawn` - 設定傳送點(指 `/land spawn` 的傳送點重設,目前無須付費(奶茶幣)改變)
- `/land setowner` - 轉移擁有者(`/land setowner 玩家名` 後 在執行一次 `/land setowner 玩家名 confirm` 以確認)
- `/land list` - 查看所有領地
- `/land leave` - 離開領地(建議先站在領地後執行 `/land edit` 在執行該指令,不然有可能離開別的領地)
- `/land invites` - 查看收到的領地邀請
- `/land merge` - 合併領地(先站在要合併的地方 `/land edit` 然後 `/land merge 被合併領地名` 後再打 `/land merge 被合併領地名 confirm`)
- `/land help` - 查看教學

**註1:** 區域像是一種領地裡的小土地,一樣可以 管理他人及自己的權限 例如您在家裡放置裡一個附魔台 可以直接把該方塊設為所有人的可使用,就可以讓人使用該方塊 無須信任

**註2:** 等級可以改變進入領地時解釋寫的該土地的等級頭銜

---

## 回收桶 贊助後可用

**合成表:** [查看合成表](https://prnt.sc/0GJ79d_rY3nD)

**使用方法:** [查看使用方法](https://cdn.discordapp.com/attachments/1138836357582696569/1138841982983217232/55f3c70624bc5c082425b8ac3e4d9a114effb666.gif)

---

## []功能

- `[money]`, `[m]` - 顯示您的金錢
- `[i]`, `[item]` - 顯示正在拿著的物品
- `[time]` - 目前時間(真實世界)
- `[ping]` - 顯示當前延遲
- `[match:text]` - 將游標停留在文字上 即可顯示文字 (可將 "text" 更改)
- `[ender]` - 顯示您的終界箱
- `[inv]` - 顯示您的背包
- `[pos]` - 顯示您當前的位置(座標)

---

## 箱子商店

**設定:** 請握著你要賣的物品 並左鍵一個箱子

- 這時,聊天室會出現提示 請把單價打在聊天室 (你在這時候輸入的東西不會跑到真正的聊天室)
- `enter` 後 正常來說 箱子這時會出現一個告示牌 但目前為 "無庫存狀態" 請將對應商品放入箱子 (放心 除了您 沒有其他人能打開箱子)
- 如果沒有出現 請確認您瞄準箱子的地方非上方 且瞄準的地方須包聊一個空間 接著輸入 `/shop remove` (這個時候必須瞄準箱子) `enter` 後 箱子將解除商店 接著,重新執行商店建立步驟即可
- BTW刪除商店也是 `/shop remove`!
- 點擊告示牌即可購買
- 當有人購買您的商品時,您會在您的 Discord 私訊裡收到通知(需要綁定 Discord)

**Last edit:** 2023/10/21
