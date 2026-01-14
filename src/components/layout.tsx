import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Socials from "./Socials/Socials";

interface LayoutProps {
  onContactClick?: () => void;
  children: React.ReactNode;
}

function Layout({ onContactClick, children }: LayoutProps) {
  return (
    <>
      <div className="app-container">
        <div className="navigation">
          <Navigation onContactClick={onContactClick} />
        </div>
        <div>
          <Socials />
        </div>
        {children}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
