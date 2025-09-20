import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Home, User, LogOut } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import toast from 'react-hot-toast'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAdmin, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const { error } = await signOut()
    if (error) {
      toast.error('Error signing out')
    } else {
      toast.success('Signed out successfully')
      navigate('/')
    }
  }

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top Bar */}
      <div className="bg-prussian-blue text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>info@homeverse.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>15/A, Nest Tower, NYC</span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex gap-2">
                <a href="#" className="hover:text-orange-soda transition-colors">📘</a>
                <a href="#" className="hover:text-orange-soda transition-colors">🐦</a>
                <a href="#" className="hover:text-orange-soda transition-colors">📷</a>
                <a href="#" className="hover:text-orange-soda transition-colors">📌</a>
              </div>
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="bg-orange-soda px-4 py-1 rounded text-sm hover:bg-orange-600 transition-colors"
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-8 h-8 text-orange-soda" />
            <span className="text-2xl font-bold text-dark-jungle-green font-poppins">
              Homeverse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-dark-jungle-green hover:text-orange-soda transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-dark-jungle-green hover:text-orange-soda transition-colors font-medium">
              About
            </Link>
            <Link to="/properties" className="text-dark-jungle-green hover:text-orange-soda transition-colors font-medium">
              Properties
            </Link>
            <Link to="/blog" className="text-dark-jungle-green hover:text-orange-soda transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-dark-jungle-green hover:text-orange-soda transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-sm">{user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-orange-soda text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-dark-jungle-green hover:text-orange-soda transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-dark-jungle-green hover:text-orange-soda transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/properties" 
                className="text-dark-jungle-green hover:text-orange-soda transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/blog" 
                className="text-dark-jungle-green hover:text-orange-soda transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-dark-jungle-green hover:text-orange-soda transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="text-left text-red-600 hover:text-red-700"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-orange-soda hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}