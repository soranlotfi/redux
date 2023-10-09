import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useAppDispatch, useAppSelector} from "./app/hooks.ts";
import {incremented, amountAdded} from "./features/counter/counterSlice.ts"
import {Breed, useFetchBreedsQuery} from "./features/data/dataApiSlice.ts"
import {useState} from "react";
import Gif from "./assets/Wedges-3s-200px.gif"

function App() {
    const [numdogs, setNumdogs] = useState<number>(5)
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    const {data, isFetching} = useFetchBreedsQuery(numdogs)
    const handleClick = () => {
        dispatch(incremented())
    }
    const handleTen = () => {
        dispatch(amountAdded(10))
    }
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>

            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => handleClick()}>
                    add on by one
                </button>
                <button onClick={() => handleTen()}>
                    Add 10 to the value
                </button>
                <p>counter is {count}</p>

                <select value={numdogs} onChange={(e) => setNumdogs(Number(e.target.value))}>
                    <option value={"5"}>5</option>
                    <option value={"10"}>10</option>
                    <option value={"15"}>15</option>
                    <option value={"20"}>20</option>
                    <option value={"25"}>20</option>
                </select>

                {!isFetching ? <div>
                    <p>Number of dogs fetched : {!isFetching ? data?.length : 0}</p>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Picture</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            !isFetching && data?.map((breed: Breed, index: number) => (
                                <tr key={index}>
                                    <td>{breed.name}</td>
                                    <td><img alt={"dog"} style={{width: "300px"}} src={breed.image.url}/></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>

                </div> : <div>
                    <div>
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={Gif} className="logo" alt="Vite logo"/>
                        </a>
                    </div>
                </div>}
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
