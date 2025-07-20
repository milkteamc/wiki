# wiki
奶茶伺服器官方 wiki 頁面
## 一般修改方式
1. 請先分叉本儲存庫
2. 在 `docs` 資料夾中編輯 markdown 檔案（此時修改內容還不會應用到網站，要完成合併後才會看到你加入的內容）
3. 到 <https://git.maoyue.tw/milkteamc/wiki/pulls> 點新合併請求
4. 選擇「拉取」找到你剛才進行修改的分支
5. 點選新合併請求，並且在標題寫一點相關內容
6. 等待我們進行審查、合併

以下是對於開發者的內容。  
## setup (For macOS only)
For other OS, go to their [wiki](https://squidfunk.github.io/mkdocs-material/plugins/requirements/image-processing/#cairo-graphics-linux)
Go to project folder
```
uv venv
source venv/bin/activate

export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib
```
Install deps
``` 
uv pip install mkdocs-material "mkdocs-material[imaging]" mkdocs-minify-plugin mkdocs-git-revision-date-localized-plugin mkdocs-git-authors-plugin

brew install cairo freetype libffi libjpeg libpng zlib
```
## some command
preview
```
mkdocs serve
```
build
```
mkdocs build
```
**修改後請使用 PR 貢獻到 https://git.maoyue.tw/milkteamc/wiki**
