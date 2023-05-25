import Spinner from 'react-bootstrap/Spinner';

export default function Loader({ visible }) {
  return (
    <>
      {visible && (
        <div className="loader" data-testid="loader">
          <Spinner animation="border" role="status" style={{ width: '4rem', height: '4rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
}
