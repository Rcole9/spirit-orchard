import React, { useRef, useState } from 'react';

const midiTracks = [
  '01. Battle Theme MIDI.mid',
  '02. Lively City MIDI.mid',
  '03. Royal Castle MIDI.mid',
  '04. Peaceful Village MIDI.mid',
  '05. Long Journey MIDI.mid',
  '06. Hidden Cavern MIDI.mid',
  '07. Spirit Forest MIDI.mid',
  '08. Wood Forest Town MIDI.mid',
  '09. Battle Theme II MIDI.mid',
  '10. Dwarven Mine MIDI.mid',
  '11. Dangerous Cave MIDI.mid',
  '12. Goofy Monster MIDI.mid',
  '13. Magic Temple MIDI.mid',
  '14. Traveling The Sky MIDI.mid',
  '15. Volcanic Crater.mid',
  '16. Battle Theme III MIDI.mid',
  '17. Unknown Island MIDI.mid',
  '18. The OId Magician MIDI.mid',
  '19. East Town MIDI.mid',
  '20. Military Base MIDI.mid',
  '21. Malicious Scheme MIDI.mid',
  '22. Ancient Library MIDI.mid',
  '23. Pyramid MIDI.mid',
  '24. Battle Theme IV MIDI.mid',
  '25. Dark Factory MIDI.mid',
  '26. Demon King Castle MIDI.mid',
  '27. The Evil One MIDI.mid',
  '28. Holy Sanctuary MIDI.mid',
];

function AudioPlayer() {
  const audioRef = useRef();
  const [current, setCurrent] = useState(0);

  // Browsers do not natively play MIDI files, so this is a placeholder for integration with a MIDI player library.
  // For now, we just show the list and a play button.

  const handlePlay = () => {
    alert('MIDI playback requires a MIDI player library or conversion to MP3/OGG/WAV.');
  };

  return (
    <div style={{ margin: '2em auto', maxWidth: 400, textAlign: 'center' }}>
      <h3>Game Music</h3>
      <select value={current} onChange={e => setCurrent(Number(e.target.value))}>
        {midiTracks.map((track, idx) => (
          <option value={idx} key={track}>{track}</option>
        ))}
      </select>
      <br />
      <button onClick={handlePlay} style={{ marginTop: 10 }}>Play Track</button>
      <p style={{ color: 'gray', fontSize: 12, marginTop: 10 }}>
        MIDI playback is not supported natively in browsers.<br />
        Please convert to MP3/OGG/WAV or use a MIDI JS library for in-game playback.
      </p>
    </div>
  );
}

export default AudioPlayer;
