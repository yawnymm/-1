個人介紹網站｜使用與上傳說明
================================

檔案內容
- index.html：網站主要內容與區塊結構
- styles.css：色彩、字體、版面與手機版樣式
- script.js：手機導覽選單、目前導覽項目與頁尾年份
- assets/profile-placeholder.svg：個人照片預留圖

上傳前請先修改
1. 打開 index.html，搜尋「你的姓名」，改成你的姓名。
2. 搜尋「your-email@example.com」，改成你願意公開的電子郵件地址（文字與 mailto 連結都要改）。
3. 將自己的照片放入 assets 資料夾，例如命名為 profile.jpg，再把 index.html 中
   assets/profile-placeholder.svg 改成 assets/profile.jpg。建議使用直式照片，主體置中。
4. 依照實際情況修改自我介紹、學習背景、專業領域與作品描述。作品區目前是依照討論過的
   課堂／個人練習與教學規劃整理，正式公開時建議換上實際作品圖片或成果連結。
5. 若不想載入 Google Fonts，可刪除 index.html <head> 內的兩行 Google Fonts 載入網址；
   網站會改用裝置內建字體顯示。

如何預覽
- 將整個資料夾解壓縮。
- 直接以瀏覽器開啟 index.html，即可預覽網站。
- 請另外用手機瀏覽器開啟一次，測試手機導覽選單、文字與版面。

如何上傳到網站
- 將 ZIP 解壓縮後，依網站服務商的要求上傳整個資料夾內容。
- 若使用 GitHub Pages、Netlify 或其他靜態網站空間，請確保 index.html 位於發布目錄最上層，
  並一併上傳 styles.css、script.js 與 assets 資料夾。
- 不需要資料庫或伺服器程式；這是一個純 HTML、CSS、JavaScript 的靜態網站。

可自訂項目
- 顏色：在 styles.css 最上方的 :root 區塊修改 --paper、--ink、--green、--coral 等變數。
- 區塊文字：直接編輯 index.html 對應段落。
- 作品數量：複製或刪除 index.html 中的 article.project-card 區塊。
