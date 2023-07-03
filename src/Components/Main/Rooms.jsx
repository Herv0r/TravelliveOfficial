import Oferta1 from "../../Images/Oferta1.webp";
import Oferta2 from "../../Images/Oferta2.webp";
import Oferta3 from "../../Images/Oferta3.webp";
import Oferta4 from "../../Images/Oferta4.webp";
import Oferta5 from "../../Images/Oferta5.webp";
import Oferta6 from "../../Images/Oferta6.webp";
import Oferta7 from "../../Images/Oferta7.webp";
import Oferta8 from "../../Images/Oferta8.webp";
import Oferta9 from "../../Images/Oferta9.webp";
import Oferta10 from "../../Images/Oferta10.webp";
import Oferta11 from "../../Images/Oferta11.webp";
import Oferta12 from "../../Images/Oferta12.webp";
import Oferta13 from "../../Images/Oferta13.webp";
import Oferta14 from "../../Images/Oferta14.webp";
import Oferta15 from "../../Images/Oferta15.webp";
import Oferta16 from "../../Images/Oferta16.webp";
import Oferta17 from "../../Images/Oferta17.webp";
import Oferta18 from "../../Images/Oferta18.webp";
import Oferta19 from "../../Images/Oferta19.webp";
import Oferta20 from "../../Images/Oferta20.webp";

const products = [
  {
    id: 1,
    name: "Cotia, Brasil",
    description: "Quedate en el alojamiento de Roberta",
    fecha: "29 de may. al 3 de jun.",
    href: "https://www.airbnb.com.ar/rooms/31508919?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-07-02&check_out=2023-07-07&source_impression_id=p3_1688142938_ydjgMY3m8HAZN1zd&previous_page_section_name=1000&federated_search_id=503aa149-bd89-47e1-8e81-1853031f5b9f",
    price: "$12.650 ARS noche",
    imageSrc: Oferta1,
  },
  {
    id: 2,
    name: "Otawwa, Canada",
    description: "Quedate en el alojamiento de Ana",
    fecha: "20 al 27 de jul.",
    href: "https://www.airbnb.com.ar/rooms/635437605163910390?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-07-07&check_out=2023-07-13&source_impression_id=p3_1688143369_%2FNjW2VnUzdN0BWjK&previous_page_section_name=1000&federated_search_id=e2cb0cdc-9d3f-41f9-a26e-74243933cd25",
    price: "$10.287 ARS noche",
    imageSrc: Oferta2,
  },
  {
    id: 3,
    name: "Lyon, Francia",
    description: "Quedate en el alojamiento de Eduoard",
    fecha: "31 de jul. al 5 de ago.",
    href: "https://www.airbnb.com.ar/rooms/742424658135898180?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-07-16&check_out=2023-07-21&source_impression_id=p3_1688143444_%2F7wQKsKCZ2aLwARc&previous_page_section_name=1000&federated_search_id=1cb9f5d6-9245-414d-96fa-23cc63b15015",
    price: "$18.982 ARS noche",
    imageSrc: Oferta3,
  },
  {
    id: 4,
    name: "Sao Paulo, Brasil",
    description: "Quedate en el alojamiento de Eloy",
    fecha: "3 al 8 de ago.",
    href: "https://www.airbnb.com.ar/rooms/47025046?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-08-03&check_out=2023-08-08&source_impression_id=p3_1688143901_QvofDdyLy%2F46dNpM&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$22.904 ARS noche",
    imageSrc: Oferta4,
  },
  {
    id: 5,
    name: "Paris, Francia",
    description: "Quedate en el alojamiento de Romain",
    fecha: "1 al 6 de nov.",
    href: "https://www.airbnb.com.ar/rooms/39974109?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-11-01&check_out=2023-11-06&source_impression_id=p3_1688143901_DQGy55gBmuQMeVeS&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$34.147 ARS noche",
    imageSrc: Oferta5,
  },
  {
    id: 6,
    name: "Saint-Ouen, Francia",
    description: "Quedate en el alojamiento de Sébastien",
    fecha: "29 de oct al 3 de nov.",
    href: "https://www.airbnb.com.ar/rooms/679663072652903873?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-10-29&check_out=2023-11-03&source_impression_id=p3_1688143901_6Ax7tsJTUbnQHzqO&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$18.667 ARS noche",
    imageSrc: Oferta6,
  },
  {
    id: 7,
    name: "Valencia, España",
    description: "Quedate en el alojamiento de Sagrario",
    fecha: "20 al 27 de sep.",
    href: "https://www.airbnb.com.ar/rooms/10989371?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-11-13&check_out=2023-11-18&source_impression_id=p3_1688143369_zNCkYEyMk%2FnrKScc&previous_page_section_name=1000&federated_search_id=e2cb0cdc-9d3f-41f9-a26e-74243933cd25",
    price: "$8.537 ARS noche",
    imageSrc: Oferta7,
  },
  {
    id: 8,
    name: "Malakoff, Francia",
    description: "Quedate en el alojamiento de Jacques",
    fecha: "2 al 7 de jul.",
    href: "https://www.airbnb.com.ar/rooms/13016398?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-07-28&check_out=2023-08-02&source_impression_id=p3_1688143369_jKrWQZq904EaEcMM&previous_page_section_name=1000&federated_search_id=e2cb0cdc-9d3f-41f9-a26e-74243933cd25",
    price: "$15.065 ARS noche",
    imageSrc: Oferta8,
  },
  {
    id: 9,
    name: "Copenhague, Dinamarca",
    description: "Quedate en el alojamiento de Shamiel",
    fecha: "17 al 23 oct.",
    href: "https://www.airbnb.com.ar/rooms/746919020186561409?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-10-17&check_out=2023-10-23&source_impression_id=p3_1688143901_bxmHJts2tZ0LqtSY&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$32.165 ARS noche",
    imageSrc: Oferta9,
  },
  {
    id: 10,
    name: "Rome, Italia",
    description: "Quedate en el alojamiento de Esmeralda",
    fecha: "30 de nov. al 5 de dic.",
    href: "https://www.airbnb.com.ar/rooms/4480304?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-11-30&check_out=2023-12-05&source_impression_id=p3_1688143901_XIhhwHeLh7nkZ22P&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$5.120 ARS noche",
    imageSrc: Oferta10,
  },
  {
    id: 11,
    name: "Copacabana, Brasil",
    description: "Quedate en el alojamiento de Claudia",
    fecha: "28 de jul. al 3 de ago.",
    href: "https://www.airbnb.com.ar/rooms/53588636?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-08-24&check_out=2023-08-29&source_impression_id=p3_1688143901_jlmvikQSNKSpE9BD&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$4864 ARS noche",
    imageSrc: Oferta11,
  },
  {
    id: 12,
    name: "Perledio, Italia",
    description: "Quedate en el alojamiento de Silvana",
    fecha: "31 de oct. al 5 de nov.",
    href: "https://www.airbnb.com.ar/rooms/20604554?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-10-31&check_out=2023-11-05&source_impression_id=p3_1688143901_8Nd%2Bn3G3xbTCxkr6&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$63.255 ARS noche",
    imageSrc: Oferta12,
  },
  {
    id: 13,
    name: "Los Angeles, California",
    description: "Quedate en el alojamiento de Rhonda",
    fecha: "24 al 29 de jun.",
    href: "https://www.airbnb.com.ar/rooms/plus/33747689?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-07-24&check_out=2023-07-29&source_impression_id=p3_1688143901_C8DxK3%2FUVemXWYhT&previous_page_section_name=1000&federated_search_id=9bd6f4b9-6d7c-4312-a646-3c1aeb9567ef",
    price: "$41.172 noche",
    imageSrc: Oferta13,
  },
  {
    id: 14,
    name: "Brooklyn, New York",
    description: "Quedate en el alojamiento de Andrada",
    fecha: "1 al 7 de oct.",
    href: "#",
    price: "$21.723 ARS noche",
    imageSrc: Oferta14,
  },
  {
    id: 15,
    name: "San Pedro de Atacama, Chile",
    description: "Con vista al desierto",
    fecha: "29 de jul. al 5 de ago.",
    href: "#",
    price: "$62.946 ARS noche",
    imageSrc: Oferta15,
  },
  {
    id: 16,
    name: "Las Heras, Argentina",
    description: "Vistas: Montaña y lago",
    fecha: "5 al 10 de ago.",
    href: "#",
    price: "$19.998 ARS noche",
    imageSrc: Oferta16,
  },
  {
    id: 17,
    name: "Santa Maria Colotepec, México",
    description: "a 5.588 km de distancia",
    fecha: "10 al 15 de jul.",
    href: "#",
    price: "$156.233 ARS noche",
    imageSrc: Oferta17,
  },
  {
    id: 18,
    name: "Puchuncavi, Chile",
    description: "Vistas: Playa y océano",
    fecha: "1 al 6 de nov.",
    href: "#",
    price: "$27.813 ARS noche",
    imageSrc: Oferta18,
  },
  {
    id: 19,
    name: "Las Compuertas, Argentina",
    description: "Vistas: Montaña y viñedo",
    fecha: "8 al 13 ago.",
    href: "#",
    price: "$82.344 ARS noche",
    imageSrc: Oferta19,
  },
  {
    id: 20,
    name: "Las Heras, Argentina",
    description: "Vistas: Montaña y jardín",
    fecha: "3 al 8 de jul.",
    href: "#",
    price: "$22.440 ARS noche",
    imageSrc: Oferta20,
  },
  // More products...
];

export default function Habitaciones() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group"
              target="_blank"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-md font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="text-md font-nunito text-gray-500">
                {product.description}
              </p>
              <p className="text-md font-nunito text-gray-500">
                {product.fecha}
              </p>
              <p className="text-md font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
