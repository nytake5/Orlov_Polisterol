import Polisterol from './components/Polisterol/Polisterol';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Specifications from './components/Specifications/Specifications';
import Productions from './components/Productions/Productions';
import Ware from './components/Ware/Ware';
import Packaging from './components/Packaging/Packaging';
import ChildrenToys from './components/ChildrenToys/ChildrenToys';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Contacts from './components/Contacts/Contacts';


function App() {
  return (
    <div className="App">
      <Header />
      <Polisterol />
      <Specifications />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide> < Productions /> </SwiperSlide>
        <SwiperSlide> < Ware /> </SwiperSlide>
        <SwiperSlide> < Packaging /> </SwiperSlide>
        <SwiperSlide> < ChildrenToys /> </SwiperSlide>
      </Swiper>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;
