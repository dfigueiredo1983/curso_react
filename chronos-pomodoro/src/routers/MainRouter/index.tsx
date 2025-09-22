import { BrowserRouter, Routes, Route, useLocation } from 'react-router';

import { Home } from '../../pages/Home';
import { History } from '../../pages/History';
import { NotFound } from '../../pages/NotFound';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // console.log(`Atualizada a página para ${pathname}`);
    console.log(pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
        <Route path='/history/' element={<History />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
