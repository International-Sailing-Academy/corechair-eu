import Link from 'next/link'
 
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">CoreChair</div>
          <div className="flex gap-6 items-center">
            <a href="#products" className="hover:text-gray-300">Products</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
          </div>
        </div>
      </nav>
 
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">The World&apos;s Healthiest Ergonomic Office Chair</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Active sitting solutions designed to promote movement, improve posture, and reduce back pain. NEAT Certified by Mayo Clinic.</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">Shop CoreChair</button>
        </div>
      </section>
 
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why CoreChair?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🪑</div>
              <h3 className="text-xl font-semibold mb-2">Ergonomic Design</h3>
              <p className="text-gray-600">Patented active sitting mechanism with up to 14 degrees of movement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">NEAT Certified</h3>
              <p className="text-gray-600">Certified by Mayo Clinic for active sitting benefits</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">8-Year Warranty</h3>
              <p className="text-gray-600">Exceeds BIFMA/ANSI durability standards with 8-year warranty</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* CorePerch */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="bg-gray-100 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">🪑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">CorePerch</h3>
              <p className="text-gray-600 mb-4">Active-sitting stool for high desks - $395</p>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded text-sm">3 Year Warranty</span>
            </div>

            {/* Tango */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="bg-gray-100 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">💺</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">CoreChair Tango</h3>
              <p className="text-gray-600 mb-4">Compact ergonomic chair - $595</p>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded text-sm">3 Year Warranty</span>
            </div>

            {/* Classic */}
            <div className="bg-white p-6 rounded-lg shadow border border-blue-500">
              <div className="bg-blue-50 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">🪑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">CoreChair Classic</h3>
              <p className="text-gray-600 mb-4">Flagship active sitting chair - $995</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">8 Year Warranty</span>
            </div>

            {/* Sport */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="bg-gray-100 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">🪑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">CoreChair Sport</h3>
              <p className="text-gray-600 mb-4">Leather-look, easy cleaning - $1,195</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">8 Year Warranty</span>
            </div>

            {/* ELITE */}
            <div className="bg-white p-6 rounded-lg shadow border border-purple-500">
              <div className="bg-purple-50 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">👑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">CoreChair ELITE</h3>
              <p className="text-gray-600 mb-4">Tall back with Clever Spine - $1,195</p>
              <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm">8 Year Warranty</span>
            </div>

          </div>
        </div>
      </section>
 
      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">About CoreChair</h2>
          <p className="text-lg text-gray-700 mb-6">Founded in 2008 by Patrick Harrison, CoreChair combines expertise in kinesiology and sports medicine to revolutionize the way we sit. Our patented technology promotes healthy movement and proper posture throughout your workday.</p>
          <p className="text-lg text-gray-700">Our mission is to eliminate the health risks associated with prolonged sitting while maintaining comfort and productivity. Recommended for persons with pre-existing back pain and for preventative strengthening.</p>
        </div>
      </section>
 
      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <p className="mb-2"><strong>Email:</strong> info@corechair.eu</p>
            <p className="mb-2"><strong>Phone:</strong> +1 (800) 555-0123</p>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 CoreChair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
