import { MDBListGroupItem } from 'mdb-react-ui-kit';

export default function TaskItem({ children }: { children: React.ReactNode }) {
  return (
    <MDBListGroupItem
      className=" d-flex align-items-center border-0 mb-2 rounded"
      style={{ backgroundColor: '#f4f6f7' }}
    >
      {children}
    </MDBListGroupItem>
  );
}
