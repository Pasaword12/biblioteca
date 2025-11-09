import { ArrowRightIcon, BookOpenIcon, MagnifyingGlassIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { inter } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpenIcon className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">BiblioTech</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/catalogo" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Catálogo
              </Link>
              <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Servicios
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Contacto
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tu Biblioteca Digital
              <span className="block text-blue-600">Al Alcance de Todos</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Descubre miles de libros, recursos académicos y contenido digital.
              Una experiencia de lectura moderna para mentes curiosas.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar libros, autores o temas..."
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Explorar Catálogo
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/registro"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpenIcon className="h-8 w-8" />,
                title: "Extensa Colección",
                description: "Accede a más de 50,000 títulos en formato digital"
              },
              {
                icon: <AcademicCapIcon className="h-8 w-8" />,
                title: "Recursos Académicos",
                description: "Material especializado para investigación y estudio"
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Seguimiento Personal",
                description: "Estadísticas y recomendaciones personalizadas"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu viaje literario?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de lectores y descubre un mundo de conocimiento ilimitado.
          </p>
          <Link
            href="/registro"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Comenzar Ahora
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
