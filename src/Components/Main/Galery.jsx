import img1 from '../../Images/portada-galeria1.jpg'
import img2 from '../../Images/portada-galeria2.jpg'
import img3 from '../../Images/portada-galeria3.jpg'
import img4 from '../../Images/portada-galeria4.jpg'
import img5 from '../../Images/portada-galeria5.jpg'
import img6 from '../../Images/portada-galeria6.jpg'
import img7 from '../../Images/portada-galeria7.jpg'

export default function Galeria() {
    return (
      <div className="relative overflow-hidden bg-white my-20" id="galeria">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-Raleway tracking-tight text-gray-900 sm:text-6xl -m-1">
                Descubre la belleza del mundo
              </h1>
              <p className="mt-4 text-lg text-gray-500 font-Nunito">
                Explora nuestra galería de imágenes. Sumérgete en paisajes impresionantes, culturas fascinantes y experiencias inolvidables que te inspirarán a planificar tu próxima aventura.
              </p>
            </div>
            <div>
              <div className="mt-10 -m-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-1 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={img1}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img4}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img5}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img6}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img7}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/galeria"
                  className="inline-block rounded-md border border-transparent bg-secondary3 px-8 py-3 text-center font-medium text-white hover:bg-secondary2 ml-10"
                >
                  Ir a Galeria
                </a>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  