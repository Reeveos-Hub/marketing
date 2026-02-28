// ReeveOS Homepage
// This file will be built out by Cursor from the Figma design.
// See .cursorrules for brand tokens and section structure.

export default function App() {
  return (
    <div className="min-h-screen bg-reeve-black text-reeve-white font-sans">
      {/* Cursor: Build all 11 sections from the Figma design */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-reeve-gold text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Ready for Cursor
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Reeve<span className="text-reeve-gold">OS</span>
          </h1>
          <p className="text-reeve-grey max-w-md mx-auto">
            Open this project in Cursor, paste the Figma link, and tell it to build the homepage.
          </p>
        </div>
      </div>
    </div>
  )
}
