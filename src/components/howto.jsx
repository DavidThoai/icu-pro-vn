const uses = [
  {
    code: 'T889',
    what: 'Tẩy carbon động cơ',
    how: 'Pha 1 chai với 40 lít nước sạch, tháo đầu bộ lọc DPF rồi đổ dung dịch vào',
    time: 'Ngâm 30 phút',
    note: 'Xả sạch dưới vòi nước chảy mạnh sau khi ngâm',
  },
  {
    code: 'C268',
    what: 'Tẩy rửa sàn đa năng công nghiệp',
    how: 'Pha loãng theo độ bẩn: bẩn ít 1/30 · trung bình 1/20 · rất bẩn 1/10',
    time: 'Thấm 5–10 phút',
    note: 'Đeo găng tay & kính bảo hộ; không trộn với hóa chất khác',
  },
  {
    code: 'C369',
    what: 'Tẩy rỉ sét chuyên dụng',
    how: 'Thoa trực tiếp lên bề mặt rỉ sét, không cần pha',
    time: 'Phản ứng nhanh',
    note: 'Lau sạch ngay khi rỉ đã tan',
  },
  {
    code: 'C368',
    what: 'Vệ sinh dàn lạnh – dàn nóng & lồng máy giặt',
    how: 'Dàn lạnh/nóng: pha 1:1–1:6 · lồng máy giặt: đổ thẳng 100–200 ml mỗi chu trình',
    time: '5–10 phút',
    note: 'Không acid – không ăn mòn',
  },
  {
    code: 'A889 · B889',
    what: 'Tẩy rửa trang sức',
    how: 'Đổ dịch A, thêm dịch B đến khi phản ứng dừng',
    time: 'Chờ 3 phút',
    note: 'Rửa lại bằng nước sạch, lau khô bằng khăn mềm',
  },
  {
    code: 'SIÊU ÂM',
    what: 'Rửa trang sức bằng máy siêu âm',
    how: 'Đổ dung dịch phủ lấp bề mặt trang sức trong máy siêu âm',
    time: '15–30 giây',
    note: 'Rửa lại bằng nước sạch, sấy khô',
  },
]

export default function HowTo() {
  return (
    <section className="howto" id="cach-dung" data-od-id="usage">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">Hướng dẫn sử dụng</p>
          <h2>
            Đúng liều lượng. <em>Đúng hiệu quả.</em>
          </h2>
          <p>Cách dùng và tỷ lệ pha loãng theo đúng hướng dẫn trên nhãn sản phẩm.</p>
        </div>

        <div className="usage-table" role="table" aria-label="Hướng dẫn sử dụng từng sản phẩm">
          <div className="usage-row usage-head" role="row">
            <span role="columnheader">Sản phẩm</span>
            <span role="columnheader">Cách dùng</span>
            <span role="columnheader">Thời gian</span>
            <span role="columnheader">Lưu ý</span>
          </div>
          {uses.map((u) => (
            <div className="usage-row" role="row" key={u.code}>
              <span className="u-code" role="cell">
                <strong>{u.code}</strong>
                <em>{u.what}</em>
              </span>
              <span role="cell">{u.how}</span>
              <span className="u-time" role="cell">
                {u.time}
              </span>
              <span className="u-note" role="cell">
                {u.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
