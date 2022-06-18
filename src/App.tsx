import { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutHome } from './layout/LayoutHome';
import { LayoutProfile } from './layout/LayoutProfile';

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/twitter-clone/">
            <Route index element={<LayoutHome />} />

            <Route path="perfil" element={<LayoutProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
