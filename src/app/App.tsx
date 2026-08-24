import Header from "../shared/components/header/Header";
import Footer from "../shared/components/footer/Footer";
import Sidebar from "../shared/components/sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="@container flex flex-row border">
      <div className="">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full border">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}
