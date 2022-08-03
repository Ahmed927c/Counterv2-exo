import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Footer from './components/Footer';

const App = () => {
    const [counters, setCounters] = useState([0]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    };

    return (
    
        <div className="app">
            <button className="btn-violet1" onClick={addCounter}>Add counter</button>

            <div className="counters">
          
                {counters.map((value, index) => {
                    return (
                        index < 3 && (
                            <Counter
                                value={value}
                                increment={() => {
                                    const newCounter = [...counters]
                                    newCounter[index]++;
                                    setCounters(newCounter)
                                }}
                                decrement={() => {
                                  const newCounter = [...counters]
                                  newCounter[index]--;
                                  setCounters(newCounter)
                              }}
                              reset={() => {
                                const newCounter = [...counters]
                                newCounter[index]=0;
                                setCounters(newCounter)
                            }}
                        
                            />
                       
                        )
                    );
                })}
                     <Footer/> 
            </div>
        </div>
     
    );
};

export default App;
