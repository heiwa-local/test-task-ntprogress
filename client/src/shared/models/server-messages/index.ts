import {Instrument, OrderStatus, ServerMessageType} from "../../enumes";
import {Envelope, Message, Quote} from "../base";

export interface ServerEnvelope extends Envelope {
    messageType: ServerMessageType
}

export interface ServerMessage extends Message {

}

export interface ErrorInfo extends ServerMessage {
    reason: string
}

export interface SuccessInfo extends ServerMessage {

}

export interface ExecutionReport extends ServerMessage {
    orderId: string
    orderStatus: OrderStatus
}

export interface MarketDataUpdate extends ServerMessage {
    subscriptionId: string
    instrument: Instrument
    quotes: [Quote]
}
