import { Header } from '../../components/header';

export default function Section() {
    const data = [
        { href: "/#lokasi", name: "Lokasi" },
        { href: "/#story", name: "Sejarah" },
        { href: "/#most-populer", name: "Wisata" },
        { href: "/pesan-tiket", name: "Tiket" }
    ];

    return (
        <div className="bg-no-repeat bg-cover bg-fixed bg-[url('https://ik.imagekit.io/tvlk/blog/2022/01/Wisata-Air-Terjun-Lombok-Benang-Kelambu-Shutterstock.jpg?tr=dpr-2.5,h-480,q-40,w-1024')]">
            <Header data={data} />
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Pengen Tau Lebih Detail.{' '}
                            <a href="#story" className="font-semibold text-indigo-100">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Sejarah <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Air Terjun Benang Kelambu
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white font-semibold">
                            Air Terjun Benang Kelambu di Pulau Lombok, Indonesia, terkenal dengan aliran air lembut melalui tanaman hijau tebal, menyerupai kelambu. Terletak di Taman Nasional Gunung Rinjani, air terjun ini menawarkan suasana tenang dan sejuk, cocok untuk yang mencari ketenangan dan keindahan alam.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/pesan-tiket"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Dapatkan Tiket
                            </a>
                            <a href="#lokasi" className="text-sm font-semibold leading-6 text-white">
                                Lokasi <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}