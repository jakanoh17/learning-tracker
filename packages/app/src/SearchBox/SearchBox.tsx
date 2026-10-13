import { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { useDebounce } from './useDebouce';

export default function SearchBox() {
  const [value, setValue] = useState('');

  return (
    <div className="p-4">
      <MDBInput
        value={useDebounce(value, 500)}
        onChange={(e) => setValue(e.target.value)}
        label="Search Topics"
        id="search"
        type="text"
      />
    </div>
  );
}
