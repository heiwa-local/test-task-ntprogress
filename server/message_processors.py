from __future__ import annotations

from typing import TYPE_CHECKING


if TYPE_CHECKING:
    import fastapi

    from models import client_messages
    from ntpro_server import NTProServer


async def subscribe_market_data_processor(
        server: NTProServer,
        websocket: fastapi.WebSocket,
        message: client_messages.SubscribeMarketData,
):
    from models import server_messages

    # TODO ...

    return server_messages.SuccessInfo()


async def unsubscribe_market_data_processor(
        server: NTProServer,
        websocket: fastapi.WebSocket,
        message: client_messages.UnsubscribeMarketData,
):
    from models import server_messages

    # TODO ...

    return server_messages.SuccessInfo()


async def place_order_processor(
        server: NTProServer,
        websocket: fastapi.WebSocket,
        message: client_messages.PlaceOrder,
):
    from models import server_messages

    # TODO ...

    return server_messages.SuccessInfo()
