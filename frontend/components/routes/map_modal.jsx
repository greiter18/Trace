import React from 'react';
import ReactDOM from 'react-dom';
//  start_long:this.props.cords[0].lng || '',
//  start_lat:this.props.cords[0].lat || '',
//  end_long:this.props.cords[1].lng || '',
//  end_lat:this.props.cords[1].lat || ''


class MapModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:'',
    }
  }
  // componentDidUpdate(){
  //   this.setState(
  //     {['start_long']: this.props.cords[0]?.lng,
  //     ['start_lat']: this.props.cords[0]?.lat,
  //     ['end_long']: this.props.cords[1]?.lng,
  //     ['end_lat']: this.props.cords[1]?.lat}
  //     )
  // }
  handleSubmit(e){
    e.preventDefault();
    this.props.createRoute({
      title: this.state.title,
      start_long:this.props.cords[0]?.lng,
      start_lat:this.props.cords[0]?.lat,
      end_long:this.props.cords[1]?.lng,
      end_lat:this.props.cords[1]?.lat,
      user_id: this.props.session?.id
    })
  }

  handleChange(field){
    return e => {
        this.setState({[field]: e.target.value})
    }
  }

 
  render(){
    // const log = this.props.cords[0].lat !== undefined ?
    // console.log('log----------',this.props.cords[0]['lat'])
    // : null
    let beginPoint = this.props.cords[0];
    let endPoint = this.props.cords[1];

    return (
      <div>
        <h1>My Route</h1> 
        <form onSubmit={this.handleSubmit}>
          <label> Route Name
           <input type="text" onChange={this.handleChange('title')}/>
          </label>
          {/* <label> Description
            <textarea type="text" onChange={this.handleChange('description')} placeholder={'Add some more details or notes'}/>
          </label> */}
          <h1>Edit Route</h1>
          <button>Save to My Routes</button>
          {/* {console.log('modal cords----------',this.props.cords)}
          {console.log('modal startcords----------',beginPoint)}
          {console.log('modal endcords----------',endPoint)}
          {console.log('modal session----------',this.props.session)} 
          {console.log('modal startcords----------',beginPoint?.lat)}
          {console.log('modal startcords----------',beginPoint?.lng)}
          {console.log('modal endcords----------',endPoint?.lat)} 
          {console.log('modal endcords----------',endPoint?.lng)}  */}
          {console.log('modal session----------',this.props.session?.id)}  
          
        </form>
      </div>
    )
  }
}

export default MapModal;