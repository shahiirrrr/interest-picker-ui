"use client"

import { useState, useRef, useEffect } from "react"
import { Heart, ChevronDown } from "lucide-react"
import Image from "next/image"

const interests = [
  { id: 3, name: "Adventure", emoji: "⛺" },
  { id: 4, name: "Science", emoji: "🔬" },
  { id: 5, name: "Artist", emoji: "🎨" },
  { id: 6, name: "Ocean", emoji: "🌊" },
  { id: 7, name: "Design", emoji: "🏗️" },
  { id: 8, name: "Movie Buff", emoji: "🎬" },
  { id: 9, name: "Nature", emoji: "🌿" },
  { id: 10, name: "Gym & Fitness", emoji: "⛹️" },
  { id: 11, name: "Sports", emoji: "🏃" },
  { id: 12, name: "Singer", emoji: "🎤" },
  { id: 13, name: "Dance", emoji: "🔥" },
  { id: 14, name: "Cycling", emoji: "🚴" },
  { id: 15, name: "UFO Enthusiast", emoji: "🛸" },
  { id: 16, name: "Swimming", emoji: "🏊" },
  { id: 17, name: "Cooking", emoji: "🍳" },
  { id: 18, name: "Photography", emoji: "📸" },
  { id: 19, name: "Astrology", emoji: "🔭" },
  { id: 20, name: "Travel", emoji: "✈️" },
  { id: 21, name: "Beach", emoji: "🏖️" },
  { id: 22, name: "Stargazing", emoji: "⭐" },
  { id: 23, name: "Road trip", emoji: "🛣️" },
]

// Get all unique emojis from interests
const allEmojis = Array.from(new Set(interests.map(interest => interest.emoji)))
const defaultEmoji = '😊' // Default smiley emoji

export default function InterestSelection() {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEmoji, setSelectedEmoji] = useState(defaultEmoji)
  const [isEmojiOpen, setIsEmojiOpen] = useState(false)
  const emojiButtonRef = useRef<HTMLButtonElement>(null)
  const emojiDropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiDropdownRef.current && 
          emojiButtonRef.current &&
          !emojiDropdownRef.current.contains(event.target as Node) && 
          !emojiButtonRef.current.contains(event.target as Node)) {
        setIsEmojiOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleInterest = (id: number) => {
    setSelectedInterests((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredInterests = interests.filter((interest) => {
    const matchesSearch = interest.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesEmoji = selectedEmoji === defaultEmoji || interest.emoji === selectedEmoji
    return matchesSearch && matchesEmoji
  })

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Decorative Hearts - Top Right */}
      <div className="absolute top-32 right-30 text-pink-500 text-8xl opacity-100 pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
        <div className="relative">
          <div className="absolute -top-8 -right-1" style={{
            width: '107.5px',
            height: '107.5px',
            transform: 'rotate(10.54 deg)',
            opacity: 1
          }}>
            <Image
              src="/pink_double_heart.svg"
              alt="Decorative heart"
              width={107.5}
              height={107.5}
              className="w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl w-full mx-auto px-4 md:px-6 pt-14 pb-6 md:py-8 flex-1">
        {/* Greeting Section */}
        <div className="text-center mb-4 md:mb-8">
          <h1
            className="text-balance mb-2 md:mb-3"
            style={{
              fontFamily: '"Anek Devanagari", sans-serif',
              fontWeight: 500,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '0.05em',
              wordSpacing: '0.15em',
              textAlign: 'center',
              fontFeatureSettings: '"pnum" on, "lnum" on',
              transform: 'scaleX(1.05)',
            }}
          >
            Hey, Arnav L.!
          </h1>
          <div className="text-center">
            <p
              className="text-gray-100 hidden md:block"
              style={{
                fontFamily: '"Anek Devanagari", sans-serif',
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '100%',
                letterSpacing: '0.05em',
                wordSpacing: '0.15em',
                textAlign: 'center',
                fontFeatureSettings: '"pnum" on, "lnum" on',
                marginTop: '16px',
                transform: 'scaleX(1.05)'
              }}
            >
              Time to pick your interests!
            </p>
            <p
              className="text-gray-100 md:hidden"
              style={{
                fontFamily: '"Anek Devanagari", sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '1.2',
                letterSpacing: '0.04em',
                textAlign: 'center',
                fontFeatureSettings: '"pnum" on, "lnum" on',
                marginTop: '16px',
                whiteSpace: 'pre-line'
              }}
            >
              Time to pick your
              <br />
              interests!
            </p>
          </div>
        </div>

        {/* Search and Emoji Selector */}
        <div className="flex flex-row gap-2 md:gap-4 mb-4 md:mb-6 max-w-2xl mx-auto px-2 md:px-0 justify-center items-center">
          {/* Emoji Dropdown */}
          <div className="relative flex justify-center" style={{ zIndex: 100 }}>
            <button
              ref={emojiButtonRef}
              onClick={() => setIsEmojiOpen(!isEmojiOpen)}
              aria-expanded={isEmojiOpen}
              aria-haspopup="true"
              aria-label="Toggle emoji picker"
              className="flex items-center justify-between gap-2 px-4 py-3 border border-[#EDF1F3] border-opacity-30 bg-transparent hover:bg-yellow-400/10 transition-all text-lg md:text-base max-[360px]:w-full"
              style={{
                width: '77px',
                height: '42px',
                borderRadius: '8px',
                borderWidth: '1.17px',
                opacity: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="flex-1 flex justify-center">
                {selectedEmoji === defaultEmoji ? '😊' : selectedEmoji}
              </span>
              <ChevronDown className="w-5 h-5 flex-shrink-0" />
            </button>

            {isEmojiOpen && (
              <div
                className="absolute left-0 right-0 mx-auto mt-2 bg-gray-900 border border-[#EDF1F3] border-opacity-20 rounded-lg p-3 w-[300px] sm:w-[350px] overflow-hidden shadow-lg"
                style={{
                  borderWidth: '1.17px',
                  maxHeight: 'min(400px, 70vh)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  top: 'calc(100% + 0.5rem)',
                  zIndex: 1000
                }}
                ref={emojiDropdownRef}
              >
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-700">
                  <h3 className="text-white font-medium">Select Emoji</h3>
                  <button 
                    onClick={() => setIsEmojiOpen(false)}
                    className="text-gray-400 hover:text-white p-1"
                    aria-label="Close emoji picker"
                  >
                    ×
                  </button>
                </div>
                <div 
                  className="grid grid-cols-5 gap-2 pr-2 custom-scrollbar"
                  style={{
                    maxHeight: 'calc(70vh - 80px)',
                    overflowY: 'auto',
                    paddingRight: '4px',
                    scrollbarGutter: 'stable'
                  }}
                >
                  <style jsx global>{`
                    .custom-scrollbar {
                      scrollbar-width: thin;
                      scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 6px;
                      height: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: transparent;
                      border-radius: 10px;
                      margin: 4px 0;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background-color: rgba(255, 255, 255, 0.2);
                      border-radius: 10px;
                      border: 2px solid transparent;
                      background-clip: padding-box;
                      transition: background-color 0.2s ease;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background-color: rgba(255, 255, 255, 0.3);
                    }
                    .custom-scrollbar::-webkit-scrollbar-corner {
                      background: transparent;
                    }
                  `}</style>
                  <button
                    key="all"
                    onClick={() => {
                      setSelectedEmoji(defaultEmoji)
                      setIsEmojiOpen(false)
                    }}
                    className={`text-2xl p-2 rounded transition flex items-center justify-center aspect-square ${selectedEmoji === defaultEmoji
                        ? 'bg-gray-700'
                        : 'hover:bg-gray-700'
                      }`}
                    style={{
                      fontSize: '1.5rem',
                      lineHeight: '1',
                    }}
                  >
                    {defaultEmoji}
                  </button>
                  {allEmojis.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => {
                        setSelectedEmoji(emoji)
                        setIsEmojiOpen(false)
                      }}
                      className="text-2xl p-2 hover:bg-gray-700 rounded transition flex items-center justify-center aspect-square"
                      style={{
                        fontSize: '1.5rem',
                        lineHeight: '1',
                      }}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your interest"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 border border-[#EDF1F3] border-opacity-30 bg-transparent text-white focus:outline-none focus:border-opacity-60 transition-all w-[263px] h-[42px] rounded-lg max-[360px]:w-full"
              style={{
                fontFamily: 'Open Sans',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: 'white',
                borderWidth: '1.17px',
                opacity: 1,
              }}
            />
            <style jsx global>{`
              input::placeholder {
                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 100%;
                letter-spacing: -0.02em;
                color: #EDF1F3;
                opacity: 0.6;
              }
            `}</style>
          </div>
        </div>

        {/* Selected Interests Summary */}
        {filteredInterests.filter((i) => selectedInterests.includes(i.id)).length > 0 && (
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14 max-w-2xl mx-auto justify-center px-2 md:px-0">
            {filteredInterests
              .filter((i) => selectedInterests.includes(i.id))
              .map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  className="px-4 py-2 rounded-full border border-[#EDF1F3] hover:bg-white/20 transition-all flex items-center gap-2 text-sm md:text-base"
                  style={{
                    borderWidth: '1.17px',
                    borderColor: 'rgba(237, 241, 243, 0.3)',
                    opacity: '0.4'
                  }}
                >
                  <span className="inline-flex items-center justify-center w-[18.71px] h-[18.71px] text-[18.71px] leading-none">{interest.emoji}</span>
                  <span style={{
                    fontFamily: 'Open Sans',
                    fontWeight: 400,
                    fontSize: '14.03px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    fontStyle: 'normal'
                  }}>{interest.name}</span>
                </button>
              ))}
          </div>
        )}

        {/* Interest Section with Counter */}
        <div className="relative mb-8 md:mb-12 w-full lg:w-[780.61px] mx-auto px-0 md:px-4 lg:px-0">
          {/* Interest Pills Grid */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {filteredInterests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`px-4 py-1.5 md:px-5 rounded-full border transition-all flex items-center gap-2 whitespace-nowrap ${selectedInterests.includes(interest.id)
                    ? "border-[#EDF1F3] border-opacity-100 text-white"
                    : "border-[#EDF1F3] border-opacity-30 text-white/40 hover:border-opacity-60 hover:text-white/60"
                  }`}
                style={{
                  borderWidth: '1.17px',
                  height: '31.57px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Open Sans',
                  fontWeight: 400,
                  fontSize: '14.03px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  fontStyle: 'normal',
                  color: '#FFFFFF',
                  opacity: selectedInterests.includes(interest.id) ? '1' : '0.4'
                }}
              >
                <span className="inline-flex items-center justify-center w-[18.71px] h-[18.71px] text-[18.71px] leading-none mr-1">{interest.emoji}</span>
                <span>{interest.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Counter - Positioned at bottom right */}
          <div
            className="text-right mt-4 pr-2"
            style={{
              fontFamily: 'Open Sans',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '10px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              textAlign: 'right',
              color: '#EDF1F3',
            }}
          >
            {selectedInterests.length}/5 Selected
          </div>
        </div>

        {/* Continue Button - Mobile Only */}
        <div className="md:hidden flex justify-center">
          <button
            className="w-full max-w-xs bg-[#FFB700] hover:bg-[#FFC740] transition"
            style={{
              height: '40px',
              borderRadius: '42.81px',
              fontFamily: 'Open Sans',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Continue
          </button>
        </div>
      </main>
      {/* Decorative Heart - Bottom Left */}
      <div className="fixed -bottom-0 left-0 z-0 pointer-events-none hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/pink_pop_heart.svg"
            alt="Decorative heart"
            width={256}
            height={256}
            className="absolute bottom-0 left-0 w-auto h-auto max-w-none"
            style={{ objectFit: 'contain', objectPosition: 'left bottom' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}
