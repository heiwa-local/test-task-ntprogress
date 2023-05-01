export enum ClientMessageType {
    subscribeMarketData = 1,
    unsubscribeMarketData,
    placeOrder,
}

export enum ServerMessageType {
    success = 1,
    error = 2,
    executionReport = 3,
    marketDataUpdate = 4,
}