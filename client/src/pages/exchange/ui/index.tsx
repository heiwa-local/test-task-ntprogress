import React, {useEffect, useState} from 'react';
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {Ticker} from "../../../features";
import {WSConnector} from "../../../shared/api";
import {ServerEnvelope} from "../../../shared/models";
import {Instrument} from "../../../shared/enumes";

const ws = new WSConnector()

export const ExchangePage = () => {
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
        <Layout>
            <Content>
                <Ticker buyCost={1} sellCost={2}/>
            </Content>
        </Layout>
    );
};