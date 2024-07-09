export default function Footer() {
    return (
        <>
            {/* component */}
            <footer className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            
                        </h2>
                        <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
                            
                        </p>
                        <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
                            <a href="/pesan-tiket" className="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                               Beli Tiket
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Product
                            </h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a
                                    href="/pesan-tiket"
                                    className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                                >
                                    Tiket
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Company
                            </h3>
                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a
                                    href="#lokasi"
                                    className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                                >
                                    Lokasi
                                </a>
                                <a
                                    href="#story"
                                    className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                                >
                                    Sejarah
                                </a>
                                <a
                                    href="#most-populer"
                                    className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                                >
                                    Wisata
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        <a>
                            <img
                                className="w-auto h-7"
                                src="https://lomboktengahkab.go.id/uploads/settings/logo-loteng11.png"
                                alt=""
                            />
                        </a>
                        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
                            © Copyright 2023. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>

    );
}