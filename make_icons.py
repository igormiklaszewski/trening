"""Generuje ikony PNG (bez zależności): ciemne tło + pomarańczowa sztanga."""
import zlib, struct

def png(size, path):
    s = size
    rows = []
    for y in range(s):
        row = bytearray([0])
        for x in range(s):
            u, v = x / s, y / s
            c = (15, 17, 21)
            # gryf
            if 0.18 < u < 0.82 and 0.46 < v < 0.54:
                c = (238, 240, 244)
            # talerze
            for a, b, h in ((0.20, 0.30, 0.30), (0.30, 0.38, 0.38), (0.62, 0.70, 0.38), (0.70, 0.80, 0.30)):
                if a < u < b and 0.5 - h / 2 < v < 0.5 + h / 2:
                    c = (255, 122, 26)
            row += bytes(c)
        rows.append(bytes(row))
    raw = b''.join(rows)
    def chunk(t, d):
        c = struct.pack('>I', len(d)) + t + d
        return c + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    data = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', s, s, 8, 2, 0, 0, 0)) \
        + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')
    open(path, 'wb').write(data)

png(180, 'icon-180.png')
png(512, 'icon-512.png')
