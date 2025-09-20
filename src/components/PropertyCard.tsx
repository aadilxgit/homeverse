import React from 'react'
import { MapPin, Camera, Video, Bed, Bath, Square, Heart, Maximize, Plus } from 'lucide-react'

interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  square_feet: number
  property_type: 'rent' | 'sale'
  image_url: string
  agent_name: string
  agent_title: string
  agent_avatar: string
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom-2 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.image_url} 
          alt={property.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white rounded ${
          property.property_type === 'rent' ? 'bg-yellow-green' : 'bg-orange-soda'
        }`}>
          For {property.property_type === 'rent' ? 'Rent' : 'Sale'}
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex items-center gap-2 text-white text-sm">
              <MapPin className="w-4 h-4" />
              <span>{property.location}</span>
            </div>
            <div className="flex gap-2">
              <button className="text-white hover:text-orange-soda transition-colors">
                <Camera className="w-4 h-4" />
              </button>
              <button className="text-white hover:text-orange-soda transition-colors">
                <Video className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Price */}
        <div className="text-orange-soda font-bold text-lg mb-2">
          ${property.price.toLocaleString()}
          {property.property_type === 'rent' && <span className="text-sm font-normal">/Month</span>}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-dark-jungle-green mb-3 hover:text-orange-soda transition-colors cursor-pointer">
          {property.title}
        </h3>

        {/* Description */}
        <p className="text-cadet text-sm leading-relaxed mb-4">
          {property.description}
        </p>

        {/* Property Details */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-cadet">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span className="font-semibold">{property.bedrooms}</span>
            <span>Bedrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span className="font-semibold">{property.bathrooms}</span>
            <span>Bathrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span className="font-semibold">{property.square_feet}</span>
            <span>Sq Ft</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
        {/* Agent Info */}
        <div className="flex items-center gap-3">
          <img 
            src={property.agent_avatar} 
            alt={property.agent_name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-dark-jungle-green text-sm hover:text-orange-soda transition-colors cursor-pointer">
              {property.agent_name}
            </p>
            <p className="text-xs text-cadet">{property.agent_title}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-cultured-2 hover:bg-orange-soda text-cadet hover:text-white rounded flex items-center justify-center transition-colors">
            <Maximize className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-cultured-2 hover:bg-orange-soda text-cadet hover:text-white rounded flex items-center justify-center transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-cultured-2 hover:bg-orange-soda text-cadet hover:text-white rounded flex items-center justify-center transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}