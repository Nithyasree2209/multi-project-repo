import Cardddd from "./Card"
import image from "../../assets/mine.jpeg"

function Homeeee() {
  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-bold font-serif text-purple-900 mb-8">
        Student
      </h1>

      {/* Responsive Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Cardddd name="Nithya" role="19AE070" imageUrl={image} />
        <Cardddd name="Siva" role="19AE071" imageUrl={image} />
        <Cardddd name="Adlin" role="19AE072" imageUrl={image} />
        <Cardddd name="Nandhini" role="19AE073" imageUrl={image} />
        <Cardddd name="Vishnu" role="19AE074" imageUrl={image} />
        <Cardddd name="Ilaya Bharathi" role="19AE075" imageUrl={image} />
        <Cardddd name="Veyilumuthu" role="19AE076" imageUrl={image} />
        <Cardddd name="Ganeshwari" role="19AE077" imageUrl={image} />
        <Cardddd name="Sangeetha" role="19AE078" imageUrl={image} />
        <Cardddd name="Vasu" role="19AE079" imageUrl={image} />
        <Cardddd name="Harshi" role="19AE080" imageUrl={image} />
        <Cardddd name="Dev" role="19AE081" imageUrl={image} />
      </div>
    </div>
  )
}

export default Homeeee;
