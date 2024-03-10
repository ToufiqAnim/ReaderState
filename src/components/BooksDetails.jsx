import { useParams } from 'react-router-dom';

const BooksDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>DETAILS</div>;
};

export default BooksDetails;
