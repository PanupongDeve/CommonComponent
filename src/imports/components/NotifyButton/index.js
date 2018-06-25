import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class NotifyButton extends Component {
  notify = () => {
      return toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        });
  }

  render(){
    return (
      <div>
      <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}

export default NotifyButton;