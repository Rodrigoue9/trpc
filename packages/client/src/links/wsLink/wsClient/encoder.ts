import type { Encoder } from '@trpc/server/adapters/ws';

export type { Encoder };

export function toWebSocketSendData(
  data: ReturnType<Encoder['encode']>,
): string | Uint8Array<ArrayBuffer> {
  if (typeof data === 'string') {
    return data;
  }
  if (data.buffer instanceof ArrayBuffer) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
  return new Uint8Array(data);
}

export const jsonEncoder: Encoder = {
  encode: (data) => JSON.stringify(data),
  decode: (data) => {
    if (typeof data !== 'string') {
      throw new Error(
        'jsonEncoder received binary data. JSON uses text frames. ' +
          'Use a binary encoder for binary data.',
      );
    }
    return JSON.parse(data);
  },
};
