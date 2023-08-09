window.onload = () => {
    console.log("a2rp");

    const button = document.querySelector(".button");
    button.addEventListener("mouseover", (event) => {
        event.stopPropagation();
        const position = {
            x: event.clientX - button.offsetLeft,
            y: event.clientY - button.offsetTop
        };
        // console.log(position);

        document.querySelector(".circleChild").style.cssText = `
            left: ${position.x}px;
            top: ${position.y}px;
            transform: scale(1000);
        `;
    });
    button.addEventListener("mouseout", (event) => {
        event.stopPropagation();
        const position = {
            x: event.clientX - button.offsetLeft,
            y: event.clientY - button.offsetTop
        };
        document.querySelector(".circleChild").style.cssText = `
            left: ${position.x}px;
            top: ${position.y}px;
            transform: scale(0);
        `;
    });
};
