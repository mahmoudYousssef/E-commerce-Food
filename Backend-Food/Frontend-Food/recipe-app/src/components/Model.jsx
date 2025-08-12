import React from 'react'

function Model({ onClose }) {
  return (
    <>
    <div className="backdrop" style={
      {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }
    }>
  <div className="modal" tabindex="-1" style={{
    display: 'block',
    backgroundColor: '#d5aa75ff',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '100%',
    padding: '20px',
    boxShadow: '5px 10px rgba(0, 0, 0, 2)',

   }} role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button onClick={onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button onClick={onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
    </>

  )
}

export default Model