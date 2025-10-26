# 🧱 Frontend Practice

持續累積的前端練習集合，涵蓋 HTML、CSS、JavaScript、React 等主題。

## 📚 練習主題
| 檔案 | 類別 | 主題 | 說明 | 更新日期 |
|------|------|------|------|------|
| 2025-10-24 | HTML+CSS | Basic Layout | 練習 [CSS Inverted border-radius Card](https://www.youtube.com/watch?v=rb9i5xBV4js) | 2025-10-24 |
| 2025-10-25 | HTML+CSS | Animation Effects | 練習 [CSS Facial Recognition Animation Effects](https://www.youtube.com/watch?v=homV6mgQ6FE) | 2025-10-25 |
| 2025-10-26 | HTML+CSS | Animation Effects | 練習 [CSS Fingerprint Scanner Animation Effects](https://www.youtube.com/watch?v=6j5pujjRQWo) | 2025-10-25 |
| 2025-10-23 | HTML+CSS | Animation Effects | 練習 [CSS Liquid Blast Effects using CSS SVG & Javascript](https://www.youtube.com/watch?v=YlZFyYvrQ-U) | 2025-10-25 |
| 2025-10-22 | HTML+CSS | Canvas | 練習 [Create a Mind-Blowing Starfield Animation with JavaScript Canvas & Javascript](https://www.youtube.com/watch?v=TLcte6VrT-E) | 2025-10-26 |

---

## 📦 專案結構


## 🚀 專案推送流程 (Git + GitHub CLI)

本專案採用 [GitHub CLI (gh)](https://cli.github.com/) 進行版本控管與推送。

### 1️⃣ 初始化 Git 專案
```bash
git init
git add .
git commit -m "初始提交：建立 frontend-practice 結構"
gh repo create frontend-practice --public --source=. --remote=origin

# 登入 GitHub 帳號
gh auth login

# 檢查登入狀態
gh auth status

# 切換為個人帳號 (例：codebyAllenMing)
gh auth switch -u codebyAllenMing

git branch -M main
git remote add origin https://github.com/codebyAllenMing/frontend-practice.git
git push -u origin main

gh auth status         # 檢查當前登入帳號
git config user.name   # 檢查提交帳號名稱
git remote -v          # 檢查遠端 repo URL
