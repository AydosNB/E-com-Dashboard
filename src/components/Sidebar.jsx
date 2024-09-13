import { SiDoordash } from "react-icons/si";
import React from 'react'
import Button from "./pageComp/Button";
import { btnData } from "../constants/conts";
import { Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-1 text-[22px] font-bold h-[40px] text-indigo-600">
                <SiDoordash />
                <span>Dashboard</span>
            </div>
            <hr className="my-[10px]" />
            <div className="flex flex-col gap-2">
                {btnData.map(item => (
                    <Link to={item.path} key={item.id}>
                        <Button item={item} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
