import React, { useState } from "react";
import "./Diary.css";
import { FaSearch } from "react-icons/fa";
import Cards from "../cards/Cards";
import ModalNote from "../ModalNote/ModalNote";
import IMAGECARD from '../../assets/img/imageCard.jpg'
import {useNotes} from "../../hooks";
import {LoginLoader} from "../loaders";
import {Note} from "../../models/notes";

const Diary: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { notes, isLoading, handleDeleteNote, loading } = useNotes();
  const [noteEdit, setNoteEdit] = useState<boolean>(false);
  const [noteId, setNoteId] = useState<number>(0);

  const handleOpenModal = (isedit: boolean, id: number) => {
    setNoteEdit(isedit);
    setNoteId(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filteredNotes = notes?.filter((note: Note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.createdAt.includes(searchQuery)
  );
  console.log(loading)
  return (
    <div>
      <div className="diary-container">
        <div className="diary-header">
          <h2>¡Hola, bienvenido!</h2>
          <div className="diary-actions">
            <button onClick={() => handleOpenModal(false, 0)}>Crear</button>
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar por título o fecha (YYYY-MM-DD)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="search-icon"/>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="cards-container">
        {(isLoading || loading) ? (
            <LoginLoader />
        ) : (
          <>
            {filteredNotes.length > 0 ? (
                filteredNotes.map((note) => (
                  <Cards
                    key={note.id}
                    note={note}
                    imageUrl={IMAGECARD}
                    onEdit={() => handleOpenModal(true, note.id)}
                    onDelete={() => handleDeleteNote(note.id)}
                  />
                ))
              ) : (
                <p style={{
                  marginTop: "100px",
                  fontSize: "40px",
                  color: "#89939E"
                }}>Aun no tienes notas ¿Quieres crear una?</p>
              )}
            <ModalNote
              idupdate={noteId}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              isEdit={noteEdit}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Diary;

