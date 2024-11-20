import React from "react";
import Modal from "react-modal";
import "./ModalNote.css";
import {useForm} from "react-hook-form";
import {SaveNote, UpdateNote} from "../../models/notes";
import {useNotes} from "../../hooks";

interface ModalNoteProps {
  isOpen: boolean;
  idupdate: number;
  onClose: () => void;
  isEdit?: boolean;
}

const ModalNote: React.FC<ModalNoteProps> = ({ isOpen, idupdate, onClose, isEdit}) => {

  const { reset, register, handleSubmit, formState: { errors } } = useForm<SaveNote>();

  const { handleSaveNote, handleUpdateNote, loading } = useNotes();

    const onSubmit = (data: SaveNote) => {
        console.log(data);
        onClose();
        if(isEdit){
          const newData: UpdateNote = {...data, id: idupdate as number};
          console.log("dataUpdate: ", newData)
          handleUpdateNote(newData)
        }else
          handleSaveNote(data);
        reset();
    };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-note"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="modal-content">
        <input
          type="text"
          placeholder="Escribe un título"
          className="modal-title"
          {...register("title",
              {
                required: true,
                max: {value: 100, message: "Máximo 100 caracteres"},
              },
          )}
        />
        {errors.title && <p>{errors.title.message}</p>}
        <textarea className="modal-textarea"
                  placeholder="Escribe tu nota..."
                  {...register("description",
                      {
                        required: true,
                        max: {value: 1000, message: "Máximo 1000 caracteres"},
                      },
                  )}
        ></textarea>
        {errors.description && <p>{errors.description.message}</p>}
        <div className="modal-buttons">
          <button className="button-cancel" onClick={onClose}>
            Volver
          </button>
          <button className="button-save" type="submit" disabled={loading}>
            Guardar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalNote;
