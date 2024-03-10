import Books from './Books';

const Home = () => {
  return (
    <div className="container mx-auto my-10">
      <span className="bg-black text-white p-4">All Books</span>
      <Books />
    </div>
  );
};

export default Home;
