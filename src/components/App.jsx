import { Routes, Route} from 'react-router-dom';
import { HomePage } from 'pages/Home/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SharedLayout } from 'pages/Shared/SharedLayout';


export const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  );
};
