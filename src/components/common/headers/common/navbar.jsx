import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { right: '0px' }
        }
    }

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px' } })
        }
    }

    openNav() {
        console.log('open')
        this.setState({ navClose: { right: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { right: '-410px' } })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;
            
        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    render() {
        const { translate } = this.props;
        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav" >
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {translate('home')}
                                   
                                </Link>
                                
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {('About')}
                                   
                                </Link>
                                
                            </li>
                            
                            <li className="mega-menu">
                                <Link to="#" className="dropdown" onClick={(e) => this.handleSubmenu(e)}>
                                    {'Products'}
                                    <span className="sub-arrow"></span>
                                </Link>
                                <div className="mega-menu-container" >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {('product')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><a href="#">product</a></li>
                                                             <li><a href="#">product</a></li>
                                                              <li><a href="#">product</a></li>
                                                               <li><a href="#">product</a></li>
                                                                <li><a href="#">product</a></li>
                                                                 <li><a href="#">product</a></li>
                                                                  <li><a href="#">product</a></li>
                                                                   <li><a href="#">product</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {('product')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <ul>
                                                            <li><a href="#">product</a></li>
                                                             <li><a href="#">product</a></li>
                                                              <li><a href="#">product</a></li>
                                                               <li><a href="#">product</a></li>
                                                                <li><a href="#">product</a></li>
                                                                 <li><a href="#">product</a></li>
                                                                  <li><a href="#">product</a></li>
                                                                   <li><a href="#">product</a></li>
                                                        </ul>}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {('Product')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                           <ul>
                                                            <li><a href="#">product</a></li>
                                                             <li><a href="#">product</a></li>
                                                              <li><a href="#">product</a></li>
                                                               <li><a href="#">product</a></li>
                                                                <li><a href="#">product</a></li>
                                                                 <li><a href="#">product</a></li>
                                                                  <li><a href="#">product</a></li>
                                                                   <li><a href="#">product</a></li>
                                                        </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {('product')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                           <ul>
                                                            <li><a href="#">product</a></li>
                                                             <li><a href="#">product</a></li>
                                                              <li><a href="#">product</a></li>
                                                               <li><a href="#">product</a></li>
                                                                <li><a href="#">product</a></li>
                                                                 <li><a href="#">product</a></li>
                                                                  <li><a href="#">product</a></li>
                                                                   <li><a href="#">product</a></li>
                                                        </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title">
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {('Product')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <ul>
                                                            <li><a href="#">product</a></li>
                                                             <li><a href="#">product</a></li>
                                                              <li><a href="#">product</a></li>
                                                               <li><a href="#">product</a></li>
                                                                <li><a href="#">product</a></li>
                                                                 <li><a href="#">product</a></li>
                                                                  <li><a href="#">product</a></li>
                                                                   <li><a href="#">product</a></li>
                                                        </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            {('Product')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <ul>
                                                            <li><a href="#">product</a></li>
                                                             <li><a href="#">product</a></li>
                                                              <li><a href="#">product</a></li>
                                                               <li><a href="#">product</a></li>
                                                                <li><a href="#">product</a></li>
                                                                 <li><a href="#">product</a></li>
                                                                  <li><a href="#">product</a></li>
                                                                   <li><a href="#">product</a></li>
                                                        </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        

<li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {('Brands')}
                                   
                                </Link>
                                
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {('Our Sellers')}
                                   
                                </Link>
                                
                            </li>
                            
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {('Blog')}
                                   
                                </Link>
                                
                            </li>
                            
                            <li >
                                <Link to="#" className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    {('Contact us')}
                                   
                                </Link>
                                
                            </li>
                            


                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(NavBar);