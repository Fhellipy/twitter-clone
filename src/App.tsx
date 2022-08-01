import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutHome } from './layout/LayoutHome';
import { LayoutProfileUser } from './layout/LayoutProfileUser';
import { LayoutCommentsPost } from './layout/LayoutCommentsPost';
import { LayoutCatGenerator } from './layout/LayoutCatGenerator';
import { LayoutLogin } from './layout/LayoutLogin';

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/">
          
            <Route index element={<LayoutLogin />} />
            <Route path="home" element={<LayoutHome />} />

            <Route path="user/:userId" element={<LayoutProfileUser />} />

            <Route
              path="user/:userId/comments/:postId"
              element={<LayoutCommentsPost />}
            />

            <Route path="/cat_generator" element={<LayoutCatGenerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
