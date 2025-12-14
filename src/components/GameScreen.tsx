import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full pixel-root">
      {/* Header */}
      <header className="flex items-center justify-between p-3 pixel-panel w-full">
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded pixel-btn text-sm"
        >
           Back
        </button>
        <h1 className="pixel-title">Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-white/80 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-center py-2">
          <span className="pixel-badge"> BINGO! You got a line!</span>
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <div className="pixel-panel pixel-bg-card w-full max-w-md rounded-lg">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
