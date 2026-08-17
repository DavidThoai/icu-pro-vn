// Redirect www.icu.pro.vn -> icu.pro.vn (301) at the edge.
export async function onRequest(context) {
  const url = new URL(context.request.url)
  if (url.hostname.toLowerCase() === 'www.icu.pro.vn') {
    url.hostname = 'icu.pro.vn'
    return Response.redirect(url.toString(), 301)
  }
  return context.next()
}
