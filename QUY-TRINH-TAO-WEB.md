# 📋 QUY TRÌNH TẠO & VẬN HÀNH WEBSITE ICU (icu.pro.vn)

> Tài liệu tổng hợp toàn bộ quy trình từ ý tưởng → website chạy thật trên internet.
> Áp dụng cho: **ICU - Hóa chất tẩy rửa chuyên dụng** (Đặng Hân / Furryshine Pet)

---

## 🗺️ SƠ ĐỒ TỔNG THỂ

```
Ý tưởng / Nội dung
      ↓
Mã nguồn React (thư mục icu.pro.vn)
      ↓
Build (npm run build) → thư mục dist/
      ↓
Deploy (wrangler) → Cloudflare Pages
      ↓
DNS icu.pro.vn (Mắt Bão → Cloudflare NS)
      ↓
🌐 https://icu.pro.vn HOẠT ĐỘNG
```

---

## 1️⃣ GIAI ĐOẠN 1: XÂY DỰNG WEBSITE

### Bước 1.1 - Xác định nội dung
- Tên công ty, ngành nghề, sản phẩm chính
- Danh sách sản phẩm + ảnh + video (mỗi sản phẩm: 5 ảnh + 1 video)
- Màu sắc thương hiệu, phong cách (studio tối, sang trọng)

### Bước 1.2 - Tạo mã nguồn
Công nghệ: **React + Vite** (build 1 file HTML duy nhất, tối ưu mobile)

### Bước 1.3 - Xử lý ảnh & video
- Ảnh: đúng tỷ lệ, nhẹ (<200KB/ảnh) — dùng PIL/Pillow nén
- Video: 480p, có tiếng (aac 96k mono), <1MB/phút — dùng ffmpeg

### Bước 1.4 - Kiểm tra trên máy
```bash
npm run dev    # mở http://localhost:5173
```
Kiểm tra trên điện thoại (cùng wifi) để đảm bảo responsive.

---

## 2️⃣ GIAI ĐOẠN 2: DEPLOY (ĐƯA LÊN INTERNET)

### Bước 2.1 - Chọn nền tảng hosting
| Nền tảng | Ưu điểm | Nhược điểm |
|----------|---------|-----------|
| **Cloudflare Pages** ✅ | Miễn phí, không giới hạn, nhanh, SSL miễn phí | Cần chút kỹ thuật |
| Netlify | Dễ dùng | Free tier giới hạn credits (đã hết) |
| Vercel | Tốt cho frontend | - |

### Bước 2.2 - Deploy
```bash
wrangler pages deploy dist --project-name=danghanicu --branch=main
```

### Bước 2.3 - Kiểm tra
- https://danghanicu.pages.dev ✅ (luôn hoạt động sau mỗi deploy)

---

## 3️⃣ GIAI ĐOẠN 3: GẮN TÊN MIỀN RIÊNG

### Bước 3.1 - Mua tên miền (đã có)
- `icu.pro.vn` — đăng ký tại Mắt Bão (matbao.net)

### Bước 3.2 - Thêm domain vào Cloudflare Pages
1. Cloudflare Dashboard → Workers & Pages → dự án `danghanicu`
2. Tab **Custom domains** → **Add custom domain** → nhập `icu.pro.vn`
3. Cloudflare cấp 2 nameserver: `amos.ns.cloudflare.com`, `marv.ns.cloudflare.com`

### Bước 3.3 - Đổi Nameserver tại Mắt Bão
1. Đăng nhập https://manage.matbao.net
2. Quản lý tên miền → chọn `icu.pro.vn` → tab **Name Server**
3. Chọn **Sử dụng Name Server tùy chỉnh**
4. NS1 = `amos.ns.cloudflare.com`, NS2 = `marv.ns.cloudflare.com`
5. **Lưu thay đổi** (hiệu lực tối đa 24h)

### Bước 3.4 - Thêm bản ghi DNS trong Cloudflare
Vào zone `icu.pro.vn` → DNS → Records:
| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `@` | danghanicu.pages.dev | Proxied ☁️ |
| CNAME | `www` | danghanicu.pages.dev | Proxied ☁️ |

### Bước 3.5 - Chờ & kiểm tra
```bash
Resolve-DnsName icu.pro.vn -Type NS   # phải ra amos/marv.ns.cloudflare.com
```
Khi DNS chuyển xong → Cloudflare tự cấp SSL → https://icu.pro.vn hoạt động.

---

## 4️⃣ GIAI ĐOẠN 4: VẬN HÀNH & CẬP NHẬT

### Cập nhật nội dung (3 lệnh):
```bash
cd D:\icu.pro.vn
npm run build
wrangler pages deploy dist --project-name=danghanicu --branch=main
```

### Tự động hóa (khuyến nghị):
Kết nối GitHub → mỗi lần `git push` là web tự deploy (xem HUONG-DAN-DEPLOY.md)

---

## 📊 HỒ SƠ KỸ THUẬT

### Tài khoản & dịch vụ
| Dịch vụ | Tài khoản | Ghi chú |
|---------|-----------|---------|
| Cloudflare | dangphuongthoai@gmail.com | Account ID: 9263d410d6e619ef1e724e491e6bc96b |
| Mắt Bão | (tài khoản khách hàng) | Domain icu.pro.vn, NS đã đổi sang Cloudflare |
| GitHub | (sẽ tạo) | Repo: icu-pro-vn |

### Cấu hình Cloudflare Pages
- Project: `danghanicu`
- Build command: `npm run build`
- Output: `dist`
- Custom domains: `icu.pro.vn`, `www.icu.pro.vn`

### Danh sách sản phẩm (3 nhóm)
1. **DUNG DỊCH TẨY RỬA CÔNG NGHIỆP · GARA**: T889, C268, C369, C368, C686
2. **DUNG DỊCH TẨY BẨN CHUYÊN DỤNG CHO VÀNG · BẠC · ĐÁ QUÝ**: A889, B889, SIÊU ÂM, C819
3. **FURRYSHINE PET · CLEAN BEAUTY & SCIENCE**: FS-01 → FS-06

---

## 🗓️ LỊCH SỬ QUAN TRỌNG

| Ngày | Sự kiện |
|------|---------|
| 08/2026 | Xây dựng website (V1 → V53, nhiều phiên bản) |
| 14/08/2026 | Netlify hết credits → chuyển sang Cloudflare Pages |
| 14/08/2026 | Deploy thành công danghanicu.pages.dev |
| 14/08/2026 | Thêm custom domain icu.pro.vn, đổi NS sang Cloudflare |
| 14/08/2026 | Tạo thư mục quản lý icu.pro.vn + kết nối GitHub |

---
*Tài liệu được tạo bởi AutoClaw - 14/08/2026*

