import { useState } from 'react'
import pet_1 from '../images/pet-1.jpg'
import pet_2 from '../images/pet-2.jpg'
import pet_3 from '../images/pet-3.jpg'
import pet_4 from '../images/pet-4.jpg'
import pet_5 from '../images/pet-5.jpg'
import petVideo from '../images/pet-video.mp4'

const ingredients = [
  { name: 'Chiết xuất yến mạch', icon: '🌾', desc: 'Làm dịu da, giảm ngứa, dưỡng ẩm tự nhiên cho da nhạy cảm của chó mèo.' },
  { name: 'Tinh dầu tràm trà', icon: '🌿', desc: 'Kháng khuẩn tự nhiên, diệt nấm, khử mùi hôi hiệu quả mà không gây kích ứng.' },
  { name: 'Aloe Vera', icon: '🩹', desc: 'Phục hồi da tổn thương, làm mát, chống viêm tự nhiên.' },
  { name: 'Glycerin thực vật', icon: '💧', desc: 'Cấp ẩm sâu, giữ lông mềm mượt không bị khô xơ.' },
  { name: 'Chiết xuất cúc la mã', icon: '🌼', desc: 'Kháng viêm, làm dịu da nhạy cảm, an toàn cho thú cưng con.' },
  { name: 'pH 7.2', icon: '⚖️', desc: 'Cân bằng pH chuẩn da chó mèo, không gây khô da hay kích ứng mắt.' },
]

const steps = [
  { num: '1', title: 'Làm ướt / Pha loãng', desc: 'Pha 10 ml sản phẩm với 1 lít nước ấm. Làm ướt lông thú cưng hoặc sàn nhà.' },
  { num: '2', title: 'Massage / Lau chùi', desc: 'Massage nhẹ nhàng theo chiều lông 3–5 phút. Lau sàn bằng khăn sạch.' },
  { num: '3', title: 'Xả sạch', desc: 'Xả lại bằng nước sạch. Lông mềm mượt, sàn sạch khuẩn, mùi hương tự nhiên.' },
]

const reviews = [
  { name: 'Minh Anh', pet: 'Poodle · 3 tuổi', text: 'Boss hết hôi sau 2 lần tắm. Lông mềm không bị xơ, mùi tràm trà dễ chịu.', before: 'Lông rối, có mùi', after: 'Lông mềm, sạch khuẩn' },
  { name: 'Trần Hoàng', pet: 'Mèo Anh lông ngắn · 2 tuổi', text: 'Sàn nhà sạch không để lại hóa chất, mèo liếm an toàn. Rất yên tâm.', before: 'Sàn có vết ố, mùi', after: 'Sàn sạch, khử mùi 99%' },
  { name: 'Lê Thy', pet: 'Corgi · 4 tuổi', text: 'Tắm xong da boss không đỏ, không ngứa. Sẽ mua định kỳ.', before: 'Da khô, ngứa', after: 'Da khỏe, lông bóng' },
]

export default function PetCare() {
  const [hovered, setHovered] = useState(null)
  const [media, setMedia] = useState(0)
  const petThumbs = [pet_1, pet_2, pet_3, pet_4, pet_5]
  const showPetVideo = media === -1

  return (
    <section className="petcare" id="pet-care" data-od-id="petcare">
      {/* Section header */}
      <div className="wrap petcare-intro">
        <p className="eyebrow petcare-eyebrow">Furryshine Pet · Clean Beauty & Science</p>
        <h2 className="petcare-title">Furryshine Pet — Dòng sản phẩm chăm sóc thú cưng</h2>
        <p className="petcare-desc">
          Sạch sẽ — Yêu thương — Khoa học. Công thức organic an toàn cho chó mèo,
          pH 7.2 cân bằng da thú cưng, không kích ứng mắt.
        </p>
      </div>

      {/* Khối 1: Hero Block — Sản phẩm nổi bật */}
      <div className="wrap petcare-hero-block">
        <div className="petcare-album">
          <div className="petcare-album-main petcare-product-shot">
            <span className="petcare-badge">Sắp ra mắt</span>
            {showPetVideo ? (
              <video src={petVideo} controls autoPlay loop muted={false} playsInline className="petcare-media" />
            ) : (
              <img src={petThumbs[media]} alt="Furryshine Pet sữa tắm chó mèo" className="petcare-media" loading="lazy" />
            )}
          </div>
          <div className="petcare-thumbs">
            {petThumbs.map((t, i) => (
              <button key={i} className={`petcare-thumb${media === i ? ' active' : ''}`} onClick={() => setMedia(i)} aria-label={`Ảnh sản phẩm ${i + 1}`}>
                <img src={t} alt="" loading="lazy" />
              </button>
            ))}
            <button className={`petcare-thumb petcare-thumb-video${media === -1 ? ' active' : ''}`} onClick={() => setMedia(-1)} aria-label="Xem video sản phẩm">
              <span className="petcare-play">▶</span>
            </button>
          </div>
        </div>
        <div className="petcare-buy">
          <h3>Furryshine Pet — Sữa tắm & Tẩy rửa an toàn</h3>
          <p className="petcare-price">Liên hệ để được tư vấn sản phẩm ưu đãi</p>
          <div className="petcare-actions">
            <a href="#lien-he" className="btn btn-petcare">Mua ngay</a>
            <a href="#lien-he" className="btn btn-petcare-sub">Đăng ký giao định kỳ −10%</a>
          </div>
          <ul className="petcare-quick-info">
            <li>100% Organic</li>
            <li>pH 7.2 — chuẩn da chó mèo</li>
            <li>Không kích ứng mắt</li>
          </ul>
        </div>
      </div>

      {/* Khối 2: Thành phần khoa học */}
      <div className="wrap petcare-section">
        <div className="petcare-section-head">
          <h3>The Science of Ingredients</h3>
          <p>Di chuột vào từng thành phần để xem công dụng chi tiết.</p>
        </div>
        <div className="petcare-ingredients">
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              className={`petcare-ing-card${hovered === i ? ' flipped' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="petcare-ing-front">
                <span className="petcare-ing-icon">{ing.icon}</span>
                <span className="petcare-ing-name">{ing.name}</span>
              </div>
              <div className="petcare-ing-back">
                <p>{ing.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Khối 3: Hướng dẫn sử dụng 3 bước */}
      <div className="wrap petcare-section">
        <div className="petcare-section-head">
          <h3>Hướng dẫn sử dụng</h3>
          <p>Đơn giản 3 bước — an toàn cho cả boss và người dùng.</p>
        </div>
        <div className="petcare-steps">
          {steps.map((s) => (
            <div key={s.num} className="petcare-step">
              <span className="petcare-step-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Khối 4: Cơ chế tác động */}
      <div className="wrap petcare-section">
        <div className="petcare-section-head">
          <h3>Cơ chế tác động</h3>
          <p>So sánh trước và sau khi sử dụng.</p>
        </div>
        <div className="petcare-mechanism">
          <div className="petcare-mech-card before">
            <span className="petcare-mech-label">Trước</span>
            <p>Da chứa vi khuẩn, nấm mốc, mùi hôi. Lông rối, khô xơ.</p>
          </div>
          <span className="petcare-mech-arrow">→</span>
          <div className="petcare-mech-card after">
            <span className="petcare-mech-label">Sau</span>
            <p>Sạch khuẩn 99%, màng bảo vệ tự nhiên. Lông mềm mượt, da khỏe mạnh.</p>
          </div>
        </div>
      </div>

      {/* Khối 5: Đánh giá thực tế */}
      <div className="wrap petcare-section">
        <div className="petcare-section-head">
          <h3>Đánh giá thực tế</h3>
          <p>Khách hàng đã dùng — Before & After.</p>
        </div>
        <div className="petcare-reviews">
          {reviews.map((r) => (
            <div key={r.name} className="petcare-review">
              <div className="petcare-review-head">
                <strong>{r.name}</strong>
                <span>{r.pet}</span>
              </div>
              <p className="petcare-review-text">"{r.text}"</p>
              <div className="petcare-ba">
                <span className="ba-before">{r.before}</span>
                <span className="ba-arrow">→</span>
                <span className="ba-after">{r.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
