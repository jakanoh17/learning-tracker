import { MDBInput } from 'mdb-react-ui-kit';

export default function SearchBox({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="p-4">
      <MDBInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Search Topics"
        id="search"
        type="text"
      />
    </div>
  );
}
