import { useEffect, useRef, useState } from 'react'

const PHONE_RE = /^(0|\+84)\d{9}$/

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', need: 'family' })
  const [touched, setTouched] = useState({ name: false, phone: false })
  const [submitTried, setSubmitTried] = useState(false)
  const [sent, setSent] = useState(false)
  const summaryRef = useRef(null)

  const nameError = values.name.trim().length < 2 ? 'Vui lòng nhập họ tên — tối thiểu 2 ký tự.' : ''
  const phoneError = !PHONE_RE.test(values.phone.trim())
    ? 'Số điện thoại chưa đúng — ví dụ: 0912 345 678 hoặc +84 912 345 678.'
    : ''
  const hasErrors = Boolean(nameError || phoneError)

  // Errors appear only after the field is blurred (or submit is attempted),
  // and clear immediately once the value becomes valid again.
  const show = (field) => (touched[field] || submitTried) && (field === 'name' ? nameError : phoneError)

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }))
  const blur = (field) => () => setTouched((t) => ({ ...t, [field]: true }))

  useEffect(() => {
    if (submitTried && hasErrors && summaryRef.current) {
      summaryRef.current.focus()
    }
  }, [submitTried, hasErrors])

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitTried(true)
    if (!hasErrors) setSent(true)
  }

  return (
    <section className="contact" id="lien-he" data-od-id="contact">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Liên hệ</p>
          <h2>
            Nhận tư vấn <em>&amp; báo giá</em>
          </h2>
          <p className="lede">Hộ gia đình, gara, nhà bán lẻ hay đối tác phân phối — để lại thông tin, đội ngũ ICU sẽ liên hệ lại với bạn trong giờ làm việc.</p>
          <ul className="contact-info">
            <li>
              <span>Điện thoại</span>
              <a href="tel:0788535659">0788 53 56 59</a>
            </li>
            <li>
              <span>Zalo</span>
              <a href="https://zalo.me/0918051655">0918 051 655</a>
            </li>
            <li>
              <span>Website</span>
              <a href="https://www.icu.pro.vn">www.icu.pro.vn</a>
            </li>
            <li>
              <span>Văn Phòng Cty</span>
              <p>97A Nguyễn Thị Thơi, P. Tân Thới Hiệp, TP. HCM</p>
            </li>
            <li>
              <span>Xưởng Sản Xuất</span>
              <p>Liên hệ: 0788 53 56 59</p>
            </li>
          </ul>

          
        </div>

        <div className="form-card">
          {sent ? (
            <div className="form-success" role="status">
              <p className="ok-title">Đã nhận yêu cầu của bạn.</p>
              <p>
                Cảm ơn {values.name.trim()}! ICU sẽ liên hệ lại trong giờ làm việc.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              {submitTried && hasErrors && (
                <div className="error-summary" tabIndex={-1} ref={summaryRef}>
                  <h3>Còn {[nameError, phoneError].filter(Boolean).length} thông tin cần kiểm tra</h3>
                  <ul>
                    {nameError && (
                      <li>
                        <a href="#f-name">Họ tên — {nameError}</a>
                      </li>
                    )}
                    {phoneError && (
                      <li>
                        <a href="#f-phone">Số điện thoại — {phoneError}</a>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              <div className="field">
                <label htmlFor="f-name">Họ tên</label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  placeholder="Nguyễn Văn A"
                  value={values.name}
                  onChange={set('name')}
                  onBlur={blur('name')}
                  aria-invalid={show('name')}
                  aria-describedby={show('name') ? 'f-name-err' : undefined}
                />
                {show('name') && (
                  <p className="field-err" id="f-name-err" role="alert">
                    {nameError}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="f-phone">Số điện thoại</label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  pattern="(0|\+84)\d{9}"
                  placeholder="0912 345 678"
                  value={values.phone}
                  onChange={set('phone')}
                  onBlur={blur('phone')}
                  aria-invalid={show('phone')}
                  aria-describedby={show('phone') ? 'f-phone-err' : undefined}
                />
                {show('phone') && (
                  <p className="field-err" id="f-phone-err" role="alert">
                    {phoneError}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="f-need">Bạn là</label>
                <select id="f-need" name="need" value={values.need} onChange={set('need')}>
                  <option value="family">Sử dụng gia đình</option>
                  <option value="garage">Gara - Vệ Sinh Công Nghiệp - Nhà Bán Lẻ</option>
                  <option value="distributor">Đối Tác & Nhà Phân Phối</option>
                  <option value="business">Affiliate (tiếp thị liên kết) KOL & KOC</option>
                </select>
              </div>

              <button type="submit" className="btn btn-accent btn-block btn-send">
                GỬI YÊU CẦU
              </button>
              <p className="form-note">LIÊN HỆ NGAY ĐỂ NHẬN CHÍNH SÁCH ƯU ĐÃI HÔM NAY.</p>
            </form>
          )}
        </div>

        <div className="contact-map">
          <iframe
            title="Bản đồ văn phòng ICU"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919!2d106.6405616!3d10.8743401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295bc3c25b7d:0x220ead6dee25db6a!2zQ8O0bmcgVHkgVE5ISCBTWCAmIFRNIMSQ4bq2TkcgSMOCTg==!5e0!3m2!1svi!2s!4v1786772487"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
