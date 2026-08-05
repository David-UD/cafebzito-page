import { useEffect, useRef } from "react"

let sdkPromise = null

function loadFBSdk() {
  if (sdkPromise) return sdkPromise
  sdkPromise = new Promise((resolve) => {
    window.fbAsyncInit = function () {
      window.FB.init({ xfbml: true, version: "v22.0" })
      resolve()
    }
    const js = document.createElement("script")
    js.id = "facebook-jssdk"
    js.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v22.0"
    js.async = true
    js.defer = true
    js.crossOrigin = "anonymous"
    js.onload = () => { if (window.FB) resolve() }
    js.onerror = () => resolve()
    document.body.appendChild(js)
  })
  return sdkPromise
}

export default function FacebookSection() {
  const ref = useRef(null)
  const parsed = useRef(false)

  useEffect(() => {
    loadFBSdk().then(() => {
      const parse = () => {
        if (parsed.current) return
        if (window.FB && ref.current) {
          window.FB.XFBML.parse(ref.current)
          parsed.current = true
        } else {
          setTimeout(parse, 500)
        }
      }
      parse()
    })
  }, [])

  return (
    <section id="facebook" ref={ref} className="container py-16 sm:py-20 scroll-mt-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Facebook</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Síguenos en Facebook
        </h2>
      </div>
      <div className="flex justify-center items-center px-4 sm:px-0">
        <div className="w-full max-w-[500px] sm:max-w-[400px]">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/CafebzitoCampeche"
            data-tabs="timeline"
            data-width="450"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/CafebzitoCampeche" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/CafebzitoCampeche">CafebzitoCampeche</a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}