楊羽涵｜個人介紹與作品集網站
================================

【網站內容】
- index.html：網站內容與頁面架構
- styles.css：粉色 Y2K／像素風格與響應式版面
- script.js：手機導覽選單、複製 Email 功能
- assets/：照片佔位圖、貓咪與作品縮圖

【如何預覽】
1. 將 ZIP 解壓縮。
2. 開啟資料夾中的 index.html，即可在瀏覽器預覽。
3. 網站使用 Google Fonts 的 Press Start 2P 與 DotGothic16 字體；若瀏覽器無法連線，會自動使用替代字體。

【如何替換個人照片】
1. 準備一張方形或直式的個人照片。
2. 將照片放進 assets 資料夾，建議命名為 profile.jpg。
3. 開啟 index.html，找到：
   <img src="assets/profile-placeholder.svg" ...>
   將路徑改為：
   <img src="assets/profile.jpg" ...>

【如何替換作品封面】
將作品圖片放入 assets 資料夾，再到 index.html 找到對應的 img 標籤，修改 src 路徑即可：
- work-city-sea.svg：在都市裡尋找海的方法
- work-weight.svg：康康你已經肥胖了
- work-whiplash.svg：WHIPLASH Cover
- work-poster-slides.svg：海報、簡報與視覺編排

目前四張作品圖皆為風格示意／佔位視覺，不代表實際作品成品。請在正式公開前換成自己的作品截圖或照片，並補上作品說明、年份、負責項目及影片／作品連結。

【如何修改文字】
使用文字編輯器或 VS Code 開啟 index.html，搜尋姓名、學校、作品名稱或 Email，即可直接修改。

【如何上傳到網站空間】
將解壓縮後資料夾中的所有檔案與 assets 資料夾一起上傳到支援靜態網站的主機。請保留原本檔案結構，並確保 index.html 位於網站根目錄。可使用 GitHub Pages、Netlify 或其他靜態網站空間。

【上線前檢查】
- 替換個人照片與作品佔位圖。
- 確認 Email 正確且願意公開。
- 確認所有作品均可公開展示，並取得必要的影像／音樂使用授權。
- 使用手機與電腦各瀏覽一次，檢查文字、導覽與連結。
