import {Note, SaveNote, UpdateNote} from "../../models/notes";
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteNote, getNotes, saveNote, updateNote} from "../../services/notes.service.ts";
import {SnackbarUtils} from "../../components";
import {useUserStore} from "../user";

const useNotes = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const user = useUserStore((state) => state);

    const { data, isLoading, isSuccess, refetch } = useQuery({
        queryKey: ["notes"],
        queryFn: () => getNotes(user.id),
    });

    useEffect(() => {
        if (!isLoading && isSuccess) {
            setNotes(data?.data);
        }
    }, [isLoading, notes, data, loading]);

    const mutationSave = useMutation({
        mutationFn: (note: SaveNote) => saveNote(note),
        onSuccess: () => {
            SnackbarUtils.success("Nota guardada");
            refetch();
        }
    })

    const mutationUpdate = useMutation({
       mutationFn: (note: UpdateNote) => updateNote(note),
       onSuccess: () => {
           SnackbarUtils.success("Nota actualizada");
           refetch();
       }
    });

    const mutationDelete = useMutation({
        mutationFn: (noteId: number) => deleteNote(noteId),
        onSuccess: () => {
            SnackbarUtils.success("Nota eliminada");
            refetch();
        }
    });

    const handleSaveNote = (note: SaveNote) => {
        setLoading(true);
        mutationSave.mutate(note, {
            onSuccess: () => {
                setLoading(false);
            }
        });
    }

    const handleUpdateNote = (note: UpdateNote) => {
        setLoading(true);
        mutationUpdate.mutate(note);
        setLoading(false);
    }

    const handleDeleteNote = (noteId: number) => {
        setLoading(true)
        mutationDelete.mutate(noteId);
        setLoading(false);
    }


    return {
        notes,
        isLoading,
        loading,
        handleSaveNote,
        handleUpdateNote,
        handleDeleteNote
    };
}

export default useNotes;