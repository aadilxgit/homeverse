import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Leaf, Wine, Shield, ArrowRight, Car, Waves, ShieldCheck, Activity, Library, Bed, Building, Gamepad2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { PropertyCard } from '@/components/PropertyCard'
import { BlogCard } from '@/components/BlogCard'

export function Home() {
  const [properties, setProperties] = useState([])
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Fetch featured properties (limit to 4)
      const { data: propertiesData } = await supabase
        .from('properties')
        .select('*')
        .limit(4)
        .order('created_at', { ascending: false })

      // Fetch latest blog posts (limit to 3)
      const { data: blogData } = await supabase
        .from('blog_posts')
        .select('*')
        .limit(3)
        .order('published_at', { ascending: false })

      setProperties(propertiesData || [])
      setBlogPosts(blogData || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const services = [
    {
      icon: '🏠',
      title: 'Buy a home',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.'
    },
    {
      icon: '🏡',
      title: 'Rent a home',
      description: 'Over 1 million+ homes for rent available on the website, we can match you with a house you will want to call home.'
    },
    {
      icon: '💰',
      title: 'Sell a home',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.'
    }
  ]

  const features = [
    { icon: Car, title: 'Parking Space' },
    { icon: Waves, title: 'Swimming Pool' },
    { icon: ShieldCheck, title: 'Private Security' },
    { icon: Activity, title: 'Medical Center' },
    { icon: Library, title: 'Library Area' },
    { icon: Bed, title: 'King Size Beds' },
    { icon: Building, title: 'Smart Homes' },
    { icon: Gamepad2, title: "Kid's Playland" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cultured-2 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HomeIcon className="w-6 h-6 text-orange-soda" />
                <span className="text-dark-jungle-green font-bold">Real Estate Agency</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-jungle-green mb-6 font-poppins leading-tight">
                Find Your Dream House By Us
              </h1>
              
              <p className="text-cadet text-lg leading-relaxed mb-8 border-l-4 border-orange-soda pl-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              
              <Link
                to="/contact"
                className="inline-block bg-orange-soda text-white px-8 py-4 rounded font-semibold hover:bg-orange-600 transition-colors"
              >
                Make An Enquiry
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern house model" 
                className="w-full rounded-lg shadow-custom-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="House interior" 
                className="w-full rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="House interior" 
                className="absolute bottom-8 left-8 w-1/2 rounded-lg shadow-custom-2"
              />
            </div>
            
            <div>
              <div className="inline-block bg-orange-soda/10 text-orange-soda px-6 py-2 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-jungle-green mb-6 font-poppins">
                The Leading Real Estate Rental Marketplace.
              </h2>
              
              <p className="text-cadet leading-relaxed mb-8">
                Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage, combined with specialist services.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: HomeIcon, text: 'Smart Home Design' },
                  { icon: Leaf, text: 'Beautiful Scene Around' },
                  { icon: Wine, text: 'Exceptional Lifestyle' },
                  { icon: Shield, text: 'Complete 24/7 Security' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-misty-rose rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-orange-soda" />
                    </div>
                    <span className="text-cadet">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-orange-soda/5 border-l-4 border-orange-soda p-6 mb-8">
                <p className="text-cadet italic">
                  "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"
                </p>
              </div>
              
              <Link
                to="/about"
                className="inline-block bg-orange-soda text-white px-8 py-4 rounded font-semibold hover:bg-orange-600 transition-colors uppercase"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-cultured-2 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-soda/10 text-orange-soda px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-jungle-green font-poppins">
              Our Main Focus
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-custom-2 text-center hover:shadow-xl transition-shadow group">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark-jungle-green mb-4 group-hover:text-orange-soda transition-colors">
                  {service.title}
                </h3>
                <p className="text-cadet leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-opal hover:text-orange-soda transition-colors mx-auto font-semibold">
                  <span>Find A Home</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="w-0 h-1 bg-orange-soda mt-6 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-soda/10 text-orange-soda px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Properties
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-jungle-green font-poppins">
              Featured Listings
            </h2>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-block bg-orange-soda text-white px-8 py-4 rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-cultured-2 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-soda/10 text-orange-soda px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Our Amenities
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-jungle-green font-poppins">
              Building Amenities
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-custom-1 text-center hover:bg-orange-soda hover:text-white transition-colors group relative">
                <div className="w-16 h-16 bg-seashell text-orange-soda rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-orange-soda">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-dark-jungle-green group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white text-cadet rounded-full flex items-center justify-center shadow-lg group-hover:text-orange-soda transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-soda/10 text-orange-soda px-6 py-2 rounded-full text-sm font-semibold mb-4">
              News & Blogs
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-jungle-green font-poppins">
              Latest News Feeds
            </h2>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block bg-orange-soda text-white px-8 py-4 rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-raisin-black-1 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-orange-soda rounded-lg shadow-custom-2 p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
                Looking for a dream home?
              </h2>
              <p className="text-white text-lg">
                We can help you realize your dream of a new home
              </p>
            </div>
            <Link
              to="/properties"
              className="bg-white text-dark-jungle-green px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-custom-2"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}