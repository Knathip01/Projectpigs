import { useState } from "react";

const person = {
  name: 'Pig feeding game',
  theme: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',  
    height: '100vh'  
  }
};

export default function TodoList() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [image, setImage] = useState("https://i.pinimg.com/736x/1b/4c/0c/1b4c0c782e5bfd0a7e45f5eef194c3af.jpg"); 

  const feed = (foodLevel) => {
    const newLevel = level + foodLevel;

    if (newLevel > 100) {
      setImage("bangdung.png"); 
    }

    setLevel(newLevel);
    setSize(100 + newLevel); 
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={image}
        alt="bangdung.png"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: '90vw',  
          maxHeight: '90vh', 
          objectFit: 'cover', 
        }}
      />

      <h2>Feed the Pig</h2>
      {/* Container for horizontal buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => feed(5)}
          style={{ backgroundColor: 'red', color: 'black' }}
        >
          แตงโม (+5)
        </button>
        <button 
          onClick={() => feed(10)}
          style={{ backgroundColor: 'yellow', color: 'black' }}
        >
          ฟักทอง (+10)
        </button>
        <button 
          onClick={() => feed(20)}
          style={{ backgroundColor: 'lightgreen', color: 'black' }}
        >
          หญ้า (+20)
        </button>
      </div>

      <p>Current Level: {level}</p>
    </div>
  );
}















