import { useState } from 'react'
import t889 from '../images/t889.jpg'
import t889_5 from '../images/t889-4.jpg'
import t889_6 from '../images/t889-5.jpg'
import t889_7 from '../images/t889-6.jpg'
import t889_8 from '../images/t889-7.jpg'
import t889_9 from '../images/t889-8.jpg'
import t889_12 from '../images/t889-9.jpg'
import t889Video from '../images/t889-video.mp4'
import c268 from '../images/c268.jpg'
import c268_1 from '../images/c268-1.jpg'
import c268_2 from '../images/c268-2.jpg'
import c268_3 from '../images/c268-3.jpg'
import c268_4 from '../images/c268-4.jpg'
import c268_5 from '../images/c268-5.jpg'
import c268_6 from '../images/c268-6.jpg'
import c268Video from '../images/c268-video.mp4'
import c369 from '../images/c369.jpg'
import c369_1 from '../images/c369-1.jpg'
import c369_2 from '../images/c369-2.jpg'
import c369_3 from '../images/c369-3.jpg'
import c369_4 from '../images/c369-4.jpg'
import c369_5 from '../images/c369-5.jpg'
import c369_6 from '../images/c369-6.jpg'
import c369Video from '../images/c369-video.mp4'
import c368 from '../images/c368.jpg'
import c368_1 from '../images/c368-1.jpg'
import c368_2 from '../images/c368-2.jpg'
import c368_3 from '../images/c368-3.jpg'
import c368_4 from '../images/c368-4.jpg'
import c368_5 from '../images/c368-5.jpg'
import c368_6 from '../images/c368-6.jpg'
import c368Video from '../images/c368-video.mp4'
import c686 from '../images/new1.jpg'
import c686_1 from '../images/c686-1.jpg'
import c686_2 from '../images/c686-2.jpg'
import c686_3 from '../images/c686-3.jpg'
import c686_4 from '../images/c686-4.jpg'
import c686_5 from '../images/c686-5.jpg'
import c686_6 from '../images/c686-6.jpg'
import c686Video from '../images/c686-video.mp4'
import a889 from '../images/a889.jpg'
import b889 from '../images/b889.jpg'
import sieuam from '../images/sieuam.jpg'
import sieuam_1 from '../images/sieuam-1.jpg'
import sieuam_2 from '../images/sieuam-2.jpg'
import sieuam_3 from '../images/sieuam-3.jpg'
import sieuam_4 from '../images/sieuam-4.jpg'
import sieuam_5 from '../images/sieuam-5.jpg'
import sieuamVideo from '../images/sieuam-video.mp4'
import silver from '../images/new3.jpg'
import silver_1 from '../images/silver-1.jpg'
import silver_2 from '../images/silver-2.jpg'
import silver_3 from '../images/silver-3.jpg'
import silver_4 from '../images/silver-4.jpg'
import silver_5 from '../images/silver-5.jpg'
import silver_6 from '../images/silver-6.jpg'
import silver_7 from '../images/silver-7.jpg'
import ab_1 from '../images/ab-1.jpg'
import ab_2 from '../images/ab-2.jpg'
import ab_3 from '../images/ab-3.jpg'
import ab_4 from '../images/ab-4.jpg'
import ab_5 from '../images/ab-5.jpg'
import ab_6 from '../images/ab-6.jpg'
import ab_7 from '../images/ab-7.jpg'
import ab_8 from '../images/ab-8.jpg'
import abVideo from '../images/ab-video.mp4'
import c819Video from '../images/c819-video.mp4'
import pet_1 from '../images/pet-1.jpg'
import pet_2 from '../images/pet-2.jpg'
import pet_3 from '../images/pet-3.jpg'
import pet_4 from '../images/pet-4.jpg'
import pet_5 from '../images/pet-5.jpg'
import pet_spray from '../images/pet-spray.jpg'
import pet_spray_2 from '../images/pet-spray-2.jpg'
import pet_spray_3 from '../images/pet-spray-3.jpg'
import pet_spray_4 from '../images/pet-spray-4.jpg'
import pet_spray_5 from '../images/pet-spray-5.jpg'
import petVideo from '../images/pet-video.mp4'
import fs03_main from '../images/fs03-main.jpg'
import fs03_1 from '../images/fs03-1.jpg'
import fs03_2 from '../images/fs03-2.jpg'
import fs03_3 from '../images/fs03-3.jpg'
import fs03_4 from '../images/fs03-4.jpg'
import fs03Video from '../images/fs03-video.mp4'
import badgeCongThucMoi from '../images/badge-cong-thuc-moi.png'
import pet_recovery_main from '../images/pet-recovery-main.jpg'
import pet_recovery_2 from '../images/pet-recovery-2.jpg'
import pet_recovery_3 from '../images/pet-recovery-3.jpg'
import pet_recovery_4 from '../images/pet-recovery-4.jpg'
import ultrasonic_5l_main from '../images/ultrasonic-5l-main.jpg'
import ultrasonic_5l_2 from '../images/ultrasonic-5l-2.jpg'
import ultrasonic_5l_3 from '../images/ultrasonic-5l-3.jpg'
import ultrasonic_5l_4 from '../images/ultrasonic-5l-4.jpg'
import pet_recovery_5 from '../images/pet-recovery-5.jpg'
import ultrasonic_5l_5 from '../images/ultrasonic-5l-5.jpg'
import ultrasonic_1l_main from '../images/ultrasonic-1l-main.jpg'
import ultrasonic_1l_2 from '../images/ultrasonic-1l-2.jpg'
import ultrasonic_1l_3 from '../images/ultrasonic-1l-3.jpg'
import silver_1l_main from '../images/silver-1l-main.jpg'
import silver_1l_2 from '../images/silver-1l-2.jpg'
import silver_1l_3 from '../images/silver-1l-3.jpg'
import silver_5l_main from '../images/silver-5l-main.jpg'
import silver_5l_2 from '../images/silver-5l-2.jpg'
import silver_5l_3 from '../images/silver-5l-3.jpg'
const families = [
  {
    code: 'DUNG DỊCH TẨY RỬA CÔNG NGHIỆP · GARAGE',
    accent: 'cyan',
    id: 'tay-rua-cong-nghiep',
    items: [
      {
        img: t889, alt: 'ICU T889 tẩy carbon động cơ', code: 'T889', name: 'Tẩy carbon động cơ', badge: 'bestseller',
        gallery: [t889_5, t889_6, t889_7, t889_8],
        video: t889Video,
        seo: 'Dung dịch tẩy carbon động cơ ICU T889 chuyên dụng cho hệ thống xả ô tô. Đánh bay cặn carbon tích tụ trên DPF, SCR, EGR, giúp tăng lực máy và giảm hao nhiên liệu. Tương thích chuẩn khí thải Euro 4, 5, 6.',
        claims: ['Đánh bay carbon – tăng lực máy', 'An toàn DPF · SCR · EGR', 'Chuẩn Euro 4 · 5 · 6'],
        use: 'Pha 1 chai (1 lít) với 40 lít nước sạch. Tháo đầu bộ lọc DPF, đổ dung dịch vào và ngâm 30 phút. Xả sạch dưới vòi nước chảy mạnh.',
        formula: 'Dung dịch kiềm tính chuyên dụng, an toàn cho hệ thống xúc tác DPF · SCR · EGR. Không chứa acid, không ăn mòn kim loại.',
      },
      {
        img: c268, alt: 'ICU C268 tẩy rửa sàn đa năng công nghiệp', code: 'C268', name: 'Tẩy rửa sàn đa năng', badge: 'pro',
        gallery: [c268_1, c268_2, c268_3, c268_4],
        video: c268Video,
        seo: 'ICU C268 dung dịch tẩy rửa sàn đa năng công nghiệp, gốc kiềm mạnh, loại bỏ dầu mỡ và ố vàng trên đá cẩm thạch, hoa cương, gạch men. Phù hợp nhà xưởng, xí nghiệp, gia dụng.',
        claims: ['Gốc kiềm mạnh – dầu mỡ, ố vàng', 'Đá cẩm thạch · hoa cương · gạch men'],
        use: 'Pha loãng theo độ bẩn: bẩn ít 1/30, trung bình 1/20, rất bẩn 1/10. Thấm 5–10 phút rồi lau sạch. Đeo găng tay và kính bảo hộ.',
        formula: 'Thành phần: MEG, trinatri phosphat, metasilicat natri, KOH, LAS. Không trộn với hóa chất khác.',
      },
      {
        img: c369, alt: 'ICU C369 tẩy rỉ sét chuyên dụng', code: 'C369', name: 'Tẩy rỉ sét chuyên dụng', badge: 'pro',
        gallery: [c369_1, c369_2, c369_3, c369_4],
        video: c369Video,
        seo: 'ICU C369 dung dịch tẩy rỉ sét chuyên dụng cho sắt thép. Công thức 1 thành phần, không ăn mòn thép, không ảnh hưởng bê tông cốt thép. Tiết kiệm thời gian và chi phí nhân công.',
        claims: ['Không ăn mòn thép', '1 thành phần – dễ dùng'],
        use: 'Thoa trực tiếp lên bề mặt rỉ sét, không cần pha. Lau sạch ngay khi rỉ đã tan. Không cần kỹ thuật chuyên môn.',
        formula: 'Công thức 1 thành phần, phản ứng nhanh với oxide sắt, không gây ăn mòn thép.',
      },
      {
        img: c368, alt: 'ICU C368 vệ sinh đa năng dàn lạnh máy giặt', code: 'C368', badge: 'new', name: 'Vệ sinh Máy Lạnh - Dàn Nóng - Lồng Máy Giặt',
        gallery: [c368_1, c368_2, c368_3, c368_4],
        video: c368Video,
        seo: 'ICU C368 dung dịch vệ sinh đa năng cho dàn lạnh, dàn nóng điều hòa và lồng máy giặt. Làm sạch, không acid, không ăn mòn. Đánh bay cặn canxi, khử mùi nấm mốc.',
        claims: ['Dàn lạnh · dàn nóng · máy giặt', 'Làm sạch · không acid'],
        use: 'Dàn lạnh/nóng: pha 1:1 đến 1:6. Lồng máy giặt: đổ 100–200 ml mỗi chu kỳ. Để 5–10 phút rồi xả sạch.',
        formula: 'Dung dịch gốc kiềm cao, không acid, an toàn cho nhôm và đồng. Làm sạch.',
      },
      {
        img: c686, alt: 'ICU C686 trợ hàn thiếc nhôm inox', code: 'C686', badge: 'new', name: 'Trợ hàn - Kim Loại',
        gallery: [c686_1, c686_2, c686_3, c686_4],
        video: c686Video,
        seo: 'ICU C686 dung dịch trợ hàn chuyên dụng cho thiếc, nhôm và inox. Tăng độ bám dính mối hàn, vệ sinh mối hàn điện tử. Dùng trực tiếp, không cần pha loãng.',
        claims: ['Tăng độ bám dính mối hàn', 'Thiếc · nhôm · inox', 'Vệ sinh mối hàn điện tử'],
        use: 'Dùng trực tiếp từ chai, áp dụng lên bề mặt trước khi hàn. Dung tích 20 ml.',
        formula: 'Dung dịch hỗ trợ hàn, tăng tính ướt và bám dính cho mối hàn thiếc, nhôm, inox.',
      },
    ],
  },
  {
    code: 'DUNG DỊCH TẨY BẨN CHUYÊN DỤNG CHO VÀNG · BẠC · ĐÁ QUÝ',
    accent: 'gold',
    id: 'vang-bac-da-quy',
    items: [
      {
        img: a889, alt: 'ICU A889 tẩy rửa trang sức vàng bạc đá quý', code: 'A889', badge: 'bestseller', name: 'Tẩy rửa trang sức',
        gallery: [ab_1, ab_2, ab_3, ab_4],
        video: abVideo,
        seo: 'ICU A889 dung dịch tẩy rửa trang sức chuyên dụng cho vàng, bạc, đá quý và kim cương. Sạch sáng tức thì, không hao mòn bề mặt. Hệ thống 2 dịch A + B, dung tích 250 ml.',
        claims: ['Sạch sáng – không hao mòn', 'Vàng · bạc · đá quý · kim cương'],
        use: 'Đổ dịch A, thêm dịch B đến khi phản ứng dừng. Ngâm 3 phút, rửa lại bằng nước sạch, lau khô bằng khăn mềm.',
        formula: 'Hệ thống 2 dịch A + B. Công thức dịu, không mài mòn, an toàn cho da tay.',
      },
      {
        img: b889, alt: 'ICU B889 tẩy rửa trang sức vết bẩn lâu ngày', code: 'B889', badge: 'pro', name: 'Tẩy rửa trang sức',
        gallery: [ab_1, ab_2, ab_3, ab_4],
        video: abVideo,
        seo: 'ICU B889 dung dịch tẩy rửa trang sức xử lý vết bẩn lâu ngày. Hệ thống 2 dịch A + B cho vàng, bạc, đá quý, kim cương. Sạch sáng, không hao mòn. Dung tích 200 ml.',
        claims: ['Xử lý vết bẩn lâu ngày', '2 dịch A + B'],
        use: 'Pha 1 nắp nước + 3 giọt dịch B. Lau bằng khăn sạch, rửa nước nóng, sấy khô.',
        formula: 'Dịch B đậm đặc, kết hợp dịch A tạo phản ứng làm sạch sâu. Không hao mòn kim loại và đá quý.',
      },
      {
        img: sieuam_1, alt: 'ICU Dung dịch siêu âm rửa trang sức vàng bạc đá quý', code: 'SIÊU ÂM', name: 'Rửa siêu âm', badge: 'new',
        gallery: [sieuam_2, sieuam_3, sieuam_4, sieuam_5],
        video: sieuamVideo,
        seo: 'ICU Dung dịch siêu âm 200ml chuyên dụng cho máy rửa siêu âm. Làm sạch sâu và sáng bóng vàng, bạc, đá quý, kim cương, đồng hồ, kính mắt trong 15-60 giây. Công thức an toàn, không hao mòn, bảo vệ trang sức.',
        claims: ['Sạch sâu - sáng như mới', 'An toàn cho vàng · bạc · đá quý · kim cương', 'Chỉ 15-60 giây mỗi mẻ'],
        use: 'Pha loãng dung dịch với nước theo tỷ lệ 1:5-90, đổ vào máy rửa siêu âm, ngâm trang sức 15-60 giây. Rửa lại nước sạch, lau khô.',
        formula: 'Dung dịch gốc nước, không dung môi, an toàn cho mọi loại trang sức và đá quý. Không gây hại da tay.',
      },
      {
        img: silver, alt: 'ICU C819 vệ sinh trang sức bạc nano xanh', code: 'C819', name: 'Vệ sinh bạc – Nano xanh',
        gallery: [silver_1, silver_2, silver_3, silver_4],
        video: c819Video,
        seo: 'ICU C819 dung dịch vệ sinh trang sức bạc Nano xanh chuyên dụng. Phục hồi độ sáng bạc, tẩy oxy hóa và ố đen. Phù hợp bạc 925 và sterling. Chai nhỏ gọn, dùng trực tiếp.',
        claims: ['Phục hồi độ sáng bạc', 'Tẩy oxy hóa, ố đen', 'Bạc 925 · sterling'],
        use: 'Nhúng trang sức bạc vào dung dịch. Để vài giây đến khi bạc sáng lại. Rửa nước sạch, lau khô.',
        formula: 'Dung dịch chuyên dụng cho bạc, loại bỏ sulfide bạc (ố đen) mà không mài mòn bề mặt.',
      },
      {
        img: ultrasonic_5l_main, alt: 'ICU dung dịch siêu âm rửa trang sức 5 lít vàng bạc đá quý kim cương', code: 'SIÊU ÂM 5L', name: 'Dung dịch siêu âm 5 lít', badge: 'pro',
        gallery: [ultrasonic_5l_2, ultrasonic_5l_3, ultrasonic_5l_4, ultrasonic_5l_5],
        video: '/ultrasonic-5l-video.mp4',
        seo: 'ICU dung dịch siêu âm chuyên dụng 5 lít cho máy rửa siêu âm trang sức. Làm sạch sâu vàng, bạc, đá quý, kim cương. Không gây hao mòn, an toàn cho da tay. Tiết kiệm chi phí, hiệu quả tối đa cho tiệm vàng.',
        claims: ['Không gây hao mòn – an toàn da tay', 'Vàng · bạc · đá quý · kim cương', 'Tiết kiệm chi phí – hiệu quả tối đa'],
        use: 'Đổ dung dịch vào máy siêu âm, phủ lấp bề mặt trang sức cần làm sáng. Chạy máy 15–30 giây rồi rửa lại bằng nước sạch, lau khô. Can 5 lít pha loãng, dùng nhiều lần.',
        formula: 'Dung dịch gốc nước chuyên dụng, không gây hao mòn, an toàn cho đá tự nhiên và da tay. Dung tích 5 lít.',
      },
      {
        img: ultrasonic_1l_main, alt: 'ICU dung dịch siêu âm rửa trang sức 1 lít vàng bạc đá quý kim cương', code: 'SIÊU ÂM 1L', name: 'Dung dịch siêu âm (1 lít)', badge: 'pro',
        gallery: [ultrasonic_1l_2, ultrasonic_1l_3],
        video: '/ultrasonic-1l-video.mp4',
        seo: 'ICU dung dịch siêu âm chuyên dụng 1 lít cho máy rửa siêu âm trang sức. Làm sạch sâu vàng, bạc, đá quý, kim cương. Không gây hao mòn, an toàn cho da tay. Tiết kiệm chi phí, hiệu quả tối đa.',
        claims: ['Không gây hao mòn – an toàn da tay', 'Vàng · bạc · đá quý · kim cương', 'Tiết kiệm chi phí – hiệu quả tối đa'],
        use: 'Đổ dung dịch vào máy siêu âm, phủ lấp bề mặt trang sức cần làm sáng. Chạy máy 15–90 giây rồi rửa lại bằng nước sạch, lau khô.',
        formula: 'Dung dịch gốc nước chuyên dụng, không gây hao mòn, an toàn cho đá tự nhiên và da tay. Dung tích 1 lít.',
      },
      {
        img: silver_1l_main, alt: 'ICU C819 vệ sinh bạc ố đen 1 lít phục hồi độ sáng trang sức', code: 'C819 1L', name: 'Vệ sinh bạc ố đen (1 Lít)', badge: 'pro',
        gallery: [silver_1l_2, silver_1l_3],
        video: '/silver-1l-video.mp4',
        seo: 'ICU C819 dung dịch vệ sinh trang sức bạc ố đen 1 lít. Ngâm 15–20 giây, bạc sáng lại tức thì, dùng được nhiều lần. Phục hồi độ sáng bạc 925, sterling. Dung tích 1 lít.',
        claims: ['Sạch bạc ố đen – hiệu quả tức thì', 'Dùng được nhiều lần', 'Bạc 925 · sterling'],
        use: 'Ngâm trang sức bạc bị xỉn màu 15–20 giây, rửa qua nước sạch rồi dùng khăn mềm lau khô. Dung tích 1 lít.',
        formula: 'Chất làm sạch anion, chất hoạt động bề mặt, hương liệu. Loại bỏ lớp ố đen trên bạc, không mài mòn bề mặt.',
      },
      {
        img: silver_5l_main, alt: 'ICU C819 vệ sinh bạc ố đen 5 lít phục hồi độ sáng trang sức', code: 'C819 5L', name: 'Vệ sinh bạc ố đen (5 Lít)', badge: 'pro',
        gallery: [silver_5l_2, silver_5l_3],
        video: '/silver-5l-video.mp4',
        seo: 'ICU C819 dung dịch vệ sinh trang sức bạc ố đen 5 lít. Ngâm 15–20 giây, bạc sáng lại tức thì, dùng được nhiều lần. Tiết kiệm chi phí cho tiệm vàng. Dung tích 5 lít.',
        claims: ['Sạch bạc ố đen – hiệu quả tức thì', 'Dùng được nhiều lần – tiết kiệm', 'Bạc 925 · sterling'],
        use: 'Ngâm trang sức bạc bị xỉn màu 15–20 giây, rửa qua nước sạch rồi dùng khăn mềm lau khô. Can 5 lít.',
        formula: 'Chất làm sạch anion, chất hoạt động bề mặt, hương liệu. Loại bỏ lớp ố đen trên bạc, không mài mòn bề mặt.',
      },
    ],
  },
  {
    code: 'FURRYSHINE PET · CLEAN BEAUTY & SCIENCE',
    id: 'furryshine',
    accent: 'mint',
    items: [
      {
        img: pet_1, alt: 'Furryshine Pet sữa tắm thú cưng giúp mượt lông hương cantaloup', code: 'FURRYSHINE', name: 'Sữa tắm thú cưng - Giúp Mượt Lông (Hương Cantaloup)', badge: 'bestseller',
        gallery: [pet_2, pet_3, pet_4, pet_5],
        video: petVideo,
        seo: 'Furryshine Pet sữa tắm thú cưng hương cantaloup (dưa lưới) thơm mát. Làm sạch dịu nhẹ da và lông chó mèo, giúp lông mềm mượt và lưu hương ngọt nhẹ. Thành phần lành tính, an toàn cho thú cưng.',
        claims: ['Hương cantaloup thơm mát', 'Làm sạch dịu nhẹ da lông', 'Lành tính, an toàn'],
        use: 'Pha 10 ml sản phẩm với 1 lít nước ấm. Làm ướt lông, massage nhẹ 3–5 phút, xả sạch lại bằng nước.',
        formula: 'Chiết xuất dưa cantaloupe, Aloe Vera, Glycerin thực vật. Không chứa SLS, paraben, cồn công nghiệp.',
      },
      {
        img: pet_2, alt: 'Furryshine Pet sữa tắm tràm trà', code: 'FURRYSHINE', name: 'Sữa tắm Tràm trà', badge: 'bestseller',
        gallery: [pet_1, pet_3, pet_4, pet_5],
        video: petVideo,
        seo: 'Furryshine Pet sữa tắm tinh dầu tràm trà, tự nhiên khử mùi hôi hiệu quả. An toàn cho da nhạy cảm, không gây kích ứng. Phù hợp chó mèo năng động.',
        claims: ['Tự nhiên khử mùi hôi', 'Làm sạch – khử mùi hôi', 'An toàn da nhạy cảm'],
        use: 'Pha 10 ml với 1 lít nước ấm, làm ướt lông, massage 3–5 phút, xả sạch.',
        formula: 'Tinh dầu tràm trà (tea tree oil), chiết xuất cúc la mã, Glycerin thực vật. Không paraben, không SLS.',
      },
      {
        img: fs03_main, alt: 'Furryshine Enzyme khử mùi nước tiểu thú cưng', code: 'FURRYSHINE', name: 'Enzyme Khử Mùi Nước Tiểu (Pet)', badge: 'bestseller',
        gallery: [fs03_1, fs03_2, fs03_3, fs03_4],
        video: fs03Video,
        seo: 'Furryshine Enzyme khử mùi nước tiểu, phân chó mèo bằng enzyme tự nhiên. An toàn cho thú cưng và gia đình. Dùng cho nền nhà, chuồng nuôi, khay vệ sinh, nệm thú cưng. Hương bạc hà tự nhiên, thân thiện môi trường.',
        claims: ['Khử mùi nước tiểu tận gốc', 'Enzyme tự nhiên - an toàn cho thú cưng', 'Nền nhà - chuồng - khay vệ sinh - nệm'],
        use: 'Xịt trực tiếp lên vùng cần xử lý, để 5-10 phút cho enzyme thấm sâu, lau sạch hoặc để khô tự nhiên. Lặp lại nếu mùi nặng.',
        formula: 'Enzyme sinh học tự nhiên, vi sinh có lợi, hương bạc hà. Không chứa hóa chất độc hại, phân hủy sinh học an toàn.',
      },
      {
        img: pet_spray, alt: 'Furryshine nước hoa thú cưng 2 in 1 cho chó mèo', code: 'FURRYSHINE', name: 'Nước hoa thú cưng 2 in 1', badge: 'new',
        gallery: [pet_spray_2, pet_spray_3, pet_spray_4, pet_spray_5],
        video: '/pet-perfume-video.mp4',
        seo: 'Furryshine nước hoa thú cưng 2 in 1 cho chó và mèo. Hương thơm dịu nhẹ lưu hương lâu dài, khử mùi hôi hiệu quả. Dưỡng lông mềm mượt, óng ả, giảm xơ rối. Thành phần lành tính, an toàn cho da nhạy cảm. Chai 150 ml.',
        claims: ['Hương thơm lưu lâu – khử mùi hôi', 'Mềm mượt, bóng lông', 'Lành tính, không kích ứng'],
        use: 'Làm sạch và lau khô lông thú cưng. Lắc đều chai, xịt trực tiếp lên lông cách 15–20 cm, massage nhẹ và chải lông để lông mềm mượt. Tránh xịt vào mắt, mũi, miệng.',
        formula: 'Chiết xuất hoa anh đào, chiết xuất lô hội, tinh dầu thiên nhiên. Không cồn, không paraben.',
      },
      {
        img: pet_5, alt: 'Furryshine Pet dung dịch vệ sinh tai', code: 'FURRYSHINE', name: 'Dung dịch vệ sinh tai', badge: 'new',
        gallery: [pet_1, pet_2, pet_3, pet_4],
        video: petVideo,
        seo: 'Furryshine Pet dung dịch vệ sinh tai chuyên dụng, làm sạch ráy tai. Dịu nhẹ, không cay, an toàn cho chó mèo. Dùng định kỳ 1–2 lần mỗi tuần.',
        claims: ['Làm sạch ráy tai', 'Làm sạch tai', 'Dịu nhẹ, không cay'],
        use: 'Nhỏ 3–5 giọt vào tai, massage gốc tai 30 giây, để thú cưng lắc đầu và lau sạch bên ngoài.',
        formula: 'Nước muối sinh lý, chiết xuất tràm trà, lô hội. Không cồn, không kháng sinh.',
      },
      {
        img: pet_3, alt: 'Furryshine Pet nước xả lông mềm mượt', code: 'FURRYSHINE', name: 'Nước xả lông mềm mượt',
        gallery: [pet_1, pet_2, pet_4, pet_5],
        video: petVideo,
        seo: 'Furryshine Pet nước xả lông chống rối, giúp lông bóng mượt và giảm rụng. Dưỡng chất thực vật nuôi dưỡng từ chân lông, hương thơm tự nhiên lưu hương nhẹ.',
        claims: ['Chống rối – bóng mượt', 'Giảm rụng lông', 'Hương tự nhiên'],
        use: 'Sau khi tắm, thoa đều lên lông ướt, massage 2–3 phút, xả sạch.',
        formula: 'Glycerin thực vật, chiết xuất cúc la mã, vitamin E. Không silicone, không paraben.',
      },
      {
        img: pet_recovery_main, alt: 'Furryshine sữa tắm thú cưng phục hồi da làm mềm mượt dưỡng lông', code: 'FURRYSHINE', name: 'Sữa tắm phục hồi da', badge: 'new',
        gallery: [pet_recovery_2, pet_recovery_3, pet_recovery_4, pet_recovery_5],
        video: '/pet-recovery-video.mp4',
        seo: 'Furryshine sữa tắm thú cưng phục hồi da 530ml. Làm sạch sâu dịu nhẹ, khử mùi hiệu quả. Phục hồi hư tổn, bảo vệ da khỏi khô rát và kích ứng, dưỡng lông mềm mượt bóng khỏe. Công thức 2 trong 1, chiết xuất tự nhiên lành tính, an toàn cho da nhạy cảm.',
        claims: ['Phục hồi hư tổn – bảo vệ da', 'Làm sạch sâu – khử mùi hiệu quả', 'Lông mềm mượt – bóng khỏe', 'Lành tính, an toàn da nhạy cảm'],
        use: 'Làm ướt lông thú cưng, thoa đều sữa tắm, massage nhẹ 3–5 phút rồi xả sạch. Dùng được cho chó mèo từ 6 tuần tuổi.',
        formula: 'Chiết xuất tự nhiên (lô hội, oải hương, hương thảo), Omega, vitamin và dưỡng chất. Công thức 2 trong 1, không chứa chất độc hại.',
      },
    ],
  },
]

function ProductCard({ p }) {
  const [tab, setTab] = useState('info')
  const [activeImg, setActiveImg] = useState(0)
  const tabs = [
    { id: 'info', label: 'Thông tin' },
    { id: 'use', label: 'Cách dùng' },
    { id: 'formula', label: 'Công thức' },
  ]
  const allThumbs = p.gallery ? [p.img, ...p.gallery] : [p.img]
  const showVideo = p.video && activeImg === -1
  const currentImg = activeImg >= 0 ? allThumbs[activeImg] : null
  return (
    <article className="product" key={p.name}>
      <img src={badgeCongThucMoi} alt="Công thức mới cải tiến" className="badge-img" loading="lazy" />
      <div className={`product-img${showVideo ? ' has-video' : ''}`}>
        {showVideo ? (
          <video src={p.video} controls autoPlay loop muted playsInline />
        ) : (
          <img src={currentImg || p.img} alt={p.alt} loading="lazy" />
        )}
        <div className="shine" aria-hidden="true" />
      </div>
      <div className="product-thumbs">
        {allThumbs.map((img, i) => (
          <button
            type="button"
            key={i}
            className={`thumb${activeImg === i ? ' active' : ''}`}
            onClick={() => setActiveImg(i)}
            aria-label={`Xem ảnh ${i + 1}`}
          >
            <img src={img} alt="" />
          </button>
        ))}
        {p.video && (
          <button
            type="button"
            aria-label="Xem video sản phẩm"
            className={`thumb video-thumb${activeImg === -1 ? ' active' : ''}`}
            onClick={() => setActiveImg(-1)}
            title="Video sản phẩm"
          >
              <span className="video-icon">▶</span>
          </button>
        )}
      </div>
      <div className="product-body">
        <div className="product-head">
          <span className={`code${p.code.length > 6 ? ' code-long' : ''}`}>{p.code}</span>
          <h4>{p.name}</h4>
        </div>
        <div className="product-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tab === 'info' && (
            <>
              <p className="product-seo">{p.seo}</p>
              <ul className="claims">
                {p.claims.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </>
          )}
          {tab === 'use' && <p className="product-use">{p.use}</p>}
          {tab === 'formula' && <p className="product-formula">{p.formula}</p>}
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  return (
    <section className="products" id="san-pham" data-od-id="products">
      <div className="wrap">
        {families.map((fam) => (
          <div className="family" key={fam.code} id={fam.id || undefined}>
            <div className="family-head">
              <p className={`family-code ${fam.accent}`}>{fam.code}</p>
            </div>
            <div className="product-grid">
              {fam.items.map((p) => <ProductCard key={p.code} p={p} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
