import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

export default function PageToggle<T extends string>({
  pages,
  page,
  setPage,
}: {
  pages: readonly T[];
  page: T;
  setPage: (page: T) => void;
}) {
  return (
    <div className="d-flex justify-content-center mb-3">
      <MDBBtnGroup className="shadow-0">
        {pages.map((p) => (
          <MDBBtn
            key={p}
            size="sm"
            color={page === p ? 'primary' : 'light'}
            onClick={() => setPage(p)}
          >
            {p}
          </MDBBtn>
        ))}
      </MDBBtnGroup>
    </div>
  );
}
