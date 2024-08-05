# wiki-source
奶茶 wiki source code
## setup (macOS only)
```
pip install mkdocs-material
pip install "mkdocs-material[imaging]"
brew install cairo freetype libffi libjpeg libpng zlib
```
go to project dir
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
