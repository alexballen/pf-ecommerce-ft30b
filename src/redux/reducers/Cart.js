import { createSlice } from "@reduxjs/toolkit";




const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    Cartitems: [],
    Comprados: [],
    paymenturl: "",
    pagarcarrito: "",
    total: 0 ,
    info: {},
  },
  reducers: {
    getusercart(state, action) {
      state.Cartitems = action.payload;
    },

    agregaracart(state, action) {
      const filterdItem = [...state.Cartitems.filter(item => item.id === action.payload.id)]
      const allproducts = [
          ...state.Cartitems.filter((item) => item.id !== action.payload.id)
      ]

      if (filterdItem[0]) {
        filterdItem[0].quantity += action.payload.quantity;
        const setProducts = [...allproducts, filterdItem[0]]
        state.Cartitems = setProducts
      } else {
        state.Cartitems = [...state.Cartitems,  action.payload]
      }
       
    },
    limpiarcart(state) {
      state.Cartitems = [];
    },
    quitaritem(state, action) {
      state.Cartitems = [
        ...state.Cartitems.filter((e) => e.id !== action.payload),
      ];
    },
    urlcarpayment(state, action) {
      state.paymenturl = action.payload;
      
    },
    totalapagar(state  ) {
      state.total = state.Cartitems.reduce((ac,e)=> ac+e.quantity * e.unitPrice,0)
    },
    comprartodolink(state, action) {
      state.pagarcarrito = action.payload;
    },
    clearlinks(state) {
      state.paymenturl = ""
      state.pagarcarrito = "";
    },
    info(state, action) {
      state.info = action.payload;
    },
    agregarcomprado(state, action) {
      state.Comprados = [...state.Comprados, action.payload];
    },
    
    updatecartitem(state, {payload}) {
    
      const id = payload.productId
      const qty = payload.qty
 
      // const altered = state.Cartitems.find((e)=> e.id === id)
      
      // altered.quantity = qty
      // const allproducts = state.Cartitems.filter((e)=> e.id !== id)

      // const all = [...allproducts,altered]

      state.Cartitems = state.Cartitems.filter((e)=> e.id === id? e.quantity = qty: e.quantity)
       
    }

    
  },
});

export const {
  getusercart,
  agregaracart,
  limpiarcart,
  quitaritem,
  urlcarpayment,
  totalapagar,
  comprartodolink,
  clearlinks,agregarcomprado,
  info,updatecartitem
} = CartSlice.actions;
export default CartSlice.reducer;
