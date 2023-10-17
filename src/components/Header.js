import React,{useState}  from "react";
import {Select, MenuItem} from '@material-ui/core'

const Header=()=>{
    const [items, setItems]=useState("")
    function categories(e,value){
        setItems(e.target.value)
    }
    return(
        <>
            <div className="header">
                <div className="head_cont"> 
                    <div className="logo">
                        <img src="lakme.webp" style={{height:"40px", marginRight:"90px"}}></img>
                    </div>
                    <div className="info">
                        <div className="cate">
                            <Select
                                value={items}
                                displayEmpty
                                onChange={categories}
                                style={{fontFamily:"sans-serif", color:"white", fontSize:"14px"}}
                            >   
                            <MenuItem value="">CATEGORIES</MenuItem> 
                                <MenuItem value={1}>Lips</MenuItem>
                                <MenuItem value={2}>Eyes</MenuItem>
                                <MenuItem value={3}>Face</MenuItem>
                                <MenuItem value={4}>Nails</MenuItem>                                                        
                            </Select>
                        </div>
                        <div className="trend">TRENDING NOW</div>
                        <div className="combo">COMBOS</div>
                        <div className="blog">BLOG</div>
                        <div className="help">
                        <Select
                                value={items}
                                displayEmpty
                                onChange={categories}
                                style={{fontFamily:"sans-serif", color:"white", fontSize:"14px"}}
                            >   
                            <MenuItem value="">HELP</MenuItem> 
                                <MenuItem value={1}>FAQ</MenuItem>
                                <MenuItem value={2}>TRENDS</MenuItem>
                                <MenuItem value={3}>JOIN THE CLUB</MenuItem>
                                <MenuItem value={4}>TRACK ORDER</MenuItem> 
                                <MenuItem value={5}>CANCEL ORDER</MenuItem>                                                       
                            </Select>
                        </div>
                    </div>
                    <div className="personal">
                        <div className="car"></div>
                        <div className="person"></div>
                        <div className="search"></div>
                        <div className="bag"></div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Header;