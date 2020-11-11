import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/add_to_cart';
import Shelf from '../components/shelf';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {

        const { cart } = this.props;
        
        const cartItems = cart.length && cart.map((item,idx)=>{
            return <li key={idx}> {item}</li>
        });

        return (
            <div>
                <div>
                    <h2>Estanteria</h2>
                    <Shelf addItem={this.props.actions.addToCart}></Shelf>
                </div>
                <h2>Items en la estanteria</h2>
                <ol>
                    {cartItems}
                </ol>
            </div>    
        )
    }
}

function mapStateToProps(state,props){
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(CartActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);