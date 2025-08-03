export default function SpotifyWidget() {
    return (
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-black">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }
  