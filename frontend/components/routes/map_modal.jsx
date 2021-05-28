import React from 'react';
import ReactDOM from 'react-dom';

class MapModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: this.props?.title,
      description: this.props?.description,
      disabled: true,
      id: this.props?.routeId
    }
    this.openModal = this.openModal.bind(this);
    this.toggleDisable = this.toggleDisable.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action({
      title: this.state.title,
      start_long:this.props.cords[0]?.lng,
      start_lat:this.props.cords[0]?.lat,
      end_long:this.props.cords[1]?.lng,
      end_lat:this.props.cords[1]?.lat,
      user_id: this.props.session?.id,
      image: this.props?.image,
      description: this.state.description,
      distance: 4,
      id: this.state?.id
    }).then(this.props.history?.push("/routes"));
  }

  handleChange(field){
    return e => {
        this.setState({[field]: e.currentTarget.value})
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
          <i id='runningMain' className="fas fa-running"></i>
          <i  id='star'className="fas fa-star"></i>
        </div>
        <form id="routeModalForm" onSubmit={this.handleSubmit}>
          <div className='modal-text'>
            <label> Route name (required) <br/>
            <input id="modalTitle" className="input-area" type="text" onChange={this.handleChange('title')} value={this.state.title} />
            </label> 
          </div>
          <div className='modal-text'>
            <label > Description <br/>
              <textarea className="input-area" id="modal-description" type="text" onChange={this.handleChange('description')} placeholder={'Add some more details or notes'} value={this.state.description}/>
            </label>
          </div>
          <div className="modal-fineprint">
            Public routes are for the whole Trace community to enjoy. 
            If you ever decide to delete your account, 
            please know that public route you create may remain. 
          </div>
          <div className='modal-buttons'>
            <h1 className="modal-edit-button" onClick={this.openModal}>Edit Route</h1>
            <button id="modalSave" className="modal-save-button" disabled={!this.state.title}>Save to My Routes</button>
            {/* {console.log({
              title: this.state.title,
              start_long:this.props.cords[0]?.lng,
              start_lat:this.props.cords[0]?.lat,
              end_long:this.props.cords[1]?.lng,
              end_lat:this.props.cords[1]?.lat,
              user_id: this.props.session?.id,
              image: this.props?.image,
              description: this.state?.description,
              distance: 4,
              id: this.state?.id
              
            },'action---------',this.props?.action)} */}
          </div>
        </form>
        {/* {console.log('modal startcords----------',beginPoint?.lng)} */}
      </div>
    )
  }
}

export default MapModal;

// const funcName = () => { 
//   openModal()
// }
// const openModal = () => {
//   return 7
// }
// funcName // => 7
// openModal // => 7

// const click = (callback) => {
//   callback() 
// }