import React, { Component } from 'react';
import {connect} from 'react-redux';
import { huyGheAction } from '../../redux/dat-ve/dat-ve.action';

class ThongTinDatVe extends Component {
  render() {
    return (
        <div>
      <div className='mt-5'>
        <button className='gheDuocChon '></button> 
        <span style={{
            marginLeft: "10px",
            fontSize:"25px",
        }} 
        className='text-light'>Ghế đã đặt</span>
        <br/>
        <button className='gheDangChon'></button> 
        <span style={{
            marginLeft: "10px",
            fontSize:"25px",
        }} 
        className='text-light'>Ghế đã đặt</span>
        <br/>
        <button 
        style={{

            marginLeft: 0,
        }}
        className='ghe'></button> 
        <span style={{
            marginLeft: "10px",
            fontSize:"25px",
            
        }} 
        className='text-light'>Ghế đã đặt</span>
      </div>


      <div className='mt-5' style={{backgroundColor: "transparent"}}>
                <table  className="table" border="2">
                    <thead >
                        <tr >
                            <th className='text-white'>Số ghế</th>
                            <th className='text-white'>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                          return <tr key={index}>
                            <td className='text-warning'>{gheDangDat.soGhe}</td>
                            <td className='text-warning'>{gheDangDat.gia}</td>
                            <td>
                              <button 
                              onClick={()=>{
                                this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                              }}
                              className='btn btn-access text-white btn-delete'>Hủy</button>
                            </td>
                          </tr>
                        })}
                    </tbody>
                    <tfoot>
                      <tr >
                        <td></td>
                        <td className='text-warning'>Tổng tiền</td>
                        <td className='text-warning'>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                            return tongTien += gheDangDat.gia;
                        },0).toLocaleString()} VNĐ</td>
                      </tr>
                    </tfoot>
                </table>

      </div>

    </div>




        
    )
  }
}

const mapStateToProps = state =>{
  return {
    danhSachGheDangDat : state.DatVeReducer.danhSachGheDangDat,
  }
}

export default connect(mapStateToProps)(ThongTinDatVe);
