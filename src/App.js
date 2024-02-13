import MainRoutes from "./routes/MainRoutes";
import PaginationAllCard from "./pages/Pagination";
// BrowserRouter он обеспечивает всех дочерних компонентов
// MuRoutes в нем находится наши пути
const App = () => {
  return (
    <div>
      <MainRoutes />
      {/* <PaginationAllCard /> */}
    </div>
  );
};

export default App;
