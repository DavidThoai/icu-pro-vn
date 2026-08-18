import { useState } from 'react'

const tabs = [
  {
    id: 'industrial',
    label: 'Industrial · Garage',
    specs: [
      {
        name: 'T889 — Tẩy carbon động cơ',
        who: 'T889',
        desc: 'Dung dịch kiềm tính chuyên dụng, thành phần hoạt động bề mặt phi ion + chất phân tán polymer. Phá vỡ cấu trúc carbon cứng đầu tích tụ trên DPF, SCR, EGR mà không làm hỏng lớp xúc tác gốm. Tương thích chuẩn khí thải Euro 4, 5, 6. Không chứa acid clohydric, không ăn mòn kim loại chịu nhiệt.',
        ph: 'pH 11.5–12.5',
        temp: 'Nhiệt độ vận hành: 20–60°C',
        ingredients: 'Chất hoạt động bề mặt phi ion, polymer phân tán, kiềm hữu cơ, dung môi glycol ether, nước tinh khiết.',
      },
      {
        name: 'C268 — Tẩy rửa sàn đa năng công nghiệp',
        who: 'C268',
        desc: 'Công thức gốc kiềm mạnh (KOH + metasilicat natri) kết hợp LAS (alkylbenzene sulfonate) để đánh tan dầu mỡ, ố vàng trên đá cẩm thạch, hoa cương, gạch men. MEG (monoethylene glycol) giúp dung dịch thấm sâu vào vi mạch bề mặt đá. Không dùng cho nhôm.',
        ph: 'pH 12.5–13.5',
        temp: 'Pha loãng 1/10–1/30 tùy độ bẩn',
        ingredients: 'MEG, trinatri phosphat, metasilicat natri, KOH, LAS, nước tinh khiết.',
      },
      {
        name: 'C369 — Tẩy rỉ sét chuyên dụng',
        who: 'C369',
        desc: 'Công thức 1 thành phần dựa trên axit hữu cơ (phosphoric acid) ở nồng độ tối ưu. Phản ứng chọn lọc với oxide sắt (Fe₂O₃, Fe₃O₄) mà không ăn mòn thép nền. Không ảnh hưởng độ bám dính của bê tông cốt thép. Có chất ức chế ăn mòn để bảo vệ bề mặt thép sạch.',
        ph: 'pH 1.5–2.5',
        temp: 'Phản ứng nhanh 2–5 phút',
        ingredients: 'Acid phosphoric, chất ức chế ăn mòn hữu cơ, chất thấm ướt, nước tinh khiết.',
      },
      {
        name: 'C368 — Vệ sinh Máy Lạnh - Dàn Nóng - Lồng Máy Giặt',
        who: 'C368',
        desc: 'Dung dịch gốc kiềm cao, không acid, an toàn cho nhôm và đồng. Kết hợp chất làm sạch (quaternary ammonium compound), hạn chế nấm mốc. Đánh bay cặn canxi (limescale) trên dàn lạnh, dàn nóng. Khử mùi nấm mốc bằng enzym phân giải.',
        ph: 'pH 10.5–11.5',
        temp: 'Pha 1:1 đến 1:6',
        ingredients: 'Kiềm hữu cơ, QAC (chất làm sạch), enzym phân giải, chất bám dính, nước tinh khiết.',
      },
      {
        name: 'C686 — Trợ hàn - Kim Loại',
        who: 'C686',
        desc: 'Dung dịch trợ hàn (flux) chuyên dụng cho thiếc, nhôm, inox. Chứa hoạt chất tăng tính ướt (wetting agent) và chất làm sạch bề mặt mối hàn. Loại bỏ oxide lớp mỏng trên bề mặt kim loại trước khi hàn, giúp mối hàn bám dính chắc. Dạng lỏng, dùng trực tiếp, có mũi kim chính xác.',
        ph: 'pH 2.0–3.0',
        temp: 'Dùng trực tiếp, 20 ml',
        ingredients: 'Zinc chloride, ammonium chloride, HCl (tối thiểu), chất hoạt động bề mặt, dung môi.',
      },
    ],
  },
  {
    id: 'jewelry',
    label: 'Vàng · Bạc · Đá Quý',
    specs: [
      {
        name: 'A889 — Tẩy rửa trang sức (Hệ A+B)',
        who: 'A889',
        desc: 'Hệ thống 2 dịch A + B. Dịch A là dung dịch làm sạch nhẹ, gốc nước, chứa chất hoạt động bề mặt không ion và chất tạo phức (chelating agent) để loại bỏ vết bẩn hữu cơ, mồ hôi, cặn xà phòng trên vàng, bạc, đá quý, kim cương. Dịch B là dung dịch phản ứng nhanh, chứa chất khử oxide nhẹ, kích hoạt khi kết hợp với dịch A tạo bọt phản ứng làm sạch sâu.',
        ph: 'pH 7.0–8.0 (dịch A), pH 8.5–9.5 (sau pha)',
        temp: 'Ngâm 3 phút ở nhiệt độ phòng',
        ingredients: 'Dịch A: chất hoạt động bề mặt phi ion, EDTA (chất tạo phức), nước tinh khiết. Dịch B: chất khử oxide nhẹ, carbonat natri, nước tinh khiết.',
      },
      {
        name: 'B889 — Tẩy rửa trang sức (Đậm đặc)',
        who: 'B889',
        desc: 'Dịch B đậm đặc, kết hợp dịch A tạo phản ứng làm sạch sâu cho vết bẩn lâu ngày. Pha 1 nắp nước + 3 giọt dịch B. Công thức không mài mòn (non-abrasive), an toàn cho mọi loại đá quý kể cả đá mềm (ngọc trai, opal) khi pha loãng đúng tỷ lệ.',
        ph: 'pH 9.0–10.0 (sau pha loãng)',
        temp: 'Rửa nước nóng 40–50°C sau khi ngâm',
        ingredients: 'Chất khử oxide, carbonat natri, metasilicat natri (tối thiểu), chất tạo phim bảo vệ, nước tinh khiết.',
      },
      {
        name: 'Siêu Âm — Dung dịch rửa siêu âm',
        who: 'SIÊU ÂM',
        desc: 'Dung dịch chuyên dụng cho máy rửa siêu âm. Công thức gốc nước, không dung môi, thiết kế hoạt động dưới tần số sóng siêu âm (40kHz). Chất hoạt động bề mặt giảm sức căng bề mặt giúp sóng siêu âm len lỏi vào khe hở nhỏ nhất trên trang sức. Cavitation bubble bung ra loại bỏ vết bẩn ở những nơi bàn chải không với tới.',
        ph: 'pH 7.5–8.5',
        temp: 'Chạy 15–30 giây mỗi mẻ, nhiệt độ phòng',
        ingredients: 'Chất hoạt động bề mặt phi ion (giảm sức căng bề mặt), chất tạo phức nhẹ, nước tinh khiết. Không dung môi, không acid.',
      },
      {
        name: 'C819 — Vệ sinh trang sức bạc (Nano xanh)',
        who: 'C819',
        desc: 'Dung dịch chuyên dụng cho bạc, loại bỏ sulfide bạc (Ag₂S) — nguyên nhân gây ố đen. Cơ chế phản ứng chọn lọc: chất thiourea derivative phản ứng với sulfide bạc, hòa tan lớp ố mà không mài mòn bề mặt bạc. Phục hồi độ sáng bạc 925, sterling. An toàn cho da tay.',
        ph: 'pH 8.0–9.0',
        temp: 'Nhúng 5–10 giây, nhiệt độ phòng',
        ingredients: 'Thiourea derivative, acid citric (tối thiểu), chất hoạt động bề mặt, nước tinh khiết.',
      },
    ],
  },
  {
    id: 'furryshine',
    label: 'Furryshine Pet',
    specs: [
      {
        name: 'FURRYSHINE - Sữa tắm thảo dược Yến mạch',
        who: 'FURRYSHINE',
        desc: 'Công thức organic chiết xuất yến mạch (oat extract) làm dịu da, giảm ngứa cho da nhạy cảm của chó mèo. Aloe Vera phục hồi da tổn thương, glycerin thực vật cấp ẩm sâu giữ lông mềm mượt. pH 7.2 cân bằng chuẩn da thú cưng, không kích ứng mắt.',
        ph: 'pH 7.2 (chuẩn da chó mèo)',
        temp: 'Pha 10 ml / 1 lít nước ấm',
        ingredients: 'Chiết xuất yến mạch, Aloe Vera, glycerin thực vật, chất tạo bọt tự nhiên (cocamidopropyl betaine), nước tinh khiết. Không SLS, không paraben, không cồn công nghiệp.',
      },
      {
        name: 'FURRYSHINE - Sữa tắm Tràm trà',
        who: 'FURRYSHINE',
        desc: 'Tinh dầu tràm trà (tea tree oil) tự nhiên khử mùi hôi hiệu quả. Chiết xuất cúc la mã làm dịu da nhạy cảm. An toàn cho chó mèo con, không gây kích ứng.',
        ph: 'pH 7.0–7.5',
        temp: 'Pha 10 ml / 1 lít nước ấm',
        ingredients: 'Tinh dầu tràm trà, chiết xuất cúc la mã, glycerin thực vật, chất tạo bọt tự nhiên, nước tinh khiết.',
      },
      {
        name: 'FURRYSHINE - Enzyme Khử Mùi Nước Tiểu (Pet)',
        who: 'FURRYSHINE',
        desc: 'Làm sạch bằng hợp chất amoni bậc 4 (QAC) nồng độ an toàn, không để lại hóa chất độc hại khi thú cưng liếm. Dùng cho sàn nhà, chuồng nuôi, khu vực ăn uống. Hương tràm trà dịu nhẹ.',
        ph: 'pH 7.5–8.5',
        temp: 'Pha 10 ml / 1 lít nước, không cần xả lại',
        ingredients: 'QAC (chất làm sạch), tinh dầu tràm trà, chất hoạt động bề mặt thực vật, nước tinh khiết.',
      },
      {
        name: 'FURRYSHINE - Xịt khử mùi lông',
        who: 'FURRYSHINE',
        desc: 'Khử mùi hôi giữa các lần tắm bằng chiết xuất hoa và yến mạch. Không cồn, không kích ứng da, an toàn cho thú cưng con. Hương hoa nhẹ nhàng, giúp lông thơm mát, mềm mượt mỗi ngày.',
        ph: 'pH 6.5–7.0',
        temp: 'Xịt trực tiếp từ 20 cm, không cần xả lại',
        ingredients: 'Chiết xuất hoa, chiết xuất yến mạch, nước tinh khiết, chất dưỡng ẩm thực vật. Không cồn.',
      },
      {
        name: 'FURRYSHINE - Dung dịch vệ sinh tai',
        who: 'FURRYSHINE',
        desc: 'Làm sạch ráy tai bằng nước muối sinh lý kết hợp tràm trà và lô hội. Dịu nhẹ, không cay, không cồn. Dùng định kỳ 1–2 lần/tuần giúp tai chó mèo luôn sạch và khỏe.',
        ph: 'pH 7.0–7.5',
        temp: 'Nhỏ 3–5 giọt, massage 30 giây, lau sạch',
        ingredients: 'Nước muối sinh lý, chiết xuất tràm trà, lô hội, chất làm dịu. Không cồn, không kháng sinh.',
      },
      {
        name: 'FURRYSHINE - Nước xả lông mềm mượt',
        who: 'FURRYSHINE',
        desc: 'Chống rối, giảm rụng lông nhờ glycerin thực vật, vitamin E và chiết xuất cúc la mã nuôi dưỡng từ chân lông. Không silicone, không paraben. Hương thơm tự nhiên lưu hương nhẹ.',
        ph: 'pH 6.8–7.2',
        temp: 'Sau khi tắm, massage 2–3 phút rồi xả sạch',
        ingredients: 'Glycerin thực vật, chiết xuất cúc la mã, vitamin E, chất dưỡng lông thực vật, nước tinh khiết.',
      },
    ],
  },
]

export default function Formula() {
  const [active, setActive] = useState('industrial')
  const current = tabs.find((t) => t.id === active)

  return (
    <section className="formula" id="cong-thuc" data-od-id="formula">
      <div className="wrap">
        <div className="formula-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`ftab${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="formula-grid">
          {current.specs.map((s) => (
            <div className="formula-card" key={s.name}>
              <div className="formula-card-head">
                <span className="formula-code">{s.who}</span>
                <h3>{s.name}</h3>
              </div>
              <p className="formula-desc">{s.desc}</p>
              <div className="formula-meta">
                <div className="fmeta-item">
                  <span className="fmeta-label">pH</span>
                  <span className="fmeta-value">{s.ph}</span>
                </div>
                <div className="fmeta-item">
                  <span className="fmeta-label">Ứng dụng</span>
                  <span className="fmeta-value">{s.temp}</span>
                </div>
              </div>
              <div className="formula-ingredients">
                <span className="fi-label">Thành phần</span>
                <p className="fi-text">{s.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
