import React, {useEffect, useState} from 'react';
import './App.css';
import {ClientEnvelope, SubscribeMarketData} from "../shared/models";
import {ClientMessageType, Instrument} from "../shared/enumes";
import {ServerEnvelope} from "../shared/models";
import { WSConnector } from "../shared/api";

const ws = new WSConnector()
function App() {
    const [isPaused, setIsPaused] = useState(false);

    // const ws = useRef<WSConnector>()
    const [status, setStatus] = useState("");
    const [data, setData] = useState<ServerEnvelope>()

    useEffect(() => {
        if (!isPaused) {
            ws.connect()
            console.log("connected")
            // ws.current = new WebSocket("ws://localhost:8080/ws/");
            // ws.onopen = () => setStatus("Open")
            // ws.current.onclose = () => setStatus("Close")
            // ws.current.onmessage = (message: any) => {setData(message)}
        }
        return () => {
            console.log("disconnected")
            ws.disconnect()
        }
    }, [ws, isPaused])

    const getData = () => {
        ws.subscribeMarketData(
            Instrument.eur_rub
        )
        // ws.current?.send(JSON.stringify({
        //     messageType: ClientMessageType.subscribeMarketData,
        //     message: {
        //         instrument: Instrument.eur_rub
        //     } as SubscribeMarketData
        // } as ClientEnvelope))
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => setIsPaused(!isPaused)}>Change connection</button>
                <button onClick={() => getData()}>123132</button>
                <p>
                    {status}
                </p>
                <p>
                    {data?.message.toString()}
                </p>
            </header>
        </div>
  );
}

export default App;
