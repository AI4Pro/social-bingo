interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="pixel-root p-6">
      <div className="pixel-panel pixel-bg-card max-w-sm">
        <h1 className="pixel-title mb-1">Soc Ops</h1>
        <p className="pixel-sub mb-4">Social Bingo  Pixel Jam</p>

        <div className="bg-black/20 rounded-lg p-4 mb-6 border border-black/40">
          <h2 className="font-semibold text-sm text-white mb-2">How to play</h2>
          <ul className="text-left text-white/80 text-xs space-y-2">
            <li> Find people who match the questions</li>
            <li> Tap a square when you find a match</li>
            <li> Get 5 in a row to win!</li>
          </ul>
        </div>

        <button onClick={onStart} className="w-full pixel-btn text-sm">
          Start Game
        </button>
      </div>
    </div>
  );
}
