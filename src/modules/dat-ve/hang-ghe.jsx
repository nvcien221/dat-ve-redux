import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.css';
import { datGheAction } from '../../redux/dat-ve/dat-ve.action';

class HangGhe extends Component {

  renderGhe = ()=>{
    return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
      let cssGheDaDat = '';
      let disable = false;
      if(ghe.daDat){
        cssGheDaDat = 'gheDuocChon';
        disable = true;
      }

      //xét trạng tthasi ghế đang đặt
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if(indexGheDangDat !== -1){
        cssGheDangDat = 'gheDangChon';
      }



      return <button 
      onClick={()=>{
        this.props.datGhe(ghe);
      }}
      disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
        {ghe.soGhe}
      </button>
    })
  }

  renderSoHang=()=>{
    return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
      return <button className='rowNumber' key={index}>
        {hang.soGhe}
      </button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className='ml-4'>
        {this.props.hangGhe.hang}
        {this.renderSoHang()}
      </div>
    } else {
      return <>
        {this.props.hangGhe.hang}
        {this.renderGhe()}
      </>
    }
  }

  render() {
    return (
      <div className='mt-3 text-light text-left'
      style={{fontSize:"25px", marginLeft: "5rem"}}>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    danhSachGheDangDat : state.DatVeReducer.danhSachGheDangDat
  }
}

const mapDespatchToProps = (dispatch)=>{
  return{
    datGhe: (ghe)=>{
      dispatch(datGheAction(ghe))
    }
  }
}

export default connect(mapStateToProps,mapDespatchToProps)(HangGhe);
