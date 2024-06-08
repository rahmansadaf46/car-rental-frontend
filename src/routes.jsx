import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const NotFound = lazy(() => import("./pages/NotFound"));
const Loader = lazy(() => import("./components/Loader"));
const ReservationForm = lazy(() => import("./pages/ReservationForm"));

export default function Routing() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<ReservationForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

