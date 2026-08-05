function loadFBSdk() {
  if (document.getElementById("facebook-jssdk")) return Promise.resolve()
  return new Promise((resolve) => {
    const js = document.createElement("script")
    js.id = "facebook-jssdk"
    js.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v22.0"
    js.async = true
    js.defer = true
    js.crossOrigin = "anonymous"
    js.onload = resolve
    document.body.appendChild(js)
  })
}

window.loadFBSdk = loadFBSdk
