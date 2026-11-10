import { MDBSpinner } from 'mdb-react-ui-kit';

export default function PageSpinner({ label }: { label: string }) {
  return (
    <div className="d-flex justify-content-center py-5">
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading {label}…</span>
      </MDBSpinner>
    </div>
  );
}
