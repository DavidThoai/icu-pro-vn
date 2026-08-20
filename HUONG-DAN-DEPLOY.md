# 🚀 HƯỚNG DẪN DEPLOY - Website ICU (icu.pro.vn)

> Website: **https://icu.pro.vn** · Dự phòng: **https://danghanicu.pages.dev**
> Nền tảng: **Cloudflare Pages** (miễn phí, không giới hạn deploy)
> ⚡ **TỰ ĐỘNG DEPLOY QUA GITHUB** - chỉ cần `git push` là web tự cập nhật!

---

## 📦 TỔNG QUAN DỰ ÁN

| Thành phần | Giá trị |
|-----------|---------|
| Tên dự án | ICU Brand Promotion Landing |
| Công nghệ | React + Vite (single-file build) |
| Công ty | Cty TNHH SX & TM Đặng Hân (DANG HAN TAP CO., LTD) |
| Nhãn phụ | Furryshine Pet |
| Domain chính | https://icu.pro.vn |
| Domain dự phòng | https://danghanicu.pages.dev |
| Hosting | Cloudflare Pages (project: `danghanicu`) |
| **GitHub** | **https://github.com/DavidThoai/icu-pro-vn** (branch: `main`) |
| DNS | Cloudflare (zone: icu.pro.vn) |

---

## 🛠️ CÔNG CỤ CẦN THIẾT

| Công cụ | Mục đích | Kiểm tra |
|---------|----------|----------|
| **VS Code** | Chỉnh sửa mã nguồn | `code --version` |
| **Node.js** (v22+) | Chạy build | `node --version` |
| **Git** | Push lên GitHub (tự deploy) | `git --version` |
| **GitHub CLI** | Quản lý repo | `gh --version` |

> 💡 Wrangler CLI không còn bắt buộc — deploy tự động qua GitHub.

---

## ⚡ QUY TRÌNH LÀM VIỆC HÀNG NGÀY (3 BƯỚC)

```bash
cd D:\icu.pro.vn
code .                    # 1. Mở VS Code, sửa nội dung
git add .
git commit -m "Mô tả thay đổi"
git push                  # 2. Push lên GitHub
                          # 3. Cloudflare tự build + deploy (~1-2 phút)
```

**Sau khi push:** chờ 1-2 phút → mở https://icu.pro.vn xem kết quả.

---

## 🖥️ HƯỚNG DẪN SỬA NỘI DUNG BẰNG VS CODE

### Cấu trúc thư mục quan trọng:
```
D:\icu.pro.vn\
├── src\
│   ├── App.jsx          ← Cấu trúc trang chính (Hero → Products → Formula → Contact)
│   ├── styles.css       ← Toàn bộ màu sắc, font, bố cục
│   ├── fonts.css        ← Font chữ (Be Vietnam Pro, Source Sans 3, Nunito)
│   └── components\
│       ├── Hero.jsx         ← Phần đầu trang
│       ├── Products.jsx     ← Danh sách sản phẩm (3 nhóm)
│       ├── Formula.jsx      ← Bảng công thức (3 tab)
│       ├── Contact.jsx      ← Liên hệ
│       ├── NavBar.jsx       ← Menu điều hướng
│       └── SiteFooter.jsx   ← Chân trang
├── public\
│   └── images\         ← Ảnh sản phẩm (thay ảnh ở đây)
├── index.html
└── package.json
```

### Các thao tác thường gặp:

**Đổi màu chủ đạo:** mở `src/styles.css`, tìm `:root` → sửa các biến màu (--brand, --accent...)

**Sửa tên sản phẩm / mô tả:** mở `src/components/Products.jsx`, tìm tên sản phẩm cần sửa

**Thay ảnh:** ghi đè file ảnh cùng tên trong `public/images/`, hoặc thêm ảnh mới và cập nhật đường dẫn trong code

**Thay video:** ghi đè file `.mp4` trong `public/images/` (giữ tên cũ để không phải sửa code)

> ⚠️ **Lưu ý video:** phải có tiếng (audio) — dùng lệnh ffmpeg:
> ```bash
> ffmpeg -i input.mp4 -vf scale=480:-2 -c:v libx264 -crf 30 -c:a aac -b:a 96k -ac 1 output.mp4
> ```

### 🎬 TỶ LỆ VIDEO CHUẨN (tránh bị cắt / che khuất)

- **Nguyên tắc:** video phải hiển thị **trọn vẹn, đúng tỷ lệ gốc** — KHÔNG dùng `object-fit: cover` (sẽ cắt xén), KHÔNG phóng to (scale) khi rê chuột.
- **Tỷ lệ chuẩn đang dùng:**
  - Video **dọc 9:16** = 720×1280 (nước hoa thú cưng, fs03, sieuam, c819, pet)
  - Video **ngang 16:9** = 480×270 (ab, c268, c368, c369, c686, t889)
- **Đã cấu hình tự động:** code hiển thị video đúng tỷ lệ gốc từng video (khung `.product-img.has-video` + `height:auto` + `object-fit: contain` + nền đen). Khi thêm video mới chỉ cần đúng tỷ lệ gốc là hiển thị chuẩn, không cần sửa code.
- **Nén video dọc (giữ tỷ lệ 9:16):**
  ```bash
  ffmpeg -i input.mp4 -vf scale=720:-2 -c:v libx264 -crf 30 -c:a aac -b:a 96k -ac 1 output.mp4
  ```
  (Lưu ý: `scale=480:-2` sẽ ra video ngang 16:9 — dùng `720:-2` cho video dọc.)
- **Giới hạn tải lên Cloudflare:** file `dist/index.html` phải **< 25MB**. Video lớn nên đặt vào `public/` (file riêng, không nhúng) để tránh vượt giới hạn — ví dụ video nước hoa đang ở `public/pet-perfume-video.mp4`, code tham chiếu bằng đường dẫn `/pet-perfume-video.mp4`.

### Sau khi sửa xong → 3 lệnh git push (mục ⚡ ở trên)

---

## 🔧 LỆNH THỦ CÔNG (CHỈ KHI CẦN)

### Chạy thử trên máy trước khi push:
```bash
cd D:\icu.pro.vn
npm install        # lần đầu
npm run dev        # mở http://localhost:5173
```

### Deploy thủ công (không qua GitHub):
```bash
npm run build
wrangler pages deploy dist --project-name=danghanicu --branch=main
```

---

## 🧯 XỬ LÝ SỰ CỐ THƯỜNG GẶP

| Vấn đề | Cách xử lý |
|--------|-----------|
| Push lỗi "dialog cancelled" | Chạy `gh auth setup-git` một lần |
| Build lỗi (đỏ chữ) | Đọc dòng lỗi đầu tiên, thường do thiếu `npm install` |
| Ảnh không hiện | Kiểm tra file ảnh có trong `public/images/` và đúng tên |
| Video không có tiếng | Nén lại bằng ffmpeg (lệnh ở trên) |
| Web cũ không cập nhật | Đợi 1-2 phút sau push, hoặc Ctrl+F5 (xóa cache) |
| Domain không vào | Kiểm tra NS: `Resolve-DnsName icu.pro.vn -Type NS` (phải là amos/marv.ns.cloudflare.com) |

---

## 📞 HỖ TRỢ

- Mắt Bão (domain): 1900 1830
- Cloudflare: https://dash.cloudflare.com
- GitHub: https://github.com/DavidThoai/icu-pro-vn

---
*Tài liệu được cập nhật bởi AutoClaw - 14/08/2026 (đã kết nối GitHub auto-deploy)*
