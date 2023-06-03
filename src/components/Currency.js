import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Currency.css";

const Currency = () => {
    const { currency } = useContext(AppContext);
    const labelMap = { "$": "", "£": "£ Pound", "€": "€ Euro", "₹": "₹ Ruppee" };
    const label = labelMap[currency];
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={
                {
                    backgroundColor: "lightgreen",
                    border: "none"
                }
                }>
                Currency ({label})
            </Dropdown.Toggle>
    
            <Dropdown.Menu style={{backgroundColor: "lightgreen"}}>
                <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
                <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        // <div class="alert alert-success">
        //     <label>Currency (
        //         <select id="select-currency" class="btn dropdown dropdown-toggle">
        //             <option class="dropdown-item" value="$">$ Dollar</option>
        //             <option class="dropdown-item" value="£">£ Pound</option>
        //             <option class="dropdown-item" value="€">€ Euro</option>
        //             <option class="dropdown-item" value="₹">₹ Ruppee</option>
        //         </select>
        //     )</label>
        // </div>
        );
};
export default Currency;
