import React, { Component } from 'react';
import ThongTinDatVe from './thong-tin-dat-ve';
import HangGhe from './hang-ghe';

import "./style.css";

import dataDanhSachGhe from "../../data/danhSachGhe.json";

export default class DatVe extends Component {

  renderHangGhe=()=>{
    return dataDanhSachGhe.map((hangGhe,index)=>{
      return <div key={index} >
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
    })
  }


  render() {
    return (
      <div className='bookingMovie ' style={{
        position:"fixed",
        width:"100%",
        height:"100%",
        backgroundImage:"url('./image/bgmovie.jpg')",
        backgroundSize: "cover",
      }}>
        <div style={{
          position:'fixed',
          width: "100%", height:"100%",
          backgroundColor: "rgba(0,0,0,0.7) ",
        }}>
          <div className="row">
            <div className="col-8 ">
              <h1 style={{fontSize:45,}} className='text-warning display-4 text-center'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
              <p style={{
                fontSize:"25px",
              }} className='mt-3 text-light text-center'>Màn hình</p>
              <div className='' style={{               
                display:"flex", flexDirection: "column", justifyContent: "center",
              }}>
                
                <div className='screen'></div>
                {this.renderHangGhe()}
              </div>
              
            </div>

            <div className="col-4 ">
            <div style={{
              fontSize:"35px",
            }} className='text-light mt-2'>DANH SÁCH GHẾ BẠN CHỌN</div>
            
            <ThongTinDatVe/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
