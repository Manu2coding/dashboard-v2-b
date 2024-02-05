import { create } from 'zustand';
import { boardData } from '../data';

const useBoard = create((set) => ({
    board: boardData,
    setBoard: (newBoard) => set((state) => ({ board: newBoard, otherState: state.otherState })),
  }));

export default useBoard;

  