import React, {useState} from "react";
import "./Cards.css";
import {Note} from "../../models/notes";
import {formatDate} from "../../utils";
import Modal from "react-modal";

interface CardProps {
  note: Note;
  imageUrl: string;
  onEdit: () => void;
  onDelete: () => void;
}

const Cards: React.FC<CardProps> = ({ note, imageUrl, onEdit, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTitleClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  return (
    <div className="note-card">
      <div className="note-card-title" onClick={handleTitleClick}>
        <h3 style={{cursor: "pointer"}}>{note.title}</h3>
      </div>
      <img src={imageUrl} alt="Nota" className="note-card-image" />
      <p className="note-card-date">Fecha: {formatDate(note.createdAt)}</p>
      <div className="note-card-actions">
        <button className="note-card-button" onClick={onEdit}>
          Editar
        </button>
        <button className="note-card-button" onClick={onDelete}>
          Eliminar
        </button>
      </div>
        {isModalOpen && (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="modal-note"
                overlayClassName="modal-overlay"
                ariaHideApp={false}
            >
                <div className="modal-content">
                    <h3 className="modal-title">{note.title}</h3>
                    <p className="modal-date">Fecha: {formatDate(note.createdAt)}</p>
                    <div className="modal-description">
                        <p>{note.description}</p>
                    </div>
                    <div className="modal-buttons">
                        <button className="button-cancel" onClick={handleCloseModal}>
                            Volver
                        </button>
                    </div>
                </div>
            </Modal>
        )}
    </div>
  );
};

export default Cards;

