import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // State variables to manage password properties
  const [length, setLength] = useState(8); // Length of the password
  const [password, setPassword] = useState(''); // Generated password
  const [numberAllowed, setNumberAllowed] = useState(false); // Whether numbers are allowed in the password
  const [charAllowed, setCharAllowed] = useState(false); // Whether special characters are allowed
  const [passwordStrength, setPasswordStrength] = useState(''); // Password strength (Weak, Medium, Good, Strong)

  // useRef to reference the password input field for copying to clipboard
  const passwordRef = useRef(null);

  // Function to generate a random password based on the selected options
  const passGenerator = useCallback(() => {
    let pass = ''; // Initialize an empty password string
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Base string with letters

    // Add numbers to the base string if allowed
    if (numberAllowed) str += '1234567890';
    // Add special characters to the base string if allowed
    if (charAllowed) str += '!@#$%^&*()-_=+[]{}|;:\'",.<>?/';

    // Loop to generate a random password of the desired length
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass); // Update the password state with the generated password
  }, [length, numberAllowed, charAllowed]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select(); // Select the password input field
    window.navigator.clipboard.writeText(password); // Copy the selected text to the clipboard
  }, [password]);

  // useEffect to automatically generate a new password when options change
  useEffect(() => {
    passGenerator(); // Generate a new password when length, charAllowed, or numberAllowed changes
  }, [length, charAllowed, numberAllowed]);

  // Function to analyze the strength of the generated password
  const analyzePasswordStrength = useCallback((password) => {
    let strength = 0; // Initialize a strength score

    // Check various criteria and increase strength accordingly
    if (password.length >= 8) strength += 1; // Password length
    if (/[A-Z]/.test(password)) strength += 1; // Contains uppercase letters
    if (/[a-z]/.test(password)) strength += 1; // Contains lowercase letters
    if (/[0-9]/.test(password)) strength += 1; // Contains numbers
    if (/[\W_]/.test(password)) strength += 1; // Contains special characters

    // Return the password strength based on the score
    switch (strength) {
      case 5:
        return 'Strong'; // Meets all criteria
      case 4:
        return 'Good'; // Meets most criteria
      case 3:
        return 'Medium'; // Meets some criteria
      default:
        return 'Weak'; // Meets few or no criteria
    }
  }, []);

  // useEffect to analyze and update the password strength whenever the password changes
  useEffect(() => {
    setPasswordStrength(analyzePasswordStrength(password)); // Update password strength
  }, [password, analyzePasswordStrength]);

  return (
    <>
      <div className='w-full max-w-d mx-auto shadow-md
        rounded-lg px-2  my-8 bg-blue-300  text-center'>
        <div className='w-full max-w-d mx-auto shadow-md
        rounded-lg px-4 my-8 text-white-500 bg-blue-100'>
          <h1 className='text-white text-center m-3 pt-3 text-3xl text-green-800'>Password Generator</h1>
          
          {/* Password Input Field */}
          <input
            className='rounded-lg'
            type="text"
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordRef}
          />
          {/* Display Password Strength */}
          <span className={`ml-2 ${passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Good' ? 'text-yellow-500' : 'text-red-500'}`}>
            {passwordStrength}
          </span>

          {/* Copy Password Button */}
          <button
            onClick={copyPasswordToClipboard}
            className='bg-blue-600 outline-none text-white 
            px-3 py-0.5 shrink-0 m-3 p-3 rounded-full'
          >
            Copy
          </button>
        </div>

        {/* Options for Password Length and Content */}
        <div className='flex text-sm gap-x-2 items-center justify-center text-2xl text-orange-800 bg-blue-200 rounded-lg p-2 '>
          <div className='flex items-center gap-x-1'>
            {/* Range Input to Set Password Length */}
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox to Allow Numbers */}
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          {/* Checkbox to Allow Special Characters */}
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={charAllowed}
              id='characterInput'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
//4kp%>^F2RQgD^g+rg'