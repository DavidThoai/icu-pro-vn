import { useEffect, useRef, useState } from 'react'

const PHONE_RE = /^(0|\+84)\d{9}$/

const NEED_LABELS = {
  family: 'Cần Tư Vấn Sản Phẩm ICU & Furryshine',
  garage: 'Gara - Vệ Sinh Công Nghiệp - Nhà Bán Lẻ',
  distributor: 'Đối Tác & Nhà Phân Phối',
  business: 'Affiliate (tiếp thị liên kết) KOL & KOC',
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', need: 'family' })
  const [touched, setTouched] = useState({ name: false, phone: false })
  const [submitTried, setSubmitTried] = useState(false)
  const [sent, setSent] = useState(false)
  const [delivery, setDelivery] = useState('mail') // 'mail' | 'telegram'
  const summaryRef = useRef(null)

  const nameError = values.name.trim().length < 2 ? 'Vui lòng nhập họ tên — tối thiểu 2 ký tự.' : ''
  const phoneError = !PHONE_RE.test(values.phone.trim())
    ? 'Số điện thoại chưa đúng — ví dụ: 0912 345 678 hoặc +84 912 345 678.'
    : ''
  const hasErrors = Boolean(nameError || phoneError)
  const mailtoUrl = `mailto:danghanco.ltd.hcm@gmail.com?subject=${encodeURIComponent('Tư vấn sản phẩm ICU — ' + values.name.trim())}&body=${encodeURIComponent('Họ tên: ' + values.name.trim() + '\nSố điện thoại: ' + values.phone.trim() + '\nMục cần tư vấn: ' + NEED_LABELS[values.need] + '\n\n(Gửi từ trang web icu.pro.vn)')}`

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

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitTried(true)
    if (hasErrors) return

    let telegramOk = false
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          need: values.need,
          needLabel: NEED_LABELS[values.need],
        }),
      })
      const ct = res.headers.get('content-type') || ''
      if (ct.includes('application/json')) {
        const data = await res.json()
        telegramOk = Boolean(data && data.ok === true)
      }
    } catch (err) {
      telegramOk = false
    }

    if (telegramOk) {
      setDelivery('telegram')
    } else {
      setDelivery('mail')
    }
    setSent(true)
    if (!telegramOk) {
      setTimeout(() => { window.location.href = mailtoUrl }, 300)
    }
  }

  return (
    <section className="contact" id="lien-he" data-od-id="contact">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Liên hệ</p>
          <h2>
            Tư Vấn Nhanh <em>24/7</em>
          </h2>
          <p className="lede">Gửi yêu cầu hỗ trợ đến ICU để nhận thông tin giải pháp phù hợp với nhu cầu của bạn. Đội ngũ ICU chúng tôi sẽ phản hồi sớm nhất.</p>
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
            <li>
              <span>Email</span>
              <a href="mailto:danghanco.ltd.hcm@gmail.com">danghanco.ltd.hcm@gmail.com</a>
            </li>
          </ul>

          
        </div>

        <div className="form-card">
          {sent ? (
            <div className="form-success" role="status">
              {delivery === 'telegram' ? (
                <>
                  <p className="ok-title">Đã gửi thành công!</p>
                  <p>
                    Cảm ơn {values.name.trim()}! Thông tin của bạn đã được gửi tới ICU.
                    Đội ngũ ICU sẽ liên hệ lại với bạn trong thời gian sớm nhất. Bạn cũng
                    có thể liên hệ nhanh qua Zalo hoặc điện thoại bên dưới:
                  </p>
                </>
              ) : (
                <>
                  <p className="ok-title">Hoàn tất — thông tin đã được soạn sẵn</p>
                  <p>
                    Cảm ơn {values.name.trim()}! Ứng dụng email của bạn đã được mở với nội
                    dung soạn sẵn — chỉ cần bấm Gửi là ICU nhận được ngay. Bạn cũng có thể
                    liên hệ nhanh qua Zalo hoặc điện thoại bên dưới:
                  </p>
                </>
              )}
              {delivery !== 'telegram' && (
                <a className="btn btn-accent btn-block" href={mailtoUrl}>
                  Gửi lại qua Email (soạn sẵn nội dung)
                </a>
              )}
              <a
                className="btn btn-block btn-zalo"
                href="https://zalo.me/0918051655"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nhắn Zalo: 0918 051 655
              </a>
              <a className="btn btn-block btn-phone" href="tel:0788535659">
                Gọi ngay: 0788 53 56 59
              </a>
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
                <label htmlFor="f-need">Chọn Mục Tuỳ Chỉnh</label>
                <select id="f-need" name="need" value={values.need} onChange={set('need')}>
                  <option value="family">Cần Tư Vấn Sản Phẩm ICU & Furryshine</option>
                  <option value="garage">Gara - Vệ Sinh Công Nghiệp - Nhà Bán Lẻ</option>
                  <option value="distributor">Đối Tác & Nhà Phân Phối</option>
                  <option value="business">Affiliate (tiếp thị liên kết) KOL & KOC</option>
                </select>
              </div>

              <button type="submit" className="btn btn-accent btn-block btn-send">
                GỬI THÔNG TIN CHO ICU
              </button>
              <p className="form-note">Bấm gửi — thông tin sẽ được soạn sẵn vào email gửi tới ICU. Bạn cũng có thể nhắn Zalo hoặc gọi trực tiếp.</p>
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
