import {Component,Fragment} from "react";
import {NavLink} from "react-router-dom";

/*
        React 기본
            동작
            변수 선언
            이벤트 처리
            화면 변경

 */
class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to={"/"}>React</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">서울 여행
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><NavLink to={"/seoul/location"}>서울 명소</NavLink></li>
                                <li><NavLink to={"/seoul/nature"}>자연&관광</NavLink></li>
                                <li><NavLink to={"/seoul/shop"}>서울 쇼핑</NavLink></li>
                            </ul>
                        </li>
                        <li><a href="#">커뮤니티</a></li>
                    </ul>
                </div>
            </nav>
        )
    }

}
export default Header;