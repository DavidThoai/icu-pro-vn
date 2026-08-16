# LUU TRU WEB icu.pro.vn
Ngay dong goi: 2026-08-16 18:38

## Cau truc thu muc
- **source/** — toan bo ma nguon React/Vite (index.html, package.json, vite.config.js, src/)
- **dist/** — ban build single-file hien tai (dist/index.html la file chay duoc)
- **data/** — products.json (san pham), families.json (gia dinh) trich tu source
- **css/** — styles.css (CSS day du hien tai) + css-tong-hop.css (tong hop cac sua doi chinh PC/Mobile)
- **README-LUU-TRU.md** — file nay

## Cach kiem tra / khoi phuc
1. Khoi phuc source: copy lai noi dung **source/** vao may moi, chay `npm install` roi `npm run build`.
2. Deploy: `git push` len GitHub main -> Cloudflare Pages tu dong build (https://icu.pro.vn).
3. Chay lai script dong goi de cap nhat ban luu tru:
   `python BACKUP-WEB/build-backup.py`
4. Cap nhat CSS tong hop: `python BACKUP-WEB/css/css-tong-hop.py`

## Ghi chu cac sua doi dang hoat dong (den 2026-08-16 18:38)
- Huy hieu "CONG THUC MOI CAI TIEN" o moi san pham (render khong dieu kien, san pham moi tu dong co).
  Vi tri: goc tren-trai, nghieng 5 do, tran vien trai 1.5px / tren 0.5px, 99px (PC) / 84px (mobile), hover scale 1.06.
- Tab dieu huong 6 muc + footer 4 logo 1 hang (>=701px nowrap, <=700px cuon ngang).
- DMCA badge chinh thuc (ID 42b6b10d-2dcf-4aad-9ba6-2e92856c864d) trong footer.
- Tab cuoi dieu huong: "Tu van san pham"; form lien he: label "Toi Can", lua chon "Can Tu Van San Pham ICU & Furryshine".
- Khoang cach doc: section padding clamp(9px,1.2vw,14px); hero-bg max 600px >=1630px.
- Dong bo PC/Mobile: toan bo trong styles.css + css-tong-hop.css.
