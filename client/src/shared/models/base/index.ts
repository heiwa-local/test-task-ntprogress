import Decimal from "decimal.js";
import {ClientMessage} from "../client-messages";
import {ServerMessage} from "../server-messages";
import {ClientMessageType, ServerMessageType} from "../../enumes";

export interface Envelope {
    messageType: ClientMessageType | ServerMessageType
    message: object
}

export interface Message {

}

export interface Quote {
    bid: Decimal
    offer: Decimal
    minAmount: Decimal
    maxAmount: Decimal
}
