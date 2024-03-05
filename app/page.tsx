export default function Home() {
  return (
    <main>
      <div className="section">
        <div className="fixed">
          {/* I use picsum for a random image but you could use youre own image here */}
          <img
            src="https://picsum.photos/seed/100/1920/1080"
            className="image"
          />

          <div className="grid">
            {/* Simple function to generate 15 divs */}
            {Array.from({ length: 5 * 3 }).map((_, idx) => (
              <div key={idx} className="grid-item" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
