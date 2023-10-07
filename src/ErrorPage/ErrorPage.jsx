import Navbar from "../Navbar/Navbar";


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center mt-12">
                <p className="text-3xl">Oops!!</p>
                <p>Sorry, an unexecuted error has ocurred</p>
            </div>
        </div>
    );
};

export default ErrorPage;