import React from 'react';
import ReactDOM from 'react-dom';

class MapModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      disabled: true
    }
    this.openModal = this.openModal.bind(this);
    this.toggleDisable = this.toggleDisable.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

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

  toggleDisable(e){
    if(e.target.value.length > 0){
      this.setState({
        disabled: false
      })
    } else {
      this.setState({
        disabled: true
      })
    }
  }

 
  render(){
    let beginPoint = this.props.cords[0];
    let endPoint = this.props.cords[1];

    return (
      <div className="modal-form">
        <div className='modal-top'>
          <h1 className="myRoute">My Route</h1> 
          <i className="fas fa-running"></i>
          <i className="far fa-star"></i>
        </div>
        <form id="routeModalForm" onSubmit={this.handleSubmit}>
          <label className='modal-text'> Route name (required) <br/>
           <input id="modalTitle" className="input-area" type="text" onChange={this.handleChange('title')} onChange={this.toggleDisable}/>
          </label> <br/>
          <label className='modal-text'> Description <br/>
            <textarea className="input-area" id="modal-description" type="text" onChange={this.handleChange('description')} placeholder={'Add some more details or notes'}/>
          </label>
          <div className="modal-fineprint">
            Public routes are for the whole Trace community to enjoy. 
            If you ever decide to delete your account, 
            please know that public route you create may remain. 
          </div>
          <div className='modal-buttons'>
            <h1 className="modal-edit-button" onClick={() => this.openModal()}>Edit Route</h1>
            <button id="modalSave" className="modal-save-button" disabled={this.state.disabled}>Save to My Routes</button>
            {console.log({
              title: this.state.title,
              start_long:this.props.cords[0]?.lng,
              start_lat:this.props.cords[0]?.lat,
              end_long:this.props.cords[1]?.lng,
              end_lat:this.props.cords[1]?.lat,
              user_id: this.props.session?.id
            })}
          </div>
        </form>
        {/* {console.log('modal startcords----------',beginPoint?.lng)} */}
      </div>
    )
  }
}

export default MapModal;

