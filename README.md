# wiki
奶茶伺服器官方 wiki 頁面
## 修改方式
請先 Fork 本 repo，在 `docs` 資料夾中編輯 markdown 檔案，並提交 PR 貢獻到 <https://github.com/milkteamc/wiki/pulls>。    
使用方式請看下方，如果不會使用，直接用 GitHub 的網頁編輯並直接開啟 PR 也可以。
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
**修改後請使用 PR 貢獻到 https://github.com/milkteamc/wiki**
