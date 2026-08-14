# 📁 icu.pro.vn - Bộ điều khiển Website ICU

Thư mục này chứa **toàn bộ mã nguồn + tài liệu** để bạn tự quản lý website https://icu.pro.vn

## 📄 Bắt đầu từ đâu?
1. **HUONG-DAN-DEPLOY.md** → cách deploy, sửa nội dung, xử lý lỗi
2. **QUY-TRINH-TAO-WEB.md** → toàn bộ quy trình từ đầu đến khi web chạy
3. **src/** → mã nguồn website (mở bằng VS Code)
4. **dist/** → bản build sẵn (kết quả deploy)

## ⚡ Lệnh nhanh
```bash
# Deploy web (sau khi sửa xong)
npm run build
wrangler pages deploy dist --project-name=danghanicu --branch=main
```

## 🔗 Liên kết
- Website: https://icu.pro.vn
- Dự phòng: https://danghanicu.pages.dev
