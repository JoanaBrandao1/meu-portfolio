# Uso: python3 scripts/oncinha.py public/patterns
# Troque as cores nas duas últimas linhas para mudar a estampa.
# Gera uma estampa de oncinha que se repete sem emenda (tile 160x160).
import math, random, sys

def blob(cx, cy, rx, ry, rot, rnd):
    # elipse irregular com 8 pontos e curvas suaves
    pts = []
    n = 8
    for i in range(n):
        a = 2 * math.pi * i / n
        k = rnd.uniform(0.78, 1.18)
        x, y = rx * k * math.cos(a), ry * k * math.sin(a)
        c, s = math.cos(rot), math.sin(rot)
        pts.append((cx + x * c - y * s, cy + x * s + y * c))
    d = ""
    for i in range(n):
        p0, p1 = pts[i], pts[(i + 1) % n]
        mx, my = (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2
        if i == 0:
            pm = pts[-1]
            d += f"M{(pm[0]+p0[0])/2:.1f} {(pm[1]+p0[1])/2:.1f}"
        d += f"Q{p0[0]:.1f} {p0[1]:.1f} {mx:.1f} {my:.1f}"
    return d + "Z"

def rosette(cx, cy, r, rnd):
    squash = rnd.uniform(0.62, 0.85)
    tilt = rnd.uniform(0, math.pi)
    ct, st = math.cos(tilt), math.sin(tilt)
    center = blob(cx, cy, r * 0.72, r * 0.72 * squash, tilt, rnd)
    ring = []
    pieces = rnd.choice([2, 3, 3, 4])
    start = rnd.uniform(0, 2 * math.pi)
    for i in range(pieces):
        a = start + 2 * math.pi * i / pieces + rnd.uniform(-0.3, 0.3)
        span = 2 * math.pi / pieces * rnd.uniform(0.55, 0.8)
        # arco feito de 3 manchas encostadas, para parecer um "C" irregular
        for j in (-1, 0, 1):
            b = a + j * span / 3
            ex, ey = r * math.cos(b), r * squash * math.sin(b)
            px, py = cx + ex * ct - ey * st, cy + ex * st + ey * ct
            thick = r * rnd.uniform(0.2, 0.32) * (0.75 if j else 1)
            ring.append(blob(px, py, r * span * 0.27, thick, b + tilt + math.pi / 2, rnd))
    return center, ring

def make(bg, mid, dark, seed=7, W=220):
    rnd = random.Random(seed)
    spots = []
    # rosetas distribuídas com distância mínima
    tries = 0
    while len(spots) < 16 and tries < 5000:
        tries += 1
        x, y, r = rnd.uniform(0, W), rnd.uniform(0, W), rnd.uniform(13, 21)
        ok = all(min(abs(x - a), W - abs(x - a)) ** 2 + min(abs(y - b), W - abs(y - b)) ** 2 > (r + c + 5) ** 2 for a, b, c in spots)
        if ok:
            spots.append((x, y, r))
    centers, rings, dots = [], [], []
    for x, y, r in spots:
        for dx in (-W, 0, W):
            for dy in (-W, 0, W):
                if not (-30 < x + dx < W + 30 and -30 < y + dy < W + 30):
                    continue
                rr = random.Random(round(x) * 1000 + round(y))
                c, ring = rosette(x + dx, y + dy, r, rr)
                centers.append(c); rings += ring
    # pintinhas soltas
    small = [(rnd.uniform(0, W), rnd.uniform(0, W), rnd.uniform(2.5, 5)) for _ in range(18)]
    for x, y, r in small:
        if all((x - a) ** 2 + (y - b) ** 2 > (c + 6) ** 2 for a, b, c in spots):
            for dx in (-W, 0, W):
                for dy in (-W, 0, W):
                    if not (-8 < x + dx < W + 8 and -8 < y + dy < W + 8):
                        continue
                    dots.append(blob(x + dx, y + dy, r, r * 0.8, 0.5, random.Random(int(x * 10))))
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{W}" viewBox="0 0 {W} {W}">'
            f'<rect width="{W}" height="{W}" fill="{bg}"/>'
            f'<path fill="{mid}" d="{"".join(centers)}"/>'
            f'<path fill="{dark}" d="{"".join(rings + dots)}"/></svg>')

out = sys.argv[1]
open(f"{out}/oncinha.svg", "w").write(make("#d9a25f", "#b97a3a", "#2b1d14"))
open(f"{out}/oncinha-rosa.svg", "w").write(make("#e07b8d", "#d46479", "#a8384d", seed=11))
