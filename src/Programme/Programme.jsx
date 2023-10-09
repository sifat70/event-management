import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Programme = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-7 w-[90%] mx-auto">
                <h1 className="text-5xl font-bold italic  text-center text-green-400">Our Memorial Programme</h1>

                <div className="mt-7">
                    <iframe width="734" className="w-full" height="413" src="https://www.youtube.com/embed/kU4Sj9WbR0I" title="DIY WEDDING PROGRAMS | DIY CEREMONY PROGRAMS 💍✨" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Programme;