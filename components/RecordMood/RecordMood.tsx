import "./RecordMood.css";
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import welcomeImage from '../../assets/img/opcion2_imagenSaludo.jpg';
import { useMood } from "../../hooks";
import { LoginLoader } from "../loaders";
import {MoodModel, UserMoodRequest} from "../../models";
import {convertMoodDayInSpanish} from "../../adapters";
import {moodImages} from "../../utils";


interface FormInputs {
    reason: string;
}


function RecordMood() {
    const [selectedMood, setSelectedMood] = useState<MoodModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm<FormInputs>();

    
    const handleMoodClick = (mood: MoodModel) => {
        setSelectedMood(mood);
        setIsModalOpen(true); 
        reset(); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        reset(); 
    };

    const { moods, handleSaveMood, loading, isLoading } = useMood();
    console.log(moods);
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        if (selectedMood) {
            const moodData: UserMoodRequest = {
                moodId: selectedMood.id,
                note: data.reason
            };
            handleSaveMood(moodData);
        }
        setIsModalOpen(false);
    };

    const moodsWithImages = moods.map((mood: MoodModel) => ({
        ...mood,
        img: moodImages[mood.name]
    }));

    return (
        <div className='record_mood'>
            <div className='welcome_image'>
                <img className='welcome_image-img' src={welcomeImage} alt="Imagen de bienvenida" />
            </div>
            <h2 className='record_mood-title'>¿Cómo estás hoy?</h2>
            {(loading || isLoading) ? <LoginLoader />
            : (
                <div className='mood_grid'>
                    {moodsWithImages.map((mood) => (
                        <img
                            key={mood.id}
                            className='mood_image'
                            src={mood.img}
                            alt={mood.name}
                            onClick={() => handleMoodClick(mood)}
                        />
                    ))}
                </div>
                )}
            {selectedMood && <p className='selected_mood'>Has seleccionado: {convertMoodDayInSpanish(selectedMood.name)}</p>}

            {isModalOpen && (
                <div className='modal_overlay'>
                    <div className='modal_content'>
                        {selectedMood && <h2>¿Por qué te sientes {convertMoodDayInSpanish(selectedMood.name)}?</h2>}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea
                                {...register('reason')}
                                placeholder="Escribe como te sientes..."
                                className='textarea_field'
                            ></textarea>
                            <div className='modal_buttons'>
                                <button type="submit" className='save_button' disabled={loading}>Guardar</button>
                                <button type="button" className='cancel_button' onClick={closeModal}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecordMood;
