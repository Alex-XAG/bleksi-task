import RadixUI from 'pages/RadixUI';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Shadcn from 'pages/Shadcn';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RadixUI />} />
        <Route path="/shadcn" element={<Shadcn />} />
        <Route path="*" element={<RadixUI />} />
      </Route>
    </Routes>
  );
};
