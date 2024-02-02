 const menuReducer = (state = {menuItems: []}, action) =>{

    switch(action.type){

        case "add":
        
        const productAlreadyAdded = state.menuItems.some((product) => product.id === action.payload.id )
            
        if(state.menuItems.length === 0){
            return {...state, menuItems: [action.payload]}
        }
        else{
            if(productAlreadyAdded){
                window.alert('Item já adicionado ao Menu')
                return state
            }
            else{
              
                return {...state, menuItems: [...state.menuItems, action.payload]}
            }
            
         }

        case 'remove':

        break
       


        default:
            return state;
    }



}

export default menuReducer;