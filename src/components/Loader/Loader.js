import LoaderSpinner from 'react-loader-spinner';
const Loader = () => (
  <div>
    <LoaderSpinner
      className="loader"
      type="TailSpin"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={100000}
    />
  </div>
);

export default Loader;
