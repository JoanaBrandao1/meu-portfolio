# Gera o papel de parede de símbolos anos 2000 (repete sem emenda).
# Uso: python3 scripts/papel-de-parede.py public/patterns
import math
import random
import sys

W = 520  # tamanho do bloco que se repete
COLORS = ["#e07b8d", "#f3c64f", "#c4a3ff", "#8fd9f2", "#e07b8d", "#f19aab"]

SPARKLE = "M12 0C12.9 7.6 16.4 11.1 24 12 16.4 12.9 12.9 16.4 12 24 11.1 16.4 7.6 12.9 0 12 7.6 11.1 11.1 7.6 12 0Z"
HEART = "M12 21C12 21 3 15 3 8.8 3 5.6 5.4 3.5 8 3.5 9.9 3.5 11.2 4.6 12 6 12.8 4.6 14.1 3.5 16 3.5 18.6 3.5 21 5.6 21 8.8 21 15 12 21 12 21Z"
WING_TOP = "M23 17C17 3 5 1 3.5 9 2.5 15 11 19.5 23 19.5Z"
WING_BOTTOM = "M23 21C14 21 7 25 9 32 11 38 19 33 23 23.5Z"


def star_points():
    pts = []
    for i in range(10):
        r = 11.5 if i % 2 == 0 else 4.9
        a = -math.pi / 2 + i * math.pi / 5
        pts.append(f"{12 + r * math.cos(a):.2f},{12.8 + r * math.sin(a):.2f}")
    return " ".join(pts)


def symbol(kind, color, outline):
    paint = f'fill="none" stroke="{color}" stroke-width="1.6" stroke-linejoin="round"' if outline else f'fill="{color}"'
    if kind == "sparkle":
        return 24, f'<path {paint} d="{SPARKLE}"/>'
    if kind == "heart":
        return 24, f'<path {paint} d="{HEART}"/>'
    if kind == "star":
        return 24, f'<polygon {paint} points="{star_points()}"/>'
    if kind == "daisy":
        petals = "".join(
            f'<ellipse cx="12" cy="6.2" rx="3.4" ry="5" transform="rotate({d} 12 12)"/>' for d in range(0, 360, 60)
        )
        return 24, f'<g {paint}>{petals}</g><circle cx="12" cy="12" r="3" fill="#f3c64f"/>'
    if kind == "butterfly":
        wings = f'<path d="{WING_TOP}"/><path d="{WING_BOTTOM}"/>'
        return 48, (
            f'<g {paint}>{wings}<g transform="translate(48 0) scale(-1 1)">{wings}</g></g>'
            f'<rect x="22.6" y="13" width="2.8" height="19" rx="1.4" fill="{color}"/>'
        )
    if kind == "cd":
        return 24, (
            f'<circle cx="12" cy="12" r="10.5" fill="none" stroke="{color}" stroke-width="1.6"/>'
            f'<circle cx="12" cy="12" r="3.2" fill="none" stroke="{color}" stroke-width="1.6"/>'
        )
    if kind == "dot":
        return 24, f'<circle cx="12" cy="12" r="5" fill="{color}"/>'


def main(out):
    rnd = random.Random(2000)
    kinds = ["sparkle"] * 7 + ["heart"] * 4 + ["star"] * 4 + ["butterfly"] * 3 + ["daisy"] * 3 + ["cd"] * 2 + ["dot"] * 5
    rnd.shuffle(kinds)
    placed = []
    for kind in kinds:
        size = {"sparkle": (14, 30), "dot": (5, 8), "butterfly": (30, 40)}.get(kind, (18, 28))
        for _ in range(400):
            x, y, s = rnd.uniform(0, W), rnd.uniform(0, W), rnd.uniform(*size)
            far = all(
                min(abs(x - a), W - abs(x - a)) ** 2 + min(abs(y - b), W - abs(y - b)) ** 2 > ((s + c) / 2 + 26) ** 2
                for a, b, c in [(p[0], p[1], p[2]) for p in placed]
            )
            if far:
                placed.append((x, y, s, kind, rnd.choice(COLORS), rnd.random() < 0.4, rnd.uniform(-25, 25)))
                break
    parts = []
    for x, y, s, kind, color, outline, rot in placed:
        box, svg = symbol(kind, color, outline and kind not in ("dot", "cd"))
        k = s / box
        for dx in (-W, 0, W):
            for dy in (-W, 0, W):
                cx, cy = x + dx, y + dy
                if -s < cx < W + s and -s < cy < W + s:
                    parts.append(
                        f'<g transform="translate({cx:.1f} {cy:.1f}) rotate({rot:.0f}) scale({k:.3f}) translate({-box / 2} {-box / 2})">{svg}</g>'
                    )
    doc = f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{W}" viewBox="0 0 {W} {W}">{"".join(parts)}</svg>'
    open(f"{out}/simbolos.svg", "w").write(doc)


main(sys.argv[1] if len(sys.argv) > 1 else "public/patterns")
