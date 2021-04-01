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
    this.openModal = this.openModal.bind(this);
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
    openModal(){
    document.querySelector('.modal').classList.toggle('open-modal');
    document.querySelector('.modal-background').classList.toggle('open-modal');
  }

 
  render(){
    // const log = this.props.cords[0].lat !== undefined ?
    // console.log('log----------',this.props.cords[0]['lat'])
    // : null
    let beginPoint = this.props.cords[0];
    let endPoint = this.props.cords[1];

    return (
      <div className="modal-form">
        <div className='modal-top'>
          <h1 className="myRoute">My Route</h1> 
          <i class="fas fa-running"></i>
          <i class="far fa-star"></i>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className='modal-text'> Route name (required) <br/>
           <input id="input-area" type="text" onChange={this.handleChange('title')}/>
          </label> <br/>
          <label className='modal-text'> Description <br/>
            <textarea id="input-area"className ="modal-description" type="text" onChange={this.handleChange('description')} placeholder={'Add some more details or notes'}/>
          </label>
          <div className="modal-fineprint">
            Public routes are for the whole Strava community to enjoy. 
            If you ever decide to delete your account, 
            please know that public route you create may remain. Learn More
          </div>
          <div className='modal-buttons'>
            <h1 className="modal-edit-button" onClick={() => this.openModal()}>Edit Route</h1>
            <button className="modal-save-button" >Save to My Routes</button>
          </div>
        </form>
        {/* {console.log('modal startcords----------',beginPoint?.lng)} */}
      </div>
    )
  }
}

export default MapModal;