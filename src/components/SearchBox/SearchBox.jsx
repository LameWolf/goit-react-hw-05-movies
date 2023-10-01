import { useSearchParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Wrapper, SearchForm, Input, SearchFormBtn } from './SearchBox.styled';

export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const onSubmit = evt => {
    evt.preventDefault();
    const query = evt.currentTarget.query.value.trim().toLowerCase();
    if (!query) {
      toast.warning('The request cannot be empty! Enter movie name to search!');
      return;
    }
    setSearchParams({ query });
  };
  return (
    <Wrapper>
      <SearchForm onSubmit={onSubmit}>
        <Input type="text" name="query" placeholder="" />
        <SearchFormBtn>
          <IconContext.Provider value={{ color: 'blue', size: '3em' }}>
            <FcSearch />
          </IconContext.Provider>
        </SearchFormBtn>
      </SearchForm>
    </Wrapper>
  );
};
