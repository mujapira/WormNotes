import { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

export function useNotes() {
  const context = useContext(NotesContext);
  return context;
}
