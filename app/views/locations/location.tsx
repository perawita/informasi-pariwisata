import MapComponent from './components/map';

export default function Location() {
  const lat = -8.532817390802522; // Replace with your desired latitude
  const lng = 116.34144707170883; // Replace with your desired longitude

  return (
    <section id="lokasi" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lokasi</h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
            
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
            <MapComponent lat={lat} lng={lng} />
        </div>
      </div>
    </section>
  );
}
