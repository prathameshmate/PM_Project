import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import { useDispatch, useSelector } from "react-redux";
import { add_To_Cart, remove_From_Cart } from '../Redux/actions';
import { add_To_Wishlist, remove_From_Wishlist } from '../Redux/actions';

const Product = (props: any) => {

    const { id, name, price, img } = props.item;
    const [isAddedCart, updateIsAddedCart] = useState(false);
    const [isAddedWishList, updateIsAddedWishlist] = useState(false);
    const dispatch = useDispatch();

    const myState = useSelector((state) => state.cart);
    const myState1 = useSelector((state) => state.wishlist);
    // console.log('===================myState=================');
    // console.log(myState);
    // console.log('====================================');
    // console.log('===================myState1=================');
    // console.log(myState1);
    // console.log('====================================');

    useEffect(() => {
        let flag = true;
        for (let i = 0; i < myState.length; i++) {
            if (myState[i].name === name) {
                updateIsAddedCart(true);
                flag = false;
                break;
            }
        }
        if (flag) {
            updateIsAddedCart(false);
        }
    }, [myState])

    useEffect(() => {
        let flag = true;
        for (let i = 0; i < myState1.length; i++) {
            if (myState1[i].name === name) {
                updateIsAddedWishlist(true);
                flag = false;
                break;
            }
        }
        if (flag) {
            updateIsAddedWishlist(false);
        }
    }, [myState1])

    //cart handles
    const handleAddCart = () => {
        dispatch(add_To_Cart(props.item))
    }
    const handleRemoveCart = (id: any) => {
        dispatch(remove_From_Cart(id))
    }

    // wishlist handles
    const handleAddWishlist = () => {
        dispatch(add_To_Wishlist(props.item))
    }
    const handleRemoveWishlist = (id: any) => {
        dispatch(remove_From_Wishlist(id))
    }

    return (
        <>
            <View style={{
                width: 200, height: 200, borderRadius: 15, backgroundColor:
                    "#fff", elevation: 5, marginRight: 10, marginBottom: 10,
            }}>
                <Image source={img} style={{ width: "100%", height: "60%", borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", paddingLeft: 10, paddingTop: 10 }}>{name}</Text>
                <View style={{
                    paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent:
                        "space-between", alignItems: "center"
                }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "green" }}>{price} <Icon name='rupee' size={18} color="#000" /></Text>
                    {
                        isAddedCart ?
                            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, padding: 5, backgroundColor: "#fff", elevation: 5 }} onPress={() => { handleRemoveCart(id) }}>
                                <Text style={{ fontWeight: "bold", color: "red" }} >Remove From Cart</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, padding: 5, backgroundColor: "#fff", elevation: 5 }} onPress={handleAddCart}>
                                <Text style={{ fontWeight: "bold", color: "blue" }} >Add to cart</Text>
                            </TouchableOpacity>

                    }
                </View>
                {
                    isAddedWishList ?
                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#fff", elevation: 5, position: "absolute", top: 10, right: 10, justifyContent: "center", alignItems: "center" }} onPress={() => { handleRemoveWishlist(id) }}>
                            <Icon name='heart' size={25} color="red" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#fff", elevation: 5, position: "absolute", top: 10, right: 10, justifyContent: "center", alignItems: "center" }} onPress={handleAddWishlist}>
                            <Icon name='heart-o' size={25} color="#000" />
                        </TouchableOpacity>
                }

            </View>
        </>
    );
}

export default Product;
