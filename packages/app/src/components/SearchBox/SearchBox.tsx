import { MDBInput } from 'mdb-react-ui-kit';
import { useDebounce } from './useDebounce';

export default function SearchBox({value, setValue}: {value: string, setValue: React.Dispatch<React.SetStateAction<string>>}) {
  

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
