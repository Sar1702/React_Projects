import { useState , useCallback , useEffect , useRef } from 'react';
import './App.css';

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState('');

  const passwordRef = useRef(null)
  const genratePassword = useCallback(() =>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
    if(numberallowed) str +="0123456789"
    if(charallowed) str +="!@#$%^&*()_+"

    for(let i = 0 ; i< length ; i++){
      const char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length , numberallowed,charallowed])
  
  const copyPasswordToclipboard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  useEffect(()=>{
    genratePassword()
  },[length,numberallowed,charallowed])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-black-500 text-orange-500'>
        <h1 className='text-white text-center my-3'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToclipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(e.target.value)}  
              name=''
              id=''
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberallowed}  // ✅ Fixed state reference
              id="numberInput"
              onChange={() => setnumberallowed((prev) => !prev)}  // ✅ Fixed function reference
            />
            <label htmlFor="numberInput ">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charallowed}  // ✅ Fixed state reference
              id="characterInput"
              onChange={() => setcharallowed((prev) => !prev)}  // ✅ Fixed function reference
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
