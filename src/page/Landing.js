import Hero from "../components/Hero/hero";
import Companylogo from "../components/Companylogo/companylogo";
import Tailor from "../components/Tailor/tailor";
import Real from "../components/Real/real";
import Achievement from "../components/Achievement/achievement";
import Phone from "../components/Phone/phone";
import Enter from "../components/Enter/enter";
import Manage from "../components/Manage/manage";
import Footer from "../components/Footer/footer";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Companylogo />
      <Tailor />
      <Real />
      <Achievement />
      <Phone />
      <Enter />
      <Manage />
      <Footer />
    </main>
  );
};

export default LandingPage;