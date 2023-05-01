import {ClientMessage} from "../../models/client-messages";
import {ClientMessageType, Instrument, OrderSide, ServerMessageType} from "../../enumes";
import Decimal from "decimal.js";
import {ServerEnvelope} from "../../models/server-messages";

const camelcaseKeysDeep = require('camelcase-keys-deep');
export class WSConnector {
  connection: WebSocket | undefined;

  constructor() {
    this.connection = undefined;
  }

  connect = () => {
    this.connection = new WebSocket('ws://localhost:8080/ws/');
    this.connection.onclose = () => {
      this.connection = undefined;
    };

    this.connection.onerror = () => {

    };

    this.connection.onopen = () => {

    };

    this.connection.onmessage = (event) => {

      const message: ServerEnvelope = camelcaseKeysDeep(JSON.parse(event.data));
      console.log(message.messageType)
      switch (message.messageType) {
        case ServerMessageType.success:
          console.log("success")
          break;
        case ServerMessageType.error:

          break;
        case ServerMessageType.executionReport:

          break;
        case ServerMessageType.marketDataUpdate:

          break;
      }
    };
  }

  disconnect = () => {
    this.connection?.close();
  }

  send = (message: ClientMessage) => {
    this.connection?.send(JSON.stringify(message));
  }

  subscribeMarketData = (instrument: Instrument) => {
    this.send({
      messageType: ClientMessageType.subscribeMarketData,
      message: {
        instrument,
      }
    });
  }

  unsubscribeMarketData = (subscriptionId: string) => {
    this.send({
      messageType: ClientMessageType.unsubscribeMarketData,
      message: {
        subscriptionId,
      }
    });
  }

  placeOrder = (instrument: Instrument, side: OrderSide, amount: Decimal, price: Decimal) => {
    this.send({
      messageType: ClientMessageType.placeOrder,
      message: {
        instrument,
        side,
        amount,
        price,
      }
    });
  }
}
