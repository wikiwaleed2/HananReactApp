import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

export class QrCodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: '',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data && data.text && this.state.result == ''){
        console.log(data);
        this.setState({
            result: data.text,
          })
    }

    // this.setState({
    //   result: data,
    // })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    if(this.state.result == '')
    return(
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
    else{
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                Thanks
            </div>
        )
        
    }
  }
}