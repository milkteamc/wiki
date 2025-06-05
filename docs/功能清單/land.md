# 領地

- `/land edit` - 編輯土地。通常在你有很多土地时需要用到。
- `/land claim` - 擴增或宣示(第一次)你所在區域的土地。花的錢取決於區塊數量。
- `/land create` - 建立土地 (需要10,000(第一次))。
- `/land unclaim` - 取消宣示你所在區域的土地。
- `/land info` - 顯示你所在區域的土地資訊。
- `/land trust [玩家名稱]` - 授予特定玩家在你土地上的信任。
- `/land untrust [玩家名稱]` - 撤銷特定玩家在你土地上的信任。
- `/land menu` - 領地系統主介面 (包含功能:創建"區域" 註1, 管理他人及自己的權限, 查看統計資訊, 更改領土進入时的名稱和介紹, 提升等級 註2 等等)。
- `/land taxes` - 確認或繳交土地的稅金 (3.0奶茶幣/Chunk(區塊))。
- `/land top` - 查看目前領地排名。
- `/land chat` - 進入領地聊天 (只有在內的成員能接收訊息)。使用方式: 第1種: `/land chat [領地名] [訊息]`，第2種: `/land chat` (直接啟用該模式，重新執行指令即可恢復)。
- `/land ban` - 將某人封鎖 (禁止進入) (`/land unban` 恢復)。
- `/land map` - 顯示小地圖(領地)。
- `/land setrole` - 設定玩家在領地的權限 (預設權限:成員|盟友|管理員)。使用方式: `/land setrole [玩家名] [區域名]` (輸入 代表全部) 成員。
- `/land view` - 在遊戲裡直接顯示領地範圍 (因為標示方法是使用粒子效果，需要開啟顯示設定裡和粒子效果相關的選項)。
- `/land confirmtp` - 確認傳送至危險的地方 (可能因為建立土地时，處於飛行狀態，執行此指令即可忽略警告並傳送)。
- `/land setspawn` - 設定傳送點 (指`/land spawn`的傳送點重設，目前無須付費(奶茶幣)改變)。
- `/land setowner` - 轉移擁有者 (`/land setowner [玩家名]` 後 在執行一次 `/land setowner [玩家名] confirm` 以確認)。
- `/land list` - 查看所有領地。
- `/land leave` - 離開領地 (建議先站在領地後執行`/land edit`在執行該指令，不然有可能離開別的領地)。
- `/land invites` - 查看收到的領地邀請。
- `/land merge` - 合併領地 (先站在要合併的地方`/land edit`然後 `/land merge [被合併領地名]` 後再打 `/land merge [被合併領地名] confirm`)。
- `/land help` - 查看教學。
- `/lands selection` - 類似/lands claim 的選擇工具(可用選取工具(金鋤)代替) 註4 註5 註6

!!! question "註釋"
    註1: 區域像是一種領地裡的小土地，一樣可以管理他人及自己的權限。例如您在家裡放置裡一個附魔台，可以直接把該方塊設為所有人的可使用，就可以讓人使用該方塊無須信任。  
    註2: 等級可以改變進入領地時解釋寫的該土地的等級頭銜。  
    註3: 領地的基本單位是使用 chunk 計算  
    註4: 使用`/lands selection expand` 可以延伸到Y軸(-64~319)  
    註5: 功能:  
    - `/lands claim`  
    - `/lands unclaim`  
    - `/lands trust`  
    - `/lands untrust`    
    註6: 使用方法: 左鍵為第一點 右鍵為第二點


領地主介面:

![image](../image/land.png)
