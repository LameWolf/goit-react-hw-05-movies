import { MagnifyingGlass } from 'react-loader-spinner';
import s from 'styled-components';

const WrapperLoader = s.div`
display: block;
margin: 0 auto;
`;

const Loader = () => {
  return (
    <WrapperLoader>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </WrapperLoader>
  );
};

export default Loader;
