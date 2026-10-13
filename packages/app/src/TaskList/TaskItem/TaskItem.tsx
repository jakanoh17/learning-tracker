import { MDBListGroupItem } from 'mdb-react-ui-kit';
import type { ReactNode } from 'react';

export default function TaskItem({ children }: { children: ReactNode }) {
  return (
    <MDBListGroupItem
      className=" border-0 mb-2 rounded"
      style={{ backgroundColor: '#f4f6f7' }}
    >
      {children}
    </MDBListGroupItem>
  );
}
