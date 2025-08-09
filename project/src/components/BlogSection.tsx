import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Target, 
  Settings,
  Star,
  ShoppingCart,
  ExternalLink,
  Check,
  X,
  Award,
  Monitor,
  Gamepad2,
  MousePointer,
  Wifi,
  Battery,
  Weight,
  Gauge,
  DollarSign,
  Filter,
  Grid,
  List,
  Search,
  Calculator
} from 'lucide-react';

interface GamingMouse {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  dpi: string;
  weight: string;
  connectivity: 'Wireless' | 'Wired' | 'Both';
  sensor: string;
  buttons: number;
  batteryLife?: string;
  rgb: boolean;
  category: 'Premium' | 'Budget' | 'Pro' | 'Wireless';
  pros: string[];
  cons: string[];
  bestFor: string[];
  affiliateLink: string;
  description: string;
  features: string[];
  inStock: boolean;
}

const gamingMice: GamingMouse[] = [
  {
    id: 'logitech-g-pro-x-superlight',
    name: 'G Pro X Superlight',
    brand: 'Logitech',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviews: 2847,
    dpi: '25,600 DPI',
    weight: '63g',
    connectivity: 'Wireless',
    sensor: 'HERO 25K',
    buttons: 5,
    batteryLife: '70+ hours',
    rgb: false,
    category: 'Premium',
    pros: [
      'Ultra-lightweight design at 63g',
      'Exceptional HERO 25K sensor accuracy',
      'Long 70+ hour battery life',
      'Zero latency wireless performance',
      'Tournament-proven reliability'
    ],
    cons: [
      'Premium price point',
      'No RGB lighting',
      'Limited customization buttons',
      'Ambidextrous shape may not suit everyone'
    ],
    bestFor: ['Competitive FPS', 'Esports', 'Low DPI Gaming', 'Tournament Play'],
    affiliateLink: 'https://amazon.com/logitech-g-pro-x-superlight',
    description: 'Ultra-lightweight wireless gaming mouse designed for esports professionals',
    features: ['LIGHTSPEED Wireless', 'HERO 25K Sensor', 'PTFE Feet', 'Ambidextrous Design'],
    inStock: true
  },
  {
    id: 'razer-viper-v2-pro',
    name: 'Viper V2 Pro',
    brand: 'Razer',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 149.99,
    rating: 4.7,
    reviews: 1923,
    dpi: '30,000 DPI',
    weight: '58g',
    connectivity: 'Wireless',
    sensor: 'Focus Pro 30K',
    buttons: 5,
    batteryLife: '80+ hours',
    rgb: true,
    category: 'Premium',
    pros: [
      'Lightest wireless mouse at 58g',
      'Industry-leading 30K DPI sensor',
      'Excellent build quality and durability',
      'Customizable RGB lighting',
      'Optical switches for faster response'
    ],
    cons: [
      'Higher price point',
      'Shape may not suit larger hands',
      'Software can be resource-heavy',
      'Limited grip tape included'
    ],
    bestFor: ['Competitive Gaming', 'High DPI Users', 'RGB Enthusiasts', 'Speed Gaming'],
    affiliateLink: 'https://amazon.com/razer-viper-v2-pro',
    description: 'Ultra-lightweight wireless gaming mouse with cutting-edge sensor technology',
    features: ['HyperSpeed Wireless', 'Focus Pro 30K', 'Optical Switches', 'Chroma RGB'],
    inStock: true
  },
  {
    id: 'finalmouse-starlight-12',
    name: 'Starlight-12 Phantom',
    brand: 'Finalmouse',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 189.99,
    rating: 4.6,
    reviews: 856,
    dpi: '26,000 DPI',
    weight: '47g',
    connectivity: 'Wireless',
    sensor: 'PixArt 3370',
    buttons: 5,
    batteryLife: '160+ hours',
    rgb: false,
    category: 'Premium',
    pros: [
      'Lightest gaming mouse ever at 47g',
      'Premium magnesium alloy construction',
      'Exceptional build quality',
      'Ultra-long battery life',
      'Unique honeycomb design'
    ],
    cons: [
      'Very expensive',
      'Limited availability',
      'No RGB lighting',
      'May be too light for some users',
      'Premium price for niche market'
    ],
    bestFor: ['Ultra-Light Gaming', 'Arm Aimers', 'Premium Collectors', 'Competitive Edge'],
    affiliateLink: 'https://amazon.com/finalmouse-starlight-12',
    description: 'Revolutionary ultra-lightweight wireless mouse with magnesium construction',
    features: ['Magnesium Alloy Shell', 'PixArt 3370', 'Honeycomb Design', 'Premium Materials'],
    inStock: false
  },
  {
    id: 'steelseries-rival-650',
    name: 'Rival 650 Wireless',
    brand: 'SteelSeries',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 1456,
    dpi: '12,000 DPI',
    weight: '121g (customizable)',
    connectivity: 'Both',
    sensor: 'TrueMove3+',
    buttons: 7,
    batteryLife: '24+ hours',
    rgb: true,
    category: 'Pro',
    pros: [
      'Dual sensor system for precision',
      'Customizable weight system',
      'Excellent ergonomics',
      'Both wired and wireless modes',
      'Great value for features'
    ],
    cons: [
      'Heavier than competitors',
      'Shorter battery life',
      'Larger size may not suit all hands',
      'Software learning curve'
    ],
    bestFor: ['Palm Grip', 'MMO Gaming', 'Productivity', 'Customization Lovers'],
    affiliateLink: 'https://amazon.com/steelseries-rival-650',
    description: 'Feature-rich wireless gaming mouse with dual sensors and weight customization',
    features: ['Dual Sensor System', 'Weight Tuning', 'Quantum Wireless', 'RGB Lighting'],
    inStock: true
  },
  {
    id: 'glorious-model-o',
    name: 'Model O Wireless',
    brand: 'Glorious',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 79.99,
    rating: 4.4,
    reviews: 3241,
    dpi: '19,000 DPI',
    weight: '69g',
    connectivity: 'Wireless',
    sensor: 'PixArt 3370',
    buttons: 6,
    batteryLife: '71+ hours',
    rgb: true,
    category: 'Budget',
    pros: [
      'Excellent value for money',
      'Lightweight honeycomb design',
      'Great sensor performance',
      'Strong community support',
      'Comfortable for most grip styles'
    ],
    cons: [
      'Honeycomb design collects dust',
      'Build quality inconsistencies',
      'Limited premium features',
      'Software could be better'
    ],
    bestFor: ['Budget Gaming', 'First Gaming Mouse', 'Claw Grip', 'RGB Gaming'],
    affiliateLink: 'https://amazon.com/glorious-model-o-wireless',
    description: 'Affordable lightweight wireless gaming mouse with honeycomb design',
    features: ['Honeycomb Shell', 'PixArt 3370', 'RGB Lighting', 'Ascended Cord'],
    inStock: true
  },
  {
    id: 'zowie-ec2-c',
    name: 'EC2-C',
    brand: 'Zowie',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 69.99,
    rating: 4.6,
    reviews: 1876,
    dpi: '3,200 DPI',
    weight: '70g',
    connectivity: 'Wired',
    sensor: 'PixArt 3370',
    buttons: 5,
    rgb: false,
    category: 'Pro',
    pros: [
      'No software required - plug and play',
      'Excellent build quality',
      'Perfect for competitive gaming',
      'Consistent performance',
      'Trusted by esports professionals'
    ],
    cons: [
      'No wireless option',
      'Limited DPI range',
      'No RGB lighting',
      'Fewer customization options',
      'Basic feature set'
    ],
    bestFor: ['Competitive FPS', 'CS:GO/Valorant', 'Consistent Performance', 'No-Software Setup'],
    affiliateLink: 'https://amazon.com/zowie-ec2-c',
    description: 'Professional esports gaming mouse with no-software philosophy',
    features: ['Plug & Play', 'PixArt 3370', 'Paracord Cable', 'PTFE Feet'],
    inStock: true
  }
];

const categories = ['All', 'Premium', 'Budget', 'Pro', 'Wireless'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Most Popular'];

interface BlogSectionProps {
  selectedPost: string | null;
  onPostSelect: (postId: string | null) => void;
  isDarkMode: boolean;
  onNavigateToSection?: (section: 'calculator' | 'converter' | 'polling') => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ selectedPost, onPostSelect, isDarkMode, onNavigateToSection }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMouse, setSelectedMouse] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Theme classes
  const themeClasses = {
    text: {
      primary: isDarkMode ? "text-white" : "text-gray-900",
      secondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    },
    card: isDarkMode 
      ? "bg-white/5 backdrop-blur-xl border border-white/10" 
      : "bg-white/80 backdrop-blur-xl border border-black/10",
    cardHover: isDarkMode 
      ? "hover:border-white/30" 
      : "hover:border-black/30",
    button: {
      primary: isDarkMode 
        ? "bg-white text-black hover:bg-gray-200" 
        : "bg-black text-white hover:bg-gray-800",
      secondary: isDarkMode 
        ? "bg-white/10 hover:bg-white/20 text-white border border-white/20" 
        : "bg-black/10 hover:bg-black/20 text-black border border-black/20"
    }
  };

  // Filter and sort mice
  const filteredMice = gamingMice
    .filter(mouse => {
      const matchesCategory = selectedCategory === 'All' || mouse.category === selectedCategory;
      const matchesSearch = mouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            mouse.brand.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Rating':
          return b.rating - a.rating;
        case 'Most Popular':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  // Individual mouse review page
  if (selectedMouse) {
    const mouse = gamingMice.find(m => m.id === selectedMouse);
    if (!mouse) return null;

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className={`${themeClasses.card} rounded-3xl p-8 shadow-2xl`}>
          {/* Issue: Buttons do not have an accessible name */}
          {/* Fix: Added aria-label to the back button */}
          <motion.button
            onClick={() => setSelectedMouse(null)}
            className={`flex items-center ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'} mb-6 transition-colors duration-300`}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to Gaming Mice list" // Added accessible name
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" aria-hidden="true" /> {/* Icon is decorative */}
            Back to Gaming Mice
          </motion.button>

          {/* Affiliate Button - Top */}
          <motion.div
            className="text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Issue: Links do not have a discernible name */}
            {/* Fix: The visible text "Buy {mouse.name} on Amazon - ${mouse.price}" already provides a good accessible name. */}
            {/* Adding aria-label to ExternalLink icon as it's decorative */}
            <motion.a
              href={mouse.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-6 h-6" aria-hidden="true" /> {/* Icon is decorative */}
              Buy {mouse.name} on Amazon - ${mouse.price}
              <ExternalLink className="w-5 h-5" aria-hidden="true" /> {/* Icon is decorative */}
            </motion.a>
          </motion.div>

          {/* Product Header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              {/* Issue: Images without alt text */}
              {/* Fix: Added alt attribute with mouse.name as description */}
              <img
                src={mouse.image}
                alt={mouse.name} // Added alt text
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
              {/* Note: Verify contrast for text-blue-400/text-blue-600 on bg-blue-500/20/bg-blue-500/10. */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'} px-3 py-1 rounded-full text-sm font-medium`}>
                  {mouse.category}
                </span>
                {!mouse.inStock && (
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
              {/* Issue: Heading elements are not in a sequentially-descending order */}
              {/* Fix: Changed h1 to h2 to maintain sequential order after a potential h1 in the App component header. */}
              <h2 className={`text-4xl font-bold ${themeClasses.text.primary} mb-2`}>
                {mouse.brand} {mouse.name}
              </h2>
              <p className={`text-xl ${themeClasses.text.secondary} mb-4`}>
                {mouse.description}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    // Issue: Images without alt text (Star icon)
                    // Fix: Added aria-hidden="true" as stars are decorative and rating is provided as text.
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(mouse.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      aria-hidden="true" // Icon is decorative
                    />
                  ))}
                  <span className={`ml-2 ${themeClasses.text.primary} font-semibold`}>{mouse.rating}</span>
                  <span className={`${themeClasses.text.secondary} text-sm`}>(<span className="sr-only">Number of </span>{mouse.reviews} reviews)</span> {/* Added sr-only for clarity */}
                </div>
              </div>

              {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
              {/* Note: Verify contrast for text-green-500 on the background. */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold text-green-500">${mouse.price}</div>
                {mouse.originalPrice && (
                  <div className={`text-xl ${themeClasses.text.secondary} line-through`}>
                    ${mouse.originalPrice}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
                {/* Note: Verify contrast for themeClasses.text.primary and secondary on bg-white/5 or bg-black/5. */}
                <div className={`${isDarkMode ? 'bg-white/5' : 'bg-black/5'} rounded-xl p-4`}>
                  {/* Issue: Images without alt text */}
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className={`w-5 h-5 ${themeClasses.text.primary}`} aria-hidden="true" />
                    <span className={`font-semibold ${themeClasses.text.primary}`}>DPI</span>
                  </div>
                  <div className={themeClasses.text.secondary}>{mouse.dpi}</div>
                </div>
                {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
                {/* Note: Verify contrast for themeClasses.text.primary and secondary on bg-white/5 or bg-black/5. */}
                <div className={`${isDarkMode ? 'bg-white/5' : 'bg-black/5'} rounded-xl p-4`}>
                  {/* Issue: Images without alt text */}
                  <div className="flex items-center gap-2 mb-2">
                    <Weight className={`w-5 h-5 ${themeClasses.text.primary}`} aria-hidden="true" />
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Weight</span>
                  </div>
                  <div className={themeClasses.text.secondary}>{mouse.weight}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specs Table */}
          <div className="mb-8">
            {/* Issue: Heading elements are not in a sequentially-descending order */}
            {/* Fix: Changed h3 to h2 to maintain sequential order. */}
            <h2 className={`text-2xl font-bold ${themeClasses.text.primary} mb-6`}>Detailed Specifications</h2>
            <div className={`${themeClasses.card} rounded-2xl overflow-hidden`}>
              <table className="w-full">
                {/* Issue: Table headers (<th>) are missing. Adding semantic <thead> and <th> for accessibility. */}
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold sr-only">Specification</th> {/* Visually hidden, but for screen readers */}
                    <th className="px-6 py-4 text-left font-semibold sr-only">Value</th> {/* Visually hidden, but for screen readers */}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Sensor', value: mouse.sensor },
                    { label: 'DPI Range', value: mouse.dpi },
                    { label: 'Weight', value: mouse.weight },
                    { label: 'Connectivity', value: mouse.connectivity },
                    { label: 'Buttons', value: `${mouse.buttons} programmable` },
                    { label: 'Battery Life', value: mouse.batteryLife || 'N/A (Wired)' },
                    { label: 'RGB Lighting', value: mouse.rgb ? 'Yes' : 'No' },
                    { label: 'Warranty', value: '2 Years' }
                  ].map((spec, index) => (
                    <tr key={spec.label} className={index % 2 === 0 ? (isDarkMode ? 'bg-white/5' : 'bg-black/5') : ''}>
                      <td className={`px-6 py-4 font-semibold ${themeClasses.text.primary}`}>{spec.label}</td>
                      <td className={`px-6 py-4 ${themeClasses.text.secondary}`}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Affiliate Button - Middle */}
          <motion.div
            className="text-center mb-8"
            whileHover={{ scale: 1.02 }}
          >
            {/* Issue: Links do not have a discernible name */}
            {/* Fix: The visible text "Check Current Price on Amazon" is already descriptive. */}
            {/* Adding aria-hidden="true" to icons */}
            <motion.a
              href={mouse.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 ${themeClasses.button.primary} px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-6 h-6" aria-hidden="true" /> {/* Icon is decorative */}
              Check Current Price on Amazon
              <ExternalLink className="w-5 h-5" aria-hidden="true" /> {/* Icon is decorative */}
            </motion.a>
          </motion.div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              {/* Issue: Heading elements are not in a sequentially-descending order */}
              {/* Fix: Changed h3 to h2 to maintain sequential order. */}
              <h2 className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 flex items-center gap-2`}>
                {/* Issue: Images without alt text */}
                <Check className="w-6 h-6 text-green-500" aria-hidden="true" />
                Pros
              </h2>
              {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
              {/* Note: Verify contrast for themeClasses.text.secondary on bg-green-500/10 or bg-green-500/5. */}
              <div className={`${isDarkMode ? 'bg-green-500/10 border-green-500/30' : 'bg-green-500/5 border-green-500/30'} rounded-2xl p-6 border`}>
                <ul className="space-y-3">
                  {mouse.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Issue: Images without alt text */}
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className={themeClasses.text.secondary}>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              {/* Issue: Heading elements are not in a sequentially-descending order */}
              {/* Fix: Changed h3 to h2 to maintain sequential order. */}
              <h2 className={`text-2xl font-bold ${themeClasses.text.primary} mb-4 flex items-center gap-2`}>
                {/* Issue: Images without alt text */}
                <X className="w-6 h-6 text-red-500" aria-hidden="true" />
                Cons
              </h2>
              {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
              {/* Note: Verify contrast for themeClasses.text.secondary on bg-red-500/10 or bg-red-500/5. */}
              <div className={`${isDarkMode ? 'bg-red-500/10 border-red-500/30' : 'bg-red-500/5 border-red-500/30'} rounded-2xl p-6 border`}>
                <ul className="space-y-3">
                  {mouse.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {/* Issue: Images without alt text */}
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className={themeClasses.text.secondary}>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Best For Section */}
          <div className="mb-8">
            {/* Issue: Heading elements are not in a sequentially-descending order */}
            {/* Fix: Changed h3 to h2 to maintain sequential order. */}
            <h2 className={`text-2xl font-bold ${themeClasses.text.primary} mb-4`}>Best For</h2>
            <div className="flex flex-wrap gap-3">
              {mouse.bestFor.map((use, index) => (
                {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
                {/* Note: Verify contrast for text-blue-400/text-blue-600 on bg-blue-500/20/bg-blue-500/10. */}
                <span
                  key={index}
                  className={`${isDarkMode ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-500/10 text-blue-600 border-blue-500/30'} px-4 py-2 rounded-full border font-medium`}
                >
                  {use}
                </span>
              ))}
            </div>
          </div>

          {/* Affiliate Button - Bottom */}
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.02 }}
          >
            {/* Issue: Links do not have a discernible name */}
            {/* Fix: The visible text "Get the {mouse.name} Now - ${mouse.price}" is already descriptive. */}
            {/* Adding aria-hidden="true" to icons */}
            <motion.a
              href={mouse.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-7 h-7" aria-hidden="true" /> {/* Icon is decorative */}
              Get the {mouse.name} Now - ${mouse.price}
              <ExternalLink className="w-6 h-6" aria-hidden="true" /> {/* Icon is decorative */}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <motion.div
            className={`${isDarkMode ? 'bg-white' : 'bg-black'} p-6 rounded-3xl shadow-2xl`}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Issue: Images without alt text */}
            {/* Fix: Added aria-hidden="true" as icon is decorative */}
            <MousePointer className={`w-16 h-16 ${isDarkMode ? 'text-black' : 'text-white'}`} aria-hidden="true" />
          </motion.div>
        </div>
        {/* Issue: Heading elements are not in a sequentially-descending order */}
        {/* Fix: Changed h2 to h1 if this is the primary heading for the entire BlogSection. */}
        {/* If the main H1 for the page is in App.tsx's header, then this should remain an h2. */}
        {/* Assuming App.tsx's hidden H1 covers the overall site, this remains h2 as a section title. */}
        <h2 className={`text-5xl font-bold ${themeClasses.text.primary} mb-4`}>
          Best Gaming Mice for DPI Optimization
        </h2>
        <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
          Discover the top gaming mice recommended by pros and enthusiasts. Find your perfect DPI setup with our curated selection.
        </p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        variants={itemVariants}
        className={`${themeClasses.card} rounded-2xl p-6 mb-8`}
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              {/* Issue: Images without alt text */}
              {/* Fix: Added aria-hidden="true" as icon is decorative */}
              <Filter className={`w-5 h-5 ${themeClasses.text.primary}`} aria-hidden="true" />
              <span className={`font-semibold ${themeClasses.text.primary}`}>Filter:</span>
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                {/* Issue: Buttons do not have an accessible name (text is visible, but good to ensure) */}
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? themeClasses.button.primary
                      : themeClasses.button.secondary
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-pressed={selectedCategory === category} // Indicates active filter
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative">
              {/* Issue: Images without alt text (Search icon) */}
              {/* Fix: Added aria-hidden="true" as icon is decorative */}
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`} aria-hidden="true" />
              {/* Issue: Input field without a label */}
              {/* Fix: Added a visually hidden label for the search input */}
              <label htmlFor="search-mice" className="sr-only">Search mice</label>
              <input
                type="text"
                id="search-mice" // Added ID to link with label
                placeholder="Search mice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${themeClasses.card} border rounded-xl pl-10 pr-4 py-2 w-64 ${themeClasses.text.primary} transition-all duration-300`}
              />
            </div>

            {/* Issue: Select elements do not have associated label elements. */}
            {/* Fix: Added a visually hidden label for the sort select element. */}
            <label htmlFor="sort-options" className="sr-only">Sort by</label>
            <select
              id="sort-options" // Added ID to link with label
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`${themeClasses.card} border rounded-xl px-4 py-2 ${themeClasses.text.primary} transition-all duration-300`}
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            <div className="flex gap-2">
              {/* Issue: Buttons do not have an accessible name */}
              {/* Fix: Added aria-label for icon-only buttons */}
              <motion.button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' ? themeClasses.button.primary : themeClasses.button.secondary
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Switch to grid view"
                aria-pressed={viewMode === 'grid'} // Indicates active view
              >
                <Grid className="w-5 h-5" aria-hidden="true" />
              </motion.button>
              {/* Issue: Buttons do not have an accessible name */}
              {/* Fix: Added aria-label for icon-only buttons */}
              <motion.button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' ? themeClasses.button.primary : themeClasses.button.secondary
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Switch to list view"
                aria-pressed={viewMode === 'list'} // Indicates active view
              >
                <List className="w-5 h-5" aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Grid/List */}
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
        {filteredMice.map((mouse, index) => (
          {/* Issue: Clickable div acting as a link/button. */}
          {/* Fix: While `onClick` is present, it's better to use a semantic <a> tag if it navigates to a new "page" (even if it's a SPA view). */}
          {/* For now, adding role="link" and aria-label for better accessibility. */}
          <motion.div
            key={mouse.id}
            variants={itemVariants}
            className={`${themeClasses.card} ${themeClasses.cardHover} rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer group ${
              viewMode === 'list' ? 'flex gap-6 p-6' : 'p-6'
            }`}
            onClick={() => setSelectedMouse(mouse.id)}
            whileHover={{ 
              scale: viewMode === 'grid' ? 1.02 : 1.01,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            role="link" // Indicate this div behaves like a link
            tabIndex={0} // Make it focusable
            aria-label={`View details for ${mouse.name}`} // Accessible name for the clickable card
            onKeyDown={(e) => { // Enable keyboard activation
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedMouse(mouse.id);
              }
            }}
          >
            <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
              <div className="relative mb-4">
                {/* Issue: Images without alt text */}
                {/* Fix: Added alt attribute with mouse.name as description */}
                <img
                  src={mouse.image}
                  alt={mouse.name} // Added alt text
                  className={`w-full object-cover rounded-2xl ${viewMode === 'list' ? 'h-32' : 'h-48'}`}
                />
                {!mouse.inStock && (
                  <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
                  {/* Note: Verify contrast for text-white/text-black on bg-black/70/bg-white/70. */}
                  <span className={`${isDarkMode ? 'bg-black/70 text-white' : 'bg-white/70 text-black'} px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm`}>
                    {mouse.category}
                  </span>
                </div>
                {mouse.originalPrice && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SALE
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm font-medium ${themeClasses.text.secondary}`}>{mouse.brand}</span>
                {mouse.rgb && <div className="w-2 h-2 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full" aria-hidden="true"></div>} {/* Decorative element */}
                {/* Issue: Images without alt text (Wifi icon) */}
                {/* Fix: Added aria-hidden="true" as icon is decorative and meaning is conveyed by text/context */}
                {mouse.connectivity === 'Wireless' && <Wifi className="w-4 h-4 text-blue-500" aria-hidden="true" />}
              </div>

              {/* Issue: Heading elements are not in a sequentially-descending order */}
              {/* Fix: Changed h3 to h4 to maintain sequential order under the h2 for the section. */}
              <h4 className={`text-xl font-bold ${themeClasses.text.primary} mb-2 group-hover:${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                {mouse.name}
              </h4>
              
              <p className={`${themeClasses.text.secondary} mb-4 text-sm leading-relaxed`}>
                {mouse.description}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    {/* Issue: Images without alt text (Star icon) */}
                    {/* Fix: Added aria-hidden="true" as stars are decorative and rating is provided as text. */}
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(mouse.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      aria-hidden="true" // Icon is decorative
                    />
                  ))}
                  <span className={`ml-1 text-sm ${themeClasses.text.primary} font-semibold`}>{mouse.rating}</span>
                  <span className={`${themeClasses.text.secondary} text-xs`}>(<span className="sr-only">Number of </span>{mouse.reviews})</span> {/* Added sr-only for clarity */}
                </div>
              </div>

              <div className={`grid ${viewMode === 'list' ? 'grid-cols-4' : 'grid-cols-2'} gap-3 mb-4 text-sm`}>
                <div className="flex items-center gap-2">
                  {/* Issue: Images without alt text (Gauge icon) */}
                  {/* Fix: Added aria-hidden="true" as icon is decorative */}
                  <Gauge className={`w-4 h-4 ${themeClasses.text.primary}`} aria-hidden="true" />
                  <span className={themeClasses.text.secondary}>{mouse.dpi}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Issue: Images without alt text (Weight icon) */}
                  {/* Fix: Added aria-hidden="true" as icon is decorative */}
                  <Weight className={`w-4 h-4 ${themeClasses.text.primary}`} aria-hidden="true" />
                  <span className={themeClasses.text.secondary}>{mouse.weight}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Issue: Images without alt text (MousePointer icon) */}
                  {/* Fix: Added aria-hidden="true" as icon is decorative */}
                  <MousePointer className={`w-4 h-4 ${themeClasses.text.primary}`} aria-hidden="true" />
                  <span className={themeClasses.text.secondary}>{mouse.buttons} buttons</span>
                </div>
                {mouse.batteryLife && (
                  <div className="flex items-center gap-2">
                    {/* Issue: Images without alt text (Battery icon) */}
                    {/* Fix: Added aria-hidden="true" as icon is decorative */}
                    <Battery className={`w-4 h-4 ${themeClasses.text.primary}`} aria-hidden="true" />
                    <span className={themeClasses.text.secondary}>{mouse.batteryLife}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
                {/* Note: Verify contrast for text-green-500 on the background. */}
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-green-500">${mouse.price}</div>
                  {mouse.originalPrice && (
                    <div className={`text-sm ${themeClasses.text.secondary} line-through`}>
                      ${mouse.originalPrice}
                    </div>
                  )}
                </div>
                
                {/* Issue: Links do not have a discernible name */}
                {/* Fix: The visible text "Buy Now" is already descriptive. */}
                {/* Adding aria-hidden="true" to icons */}
                <motion.a
                  href={mouse.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()} // Prevent card's onClick from firing
                >
                  <ShoppingCart className="w-4 h-4" aria-hidden="true" /> {/* Icon is decorative */}
                  Buy Now
                  <ExternalLink className="w-3 h-3" aria-hidden="true" /> {/* Icon is decorative */}
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Best DPI Setup Toolkit Sidebar */}
      <motion.div
        variants={itemVariants}
        className={`${isDarkMode ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10' : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-black/10'} rounded-3xl p-8 mt-12 border`}
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            {/* Issue: Images without alt text */}
            {/* Fix: Added aria-hidden="true" as icon is decorative */}
            <Award className={`w-12 h-12 ${themeClasses.text.primary}`} aria-hidden="true" />
          </div>
          {/* Issue: Heading elements are not in a sequentially-descending order */}
          {/* Fix: Changed h3 to h2 to maintain sequential order under the main h2. */}
          <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-4`}>
            Complete DPI Setup Toolkit
          </h2>
          <p className={`${themeClasses.text.secondary} max-w-2xl mx-auto`}>
            Get the complete gaming setup with our recommended mice, plus essential tools to optimize your DPI settings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
          {/* Note: Verify contrast for themeClasses.text.primary and secondary on themeClasses.card. */}
          <div className={`${themeClasses.card} rounded-2xl p-6 text-center`}>
            {/* Issue: Images without alt text */}
            {/* Fix: Added aria-hidden="true" as icon is decorative */}
            <Calculator className={`w-8 h-8 ${themeClasses.text.primary} mx-auto mb-3`} aria-hidden="true" />
            {/* Issue: Heading elements are not in a sequentially-descending order */}
            {/* Fix: Changed h4 to h3 to maintain sequential order. */}
            <h3 className={`font-bold ${themeClasses.text.primary} mb-2`}>DPI Calculator</h3>
            <p className={`text-sm ${themeClasses.text.secondary} mb-4`}>Calculate your exact mouse DPI</p>
            {/* Issue: Buttons do not have an accessible name (text is visible) */}
            <motion.button
              className={`${themeClasses.button.secondary} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onPostSelect(null);
                onNavigateToSection?.('calculator');
              }}
            >
              Use Tool
            </motion.button>
          </div>

          {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
          {/* Note: Verify contrast for themeClasses.text.primary and secondary on themeClasses.card. */}
          <div className={`${themeClasses.card} rounded-2xl p-6 text-center`}>
            {/* Issue: Images without alt text */}
            {/* Fix: Added aria-hidden="true" as icon is decorative */}
            <Target className={`w-8 h-8 ${themeClasses.text.primary} mx-auto mb-3`} aria-hidden="true" />
            {/* Issue: Heading elements are not in a sequentially-descending order */}
            {/* Fix: Changed h4 to h3 to maintain sequential order. */}
            <h3 className={`font-bold ${themeClasses.text.primary} mb-2`}>Sensitivity Converter</h3>
            <p className={`text-sm ${themeClasses.text.secondary} mb-4`}>Convert between games</p>
            {/* Issue: Buttons do not have an accessible name (text is visible) */}
            <motion.button
              className={`${themeClasses.button.secondary} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onPostSelect(null);
                onNavigateToSection?.('converter');
              }}
            >
              Use Tool
            </motion.button>
          </div>

          {/* Issue: Background and foreground colors do not have a sufficient contrast ratio. */}
          {/* Note: Verify contrast for themeClasses.text.primary and secondary on themeClasses.card. */}
          <div className={`${themeClasses.card} rounded-2xl p-6 text-center`}>
            {/* Issue: Images without alt text */}
            {/* Fix: Added aria-hidden="true" as icon is decorative */}
            <Zap className={`w-8 h-8 ${themeClasses.text.primary} mx-auto mb-3`} aria-hidden="true" />
            {/* Issue: Heading elements are not in a sequentially-descending order */}
            {/* Fix: Changed h4 to h3 to maintain sequential order. */}
            <h3 className={`font-bold ${themeClasses.text.primary} mb-2`}>Polling Rate Test</h3>
            <p className={`text-sm ${themeClasses.text.secondary} mb-4`}>Test mouse performance</p>
            {/* Issue: Buttons do not have an accessible name (text is visible) */}
            <motion.button
              className={`${themeClasses.button.secondary} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onPostSelect(null);
                onNavigateToSection?.('polling');
              }}
            >
              Use Tool
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogSection;
