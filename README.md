# wiki
奶茶伺服器官方 wiki 頁面
## 修改方式
在 `docs` 資料夾中編輯 markdown 檔案，並提交 PR 貢獻到 https://github.com/milkteamc/wiki  
使用方式請看下方，如果不會使用，直接用 GitHub 的網頁編輯也可以。
## setup (For macOS only)
For other OS, go to their [wiki](https://squidfunk.github.io/mkdocs-material/plugins/requirements/image-processing/#cairo-graphics-linux)
```
pip install mkdocs-material
pip install "mkdocs-material[imaging]"
pip install mkdocs-minify-plugin
pip install mkdocs-git-revision-date-localized-plugin

brew install cairo freetype libffi libjpeg libpng zlib
```
Go to project folder
```
python3 -m venv venv
source venv/bin/activate

export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib
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
