import { Card } from "./components/card"

export default function Place() {
    return (
        <section id="most-populer" className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Spot Populer</h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                    Jelajahi keindahan alam kami yang menakjubkan, dari air terjun, yang akan mengisi album kenangan Anda.
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                        <div className="flex flex-col px-4 py-8 text-center">
                            <Card 
                            />
                        </div>

                        <div className="flex flex-col px-4 py-8 text-center">
                            <Card 
                            />
                        </div>

                        <div className="flex flex-col px-4 py-8 text-center">
                            <Card 
                            />
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}
