import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const CategoryDetails = () => {
    const categories = useLoaderData();
    const { id } = useParams();
    const category = categories.find(category => category.id === id);
    console.log(category);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <div className="flex-1">
                    <img src={category.image} alt="" />
                </div>
                <div className="flex-1">
                    <p>{category.name}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;