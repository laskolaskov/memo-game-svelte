export function createGame(size: number) {
    //first half of cards
    const a = Array((size * size) / 2).fill(0).map((n, i) => i + 1)
    //merge and shuffle
    const base = [...a, ...a].sort(() => 0.5 - Math.random())
    //map the values to card objects and return
    return base.map((n, i) => {
        return {
            value: n,
            flipped: false,
            index: i
        }
    })
}

export function getViewportSize() {
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );

    console.log("size :: ", vw, vh)

    return {
        width: vw,
        height: vh
    }
}

export function getDimensions(size: number) {
    const viewportSize = getViewportSize()

    let s = {
        repeat: 1,
        width: "",
        height: "",
    }

    switch (size) {
        case 4:
            if (viewportSize.height > viewportSize.width) {
                //portrait
                s.repeat = 4;
                s.width = "10vh";
                s.height = "10vh";
            } else {
                //landscape
                s.repeat = 4;
                s.width = "10vh";
                s.height = "10vh";
            }
            break;

        case 8:
            if (viewportSize.height > viewportSize.width) {
                //portrait
                s.repeat = 8;
                s.width = "10vh";
                s.height = "10vh";
            } else {
                //landscape
                s.repeat = 8;
                s.width = "10vh";
                s.height = "10vh";
            }
            break;

        default:
            if (viewportSize.height > viewportSize.width) {
                //portrait
                s.repeat = 6;
                s.width = "10vh";
                s.height = "10vh";
            } else {
                //landscape
                s.repeat = 6;
                s.width = "10vh";
                s.height = "10vh";
            }
            break;
    }



    return s
}