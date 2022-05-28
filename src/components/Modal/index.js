import React from 'react'

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation()
  return (
    <section className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal__container" onClick={handleModalContainerClick}>
        <button className="modal__close" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </section>
  )
}
