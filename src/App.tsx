import Card from "./components/card";

const INFO_CARD = {
  title: "order summary",
  image: "/images/illustration-hero.svg",
  description:
    "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
  plan: "annual plan",
  price: 59.99,
  time: "per year",
};

function App() {
  return (
    <div className="flex size-full min-h-screen items-center justify-center bg-background  bg-mobile bg-auto-100 bg-no-repeat md:bg-desktop">
      <Card infoCard={INFO_CARD} />
    </div>
  );
}

export default App;
