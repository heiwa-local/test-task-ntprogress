import mimetypes
import pathlib

import fastapi

import ntpro_server

api = fastapi.FastAPI()
server = ntpro_server.NTProServer()


@api.get('/static/{path}')
async def get(path: pathlib.Path):
    static_file = (pathlib.Path('static') / path).read_text()
    mime_type, encoding = mimetypes.guess_type(path)
    return fastapi.responses.PlainTextResponse(static_file, media_type=mime_type)


@api.websocket('/ws/')
async def websocket_endpoint(websocket: fastapi.WebSocket):
    await server.connect(websocket)

    try:
        await server.serve(websocket)
    except fastapi.WebSocketDisconnect:
        server.disconnect(websocket)
