"use client";
import useScrollObserver from "@/lib/useScrollObserver";

export default function Home() {
  const ref = useScrollObserver((element) => {
    element.style.setProperty(
      "--scroll-top",
      // from 1 at the top to 0 at the bottom of the page
      String(Math.max(0, 1 - (1 / element.clientHeight) * element.scrollTop))
    );
  });

  return (
    <main ref={ref}>
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
