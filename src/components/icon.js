import React from "react"
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa"

const Icon = ({ name }) => {
    switch (name) {
        case "circle":
            return<FaRegCircle className="iocns" />;
            break;
        case "cross":
            return<FaTimes className="iocns" />;
            break;
        default:
            return<FaPen className="icons"/>
            break;
    }
};

export default Icon;