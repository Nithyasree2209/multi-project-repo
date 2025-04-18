import girl from "../src/assets/FPGirl.png";

function Home() {
  return (
    <div className="flex items-center space-x-8">
      <div className="w-1/2">
        <img src={girl} className="w-140" alt="Coding Girl" />
      </div>
      <div className="w-1/2 ml-8"> {/* Add ml-8 to move the paragraph left */}
        <p className="text-2xl font-semibold font-serif">
          <span className="text-pink-600">Coding</span> is the art of transforming ideas into functional solutions. It involves <span className="text-pink-600">problem-solving</span>, <span className="text-pink-600">creativity</span>, and continuous learning. By mastering <span className="text-pink-600">code</span>, we shape the future through <span className="text-pink-600">technology</span>.
        </p>
      </div>
    </div>
  );
}

export default Home;
