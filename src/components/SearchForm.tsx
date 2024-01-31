import { Input } from "./ui/input";

const SearchForm = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchForm;
