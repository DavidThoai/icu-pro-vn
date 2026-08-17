// Cloudflare Pages Function: POST /api/contact -> Telegram Bot
export async function onRequestPost(context) {
  const { request, env } = context
  const token = env.TELEGRAM_BOT_TOKEN
  const chatId = env.TELEGRAM_CHAT_ID

  let body = {}
  try {
    body = await request.json()
  } catch (e) {
    body = {}
  }

  if (!token || !chatId) {
    return new Response(
      JSON.stringify({ ok: false, error: 'not_configured' }),
      { status: 503, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    )
  }

  const name = (body.name || '').toString().trim()
  const phone = (body.phone || '').toString().trim()
  const needLabel = (body.needLabel || '').toString().trim()

  const text = [
    '\u{1F4E8} Tin nh\u1EAFn m\u1EDBi t\u1EEB website icu.pro.vn',
    '',
    `\u{1F464} H\u1ECD t\u00EAn: ${name}`,
    `\u{1F4DE} S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: ${phone}`,
    `\u{1F4CB} M\u1EE5c c\u1EA7n t\u01B0 v\u1EA5n: ${needLabel}`,
  ].join('\n')

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    })
    const data = await tg.json()
    if (data && data.ok) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      })
    }
    return new Response(
      JSON.stringify({ ok: false, error: 'telegram_error', detail: data }),
      { status: 502, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    )
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, error: 'fetch_error' }),
      { status: 502, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    )
  }
}
