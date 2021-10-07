export const initialState={
    user:null,
    playlists:[],
    playing:false,
    player:null,
    item:null,
    discover:null,
    token:null
    // token:'BQDqi1Zp5Mq2wt7OqC68r3PdWQ-64WD-yxYZ9SjC0NYRNUFE5lPKx263BAlmnOjxMPDgLzhXRONJTux4zfsfkGCWV1O-GNQa8aaSmc5U4s-Ucrmcq_mDMAKoh3kZV-jePfcv0mbBVbXiDXmzi7PgXp70Q1_dbkyDyI_R5_m9jN0nbBtt'
   

}



 const reducer =(state,action) =>{
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "SET_PLAYING":
        return {
            ...state,
            playing:action.playing
        }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token
                }   
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
                }  
        case "SET_PLAYER":
            return {
            ...state,
            player:action.players
        }
                
        case "SET_DISCOVER":
            return {
                ...state,
                discover:action.discover
                }
        case "SET_ITEM":
             return {
            ...state,
            item:action.trackToPlay
            }
            
        default:
            return state;
    }
}

export default reducer;