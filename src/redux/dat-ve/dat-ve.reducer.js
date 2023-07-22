import { DAT_GHE, HUY_GHE } from "./dat-ve.const";


const stateDefault = {
    danhSachGheDangDat : [

    ]
}

const DatVeReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case DAT_GHE:{
            let dsGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = dsGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){
                dsGheDangDatUpdate.splice(index,1);
            }else{
                dsGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = dsGheDangDatUpdate;

            return {...state}
        }

        case HUY_GHE:{
            let dsGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = dsGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index !== -1){
                dsGheDangDatUpdate.splice(index,1);
            }
            state.danhSachGheDangDat = dsGheDangDatUpdate;
            return {...state}

        }



        default : 
            return {...state}
    }
}
export default DatVeReducer;

