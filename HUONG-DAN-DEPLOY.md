# 🚀 HƯỚNG DẪN DEPLOY - Website ICU (icu.pro.vn)

> Website: **https://icu.pro.vn** · Dự phòng: **https://danghanicu.pages.dev**
> Nền tảng: **Cloudflare Pages** (miễn phí, không giới hạn deploy)

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
| DNS | Cloudflare (zone: icu.pro.vn) |

---

## 🛠️ CÔNG CỤ CẦN THIẾT

| Công cụ | Mục đích | Kiểm tra |
|---------|----------|----------|
| **VS Code** | Chỉnh sửa mã nguồn | `code --version` |
| **Node.js** (v22+) | Chạy build | `node --version` |
| **Wrangler CLI** | Deploy lên Cloudflare | `wrangler --version` |
| **Git** | Quản lý phiên bản + GitHub | `git --version` |

---

## 🔧 CÁC LỆNH QUAN TRỌNG

### 1. Cài đặt phụ thuộc (lần đầu)
```bash
cd D:\icu.pro.vn
npm install
```

### 2. Chạy thử trên máy (xem trước khi deploy)
```bash
npm run dev
```
Mở trình duyệt tại `http://localhost:5173`

### 3. Build (tạo file tĩnh trong thư mục dist)
```bash
npm run build
```
Kết quả: thư mục `dist/` chứa 1 file HTML duy nhất (đã nhúng toàn bộ ảnh/video/font).

### 4. Deploy lên Cloudflare Pages (quan trọng nhất)
```bash
wrangler pages deploy dist --project-name=danghanicu --branch=main
```
Sau khi deploy, website tự động cập nhật tại:
- https://icu.pro.vn
- https://danghanicu.pages.dev

---

## 🖥️ HƯỚNG DẪN SỬA NỘI DUNG BẰNG VS CODE

### Cấu trúc thư mục quan trọng:
```
icu.pro.vn/
├── src/
│   ├── App.jsx          ← Cấu trúc trang chính (Hero → Products → Formula → Contact)
│   ├── styles.css       ← Toàn bộ màu sắc, font, bố cục
│   ├── fonts.css        ← Font chữ (Be Vietnam Pro, Source Sans 3, Nunito)
│   └── components/
│       ├── Hero.jsx         ← Phần đầu trang
│       ├── Products.jsx     ← Danh sách sản phẩm (3 nhóm)
│       ├── Formula.jsx      ← Bảng công thức (3 tab)
│       ├── Contact.jsx      ← Liên hệ
│       ├── NavBar.jsx       ← Menu điều hướng
│       └── SiteFooter.jsx   ← Chân trang
├── public/
│   └── images/         ← Ảnh sản phẩm (thay ảnh ở đây)
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

### Sau khi sửa xong → Build → Deploy (3 bước trên)

---

## 🔄 KẾT NỐI GITHUB (deploy tự động - tùy chọn)

### Lần đầu:
```bash
# Đăng nhập GitHub
gh auth login

# Tạo repo mới trên GitHub
cd D:\icu.pro.vn
git init
git add .
git commit -m "Initial commit"
gh repo create icu-pro-vn --public --source=. --push
```

### Kết nối GitHub với Cloudflare Pages (tự động deploy khi push):
1. Mở https://dash.cloudflare.com → Workers & Pages → dự án `danghanicu`
2. Vào tab **Settings → Builds & deployments** → **Connect to Git**
3. Chọn repo `icu-pro-vn` → Save
4. Từ nay: **mỗi lần `git push` là web tự cập nhật** (không cần wrangler)

### Quy trình làm việc hàng ngày:
```bash
cd D:\icu.pro.vn
code .                    # mở VS Code
# ... sửa nội dung ...
git add .
git commit -m "Mô tả thay đổi"
git push                  # web tự deploy
```

---

## 🧯 XỬ LÝ SỰ CỐ THƯỜNG GẶP

| Vấn đề | Cách xử lý |
|--------|-----------|
| `wrangler: command not found` | Cài lại: `npm install -g wrangler` |
| Build lỗi (đỏ chữ) | Đọc dòng lỗi đầu tiên, thường do thiếu `npm install` |
| Ảnh không hiện | Kiểm tra file ảnh có trong `public/images/` và đúng tên |
| Video không có tiếng | Nén lại bằng ffmpeg (lệnh ở trên) |
| Web cũ không cập nhật | Đợi 1-2 phút sau deploy, hoặc Ctrl+F5 (xóa cache) |
| Domain không vào | Kiểm tra NS: `Resolve-DnsName icu.pro.vn -Type NS` (phải là amos/marv.ns.cloudflare.com) |

---

## 📞 HỖ TRỢ

- Mắt Bão (domain): 1900 1830
- Cloudflare: https://dash.cloudflare.com
- GitHub: https://github.com

---
*Tài liệu được tạo bởi AutoClaw - 14/08/2026*

