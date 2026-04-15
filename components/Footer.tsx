import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-xl font-bold">ShopNext</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your one-stop destination for premium products at amazing prices.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              {['All Products', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Blog', 'Press', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>support@shopnext.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>123 Commerce St, San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ShopNext. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>We accept:</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'PayPal', 'Amex'].map((card) => (
                <span key={card} className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded">
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
