interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="pixel-modal-backdrop">
      <div className="pixel-modal pixel-pop">
        <div className="text-5xl mb-4"></div>
        <h2 className="text-3xl font-bold text-amber-400 mb-2">BINGO!</h2>
        <p className="text-white/80 mb-6">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full pixel-btn text-sm"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
