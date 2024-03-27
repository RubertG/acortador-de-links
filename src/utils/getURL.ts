export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Establezca esto en la URL de su sitio en el .env
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Establecida automáticamente por Vercel.
    'http://localhost:3000/'
  // Asegúrate de incluir `https://` cuando no sea localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Asegúrate de incluir un `/` final.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}
