import { Container } from '~/components';

import GlobalStyles from '~/styles/globalStyles';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default App;
