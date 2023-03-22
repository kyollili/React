import {Component,useState,useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";

function FoodList(props){
        let {cno}=useParams()
            const [foodList,setFoodList]=useState([])
            const [cateInfo,setCateInfo]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/food/food_list_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost/food/category_info_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setCateInfo(response.data)
        })
    },{})
                return (
                    <div>
                            <h1>카테고리별 맛집 목록</h1>
                            <h3>카테고리 번호 받기:{cno}</h3>
                    </div>
                )


}
export default FoodList;