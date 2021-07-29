import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';


class DetailsWithPrice extends Component {

    constructor (props) {
        super (props)
        this.state = {
            open:false,
            quantity:1,
            stock: 'InStock',
            nav3: null
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.setState({
            nav3: this.slider3
        });
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.item.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){
        const {symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked} = this.props

        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div className="col-lg-6 rtl-text">
                <div className="product-right">
                    <h2> Product Name</h2>
                    <h4>
                        <del>{symbol}{item.price}</del>
                        <span>{item.discount}% off</span></h4>
                    <h3>{symbol}{item.price-(item.price*item.discount/100)}  <span className="kk1" >Get latest Price</span></h3>
					<p>Payment method credit ,cash,chequee,bank transfer,lc,Advance payment,payment on delivery,by credit card(POS)machine</p>
					<p>SKU 4526627</p>
					
					     
                                <p>Minimum order...(100)</p>
                    {item.variants?
                    <ul >
                        <Slider {...colorsnav} asNavFor={this.props.navOne} ref={slider => (this.slider1 = slider)} className="color-variant">
                            {item.variants.map((vari, i) => {
                                return <li className={vari.color} key={i} title={vari.color}></li>
                            })}
                        </Slider>
                    </ul>:''}
                    <div className="product-description border-product">
                       <div className="">
                        <h6 className="product-title">Product Description</h6>
                        <p>{item.shortDetails}</p>
						<div class="tab-pane fade mt-4 show active react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0"><table class="table table-striped mb-0"><tbody><tr><th>Brand :</th><td>Flbu-1903</td></tr><tr><th>Model No :</th><td>20mm</td></tr><tr><th>material </th><td>X-small,small/medium</td></tr><tr><th>Size :</th><td>Polyester fabric</td></tr></tbody>
						</table>
						<a className="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity)}>Send a Enquiry</a></div>
						<br/>
						 
                    </div>
                        <span className="instock-cls">{this.state.stock}</span>
                        <h6 className="product-title">quantity</h6>
                        <div className="qty-box">
                            <div className="input-group">
                                  <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                     <i className="fa fa-angle-left"></i>
                                    </button>
                                  </span>
                                <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeQty} className="form-control input-number" />
                                <span className="input-group-prepend">
                                <button type="button" className="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                <i className="fa fa-angle-right"></i>
                                </button>
                               </span>
                            </div>
                        </div>
						
                    </div>
                    <div className="product-buttons" >
                         <a href="https://www.google.com" target="_blank"><i className="fa fa-file-pdf-o fa-2x"></i> Product Catlog</a><p></p>
                        <a className="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity)}>CONTACT SELLER</a>
                        <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >GET BEST PRICE</Link>
						 
                    </div>
                    
                    <div className="border-product">
                        <h6 className="product-title">share it</h6>
                        <div className="product-icon">
                            <ul className="product-social">
                                <li><a class="facebook" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                
                                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
								<li><a href="https://plus.google.com/discover" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                            </ul>
                               
                        </div>
                    </div>
                    
                </div>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                            </div>
                            <div className="modal-body">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}


export default DetailsWithPrice;